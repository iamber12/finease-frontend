import { NextResponse } from "next/server";

const stripe = require("stripe")(
  "sk_test_51P1GVmRu5bi6eCdLyhmgFRUtNm6gmmAB97Jiu6JvdaWNliZzsc9NedUIyxL7MhDq0GGFEsIPb4f3ZaIEElAcKGHk00BAFrdMK7"
);

export async function POST(rqeuest) {
  const { item } = await rqeuest.json();

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

      success_url: `http://localhost:3000/main/dashboard?success=true`,
      cancel_url: `http://localhost:3000/main/dashboard?canceled=true`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
