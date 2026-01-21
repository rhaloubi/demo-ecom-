import Link from "next/link";
import { CheckCircle, XCircle, AlertCircle } from "lucide-react";
import { Button } from "~/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";

interface SuccessPageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}

interface PaymentData {
  data?: {
    status?: string;
    amount?: number;
    currency?: string;
  };
}

async function verifyPayment(paymentIntentId: string): Promise<PaymentData | null> {
  try {
    const response = await fetch(
      `https://paymentgateway.redahaloubi.com/api/public/payment-intents/${paymentIntentId}`,
      { cache: "no-store" }
    );
    if (!response.ok) {
      return null;
    }

    return (await response.json()) as PaymentData;
  } catch (error) {
    console.error("Verification error:", error);
    return null;
  }
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const params = await searchParams;
  
  const paymentId = 
    params.payment_intent_id ??
    params["payment-intents_id"] ??
    params.id ??
    params.payment_id;

  if (typeof paymentId !== "string") {
    return (
      <div className="container flex min-h-[60vh] flex-col items-center justify-center px-4">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="flex flex-col items-center gap-2 text-center text-destructive">
              <AlertCircle className="h-12 w-12" />
              <span>Missing Payment Info</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p>No payment information found.</p>
            <p className="mt-2 text-xs text-muted-foreground">
              Debug: {JSON.stringify(params)}
            </p>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button asChild>
              <Link href="/">Return Home</Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  const paymentData = await verifyPayment(paymentId);
  const successStatuses = ["authorized", "captured"];
  const status = paymentData?.data?.status;
  const isSuccess = status && successStatuses.includes(status);

  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className={`flex flex-col items-center gap-2 text-center ${isSuccess ? "text-green-600" : "text-destructive"}`}>
            {isSuccess ? (
              <CheckCircle className="h-16 w-16" />
            ) : (
              <XCircle className="h-16 w-16" />
            )}
            <span>{isSuccess ? "Payment Successful!" : "Payment Failed"}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-center">
          {isSuccess ? (
            <>
              <p className="text-muted-foreground">
                Thank you for your purchase. Your payment has been processed successfully.
              </p>
              <div className="rounded-md bg-muted p-4 text-sm">
                <p>Payment ID: {paymentId}</p>
                <p>Status: {status}</p>
                <p>Amount: {(paymentData?.data?.amount ?? 0) / 100} {paymentData?.data?.currency}</p>
              </div>
            </>
          ) : (
            <>
              <p className="text-muted-foreground">
                Unfortunately, we could not verify your payment or it was declined.
              </p>
              {paymentData && (
                <div className="rounded-md bg-destructive/10 p-4 text-sm text-destructive">
                  <p>Status: {status ?? "Unknown"}</p>
                </div>
              )}
            </>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/">Return Home</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
