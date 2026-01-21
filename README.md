# Payment Gateway Integration Demo

This project demonstrates how to easily integrate the Custom Payment Gateway into a Next.js application.

## 🚀 Quick Start

### 1. Installation

```bash
npm install
# or
bun install
```

### 2. Configuration

Create a `.env` file in the root directory and add your API Key:

```env
NEXT_PUBLIC_PAYMENT_API_KEY="your_api_key_here"
```

### 3. Run the Project

```bash
npm run dev
# or
bun dev
```

Visit `http://localhost:3000` to see the store in action.

---

## 💳 Integration Guide

Integrating the payment gateway involves just 3 simple steps:

### Step 1: Create a Payment Intent

When the user clicks "Pay", make a server-side request to create a payment session.

**Endpoint:** `POST https://paymentgateway.redahaloubi.com/api/v1/payment-intents`

```typescript
// Example: src/app/api/create-payment-intent/route.ts

const response = await fetch("https://paymentgateway.redahaloubi.com/api/v1/payment-intents", {
  method: "POST",
  headers: {
    "X-API-Key": process.env.NEXT_PUBLIC_PAYMENT_API_KEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    amount: 10000, // Amount in cents (e.g., 100.00 MAD)
    currency: "MAD",
    success_url: "https://your-site.com/success",
    cancel_url: "https://your-site.com/cancel",
    description: "Order #123",
    metadata: {
      product_id: "prod_123"
    }
  }),
});

const data = await response.json();
// data.checkout_url contains the link to redirect the user to
```

### Step 2: Redirect the User

Use the `checkout_url` from the API response to redirect the user to the secure payment page.

```typescript
// Example: src/components/PaymentButton.tsx

if (data.checkout_url) {
  window.location.href = data.checkout_url;
}
```

### Step 3: Verify Payment

After the payment, the user is redirected back to your `success_url` with a `payment_intent_id` (or `id`) parameter. Verify the transaction status server-side.

**Endpoint:** `GET https://paymentgateway.redahaloubi.com/api/public/payment-intents/{id}`

```typescript
// Example: src/app/success/page.tsx

async function verifyPayment(id: string) {
  const response = await fetch(
    `https://paymentgateway.redahaloubi.com/api/public/payment-intents/${id}`,
    { cache: "no-store" }
  );
  
  const paymentData = await response.json();
  
  if (paymentData.status === "authorized" || paymentData.status === "captured") {
    // Grant access to product / fulfill order
    return true;
  }
  return false;
}
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui

## 📚 Resources & Support

For full documentation on the Payment Gateway services, API reference, and CLI tools, please visit the main repository:

👉 **[Payment Gateway Repository](https://github.com/rhaloubi/Payment-Gateway)**

### Contact

If you need API access or have any questions, feel free to reach out:

- **Email**: redahaloubi8@gmail.com
