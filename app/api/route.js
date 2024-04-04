import { NextResponse } from "next/server";

const stripe = require("stripe")(
  "sk_test_51P1GVmRu5bi6eCdLyhmgFRUtNm6gmmAB97Jiu6JvdaWNliZzsc9NedUIyxL7MhDq0GGFEsIPb4f3ZaIEElAcKGHk00BAFrdMK7"
);

export async function POST(request) {
  let url = request.url.replace("api","")
  const { item } = await request.json();

  const transformedItem = {
    price_data: {
      currency: "usd",
      product_data: {
        images: [],
        name: item.name,
        description: item.description,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.quantity,
  };

  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [transformedItem],
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${url}/main/proposals?success=true`,
      cancel_url: `${url}/main/proposals?canceled=true`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
