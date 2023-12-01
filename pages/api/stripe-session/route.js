// Import necessary modules
import { NextResponse } from "next/server";
import Stripe from "stripe";

// Retrieve Stripe secret key from environment variables
const key = process.env.STRIPE_SECRET_KEY || "";

// Create a new instance of the Stripe class
const stripe = new Stripe(key, {
  apiVersion: "2023-10-16",
});

// Define the Next.js API route
export default async function handler(req, res) {
  const body = await req.body;
  console.log(body);

  try {
    if (body.data) {
      // Create a Stripe checkout session
      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        invoice_creation: {
          enabled: true,
        },
        shipping_options: [
          {
            shipping_rate: "shr_1OIVwFF558fyYGi291uEKM74",
          },
        ],
        line_items: body.data.map((item) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.name,
            },
            unit_amount: item.price * 100,
          },
          quantity: 1,
        })),
        success_url: `${req.headers.origin}/success`,
        cancel_url: `${req.headers.origin}/?canceled=true`,
      });
      console.log(session);
      // Check if userId is provided
      if (!body.userId)
        return res.status(400).json({ error: "userId is required" });

      // Return the created session
      return res.status(200).json({ session });
    } else {
      // Return a message if no data is found
      return res.status(400).json({ message: "No Data Found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
}
