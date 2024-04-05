import { NextResponse } from "next/server";

const stripe = require("stripe")(
  "sk_test_51P1GVmRu5bi6eCdLyhmgFRUtNm6gmmAB97Jiu6JvdaWNliZzsc9NedUIyxL7MhDq0GGFEsIPb4f3ZaIEElAcKGHk00BAFrdMK7"
);

const MOCK = 0

export async function POST(request) {
  let url;
  if (MOCK){
    url = "http://localhost:3000";
  }else{
    url = "http://172.172.160.6:3000"
  }
  const {
    item,
    req_uuid,
    loan_prop_uuid,
    borrower_uuid,
    lender_uuid,
    payer_type,
    from
  } = await request.json();

  console.log(
    item,
    req_uuid,
    loan_prop_uuid,
    borrower_uuid,
    lender_uuid,
    payer_type
  );
  const amt = item.price > 999999.99 ? 999999.98 : item.price;

  const transformedItem = {
    price_data: {
      currency: "usd",
      product_data: {
        images: [],
        name: item.name,
        description: item.description,
      },
      unit_amount: amt * 100,
    },
    quantity: 1,
  };

  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [transformedItem],
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${url}/main/${from}?success=true&req_uuid=${req_uuid}&loan_prop_uuid=${loan_prop_uuid}&borrower_uuid=${borrower_uuid}&lender_uuid=${lender_uuid}&payer_type=${payer_type}&amount=${amt}`,
      cancel_url: `${url}/main/${from}?canceled=true&req_uuid=${req_uuid}&loan_prop_uuid=${loan_prop_uuid}&borrower_uuid=${borrower_uuid}&lender_uuid=${lender_uuid}&payer_type=${payer_type}&amount=${amt}`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
