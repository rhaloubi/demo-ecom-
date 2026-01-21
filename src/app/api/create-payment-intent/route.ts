import { NextResponse } from "next/server";
import { env } from "~/env";
import { products } from "~/data/products";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { productId } = body;

    const product = products.find((p) => p.id === productId);

    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    // Get the host from the request headers to construct absolute URLs
    const host = request.headers.get("host") ?? "localhost:3000";
    const protocol = host.includes("localhost") ? "http" : "https";
    const baseUrl = `${protocol}://${host}`;

    const payload = {
      amount: product.price * 100, // Amount in cents
      currency: "MAD",
      success_url: `${baseUrl}/success`,
      cancel_url: `${baseUrl}/cancel`,
      description: `Order for ${product.name}`,
      metadata: {
        product_id: product.id,
      },
    };

    console.log("Creating payment intent with payload:", payload);

    const response = await fetch(
      "https://paymentgateway.redahaloubi.com/api/v1/payment-intents",
      {
        method: "POST",
        headers: {
          "X-API-Key": env.NEXT_PUBLIC_PAYMENT_API_KEY,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Payment Gateway Error:", errorData);
      return NextResponse.json(
        { error: "Failed to create payment intent" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
