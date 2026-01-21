"use client";

import { useState } from "react";
import { type Product } from "~/data/products";
import { Button } from "~/components/ui/button";
import { Loader2 } from "lucide-react";

interface PaymentButtonProps {
  product: Product;
}

export function PaymentButton({ product }: PaymentButtonProps) {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: product.id,
        }),
      });

      const data = (await response.json()) as {
        error?: string;
        data?: { checkout_url?: string };
      };

      if (!response.ok) {
        throw new Error(data.error ?? "Payment creation failed");
      }

      if (data.data?.checkout_url) {
        window.location.href = data.data.checkout_url;
      } else {
        console.error("No checkout URL returned");
      }
    } catch (error) {
      console.error("Payment error:", error);
      alert("Failed to initiate payment. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button onClick={handlePayment} disabled={loading} size="lg" className="w-full md:w-auto">
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      Pay {product.price} MAD
    </Button>
  );
}
