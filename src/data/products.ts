export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const products: Product[] = [
  {
    id: "prod_1",
    name: "Classic White Tee",
    description: "A comfortable and stylish white t-shirt made from 100% cotton.",
    price: 150,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dCUyMHNoaXJ0fGVufDB8fDB8fHww",
  },
  {
    id: "prod_2",
    name: "Denim Jacket",
    description: "Vintage style denim jacket with a modern fit.",
    price: 450,
    image: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVuaW0lMjBqYWNrZXR8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "prod_3",
    name: "Running Shoes",
    description: "Lightweight running shoes for optimal performance.",
    price: 800,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2hvZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "prod_4",
    name: "Leather Wallet",
    description: "Genuine leather wallet with multiple card slots.",
    price: 200,
    image: "https://images.unsplash.com/photo-1627123424574-18bd03606e42?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2FsbGV0fGVufDB8fDB8fHww",
  },
  {
    id: "prod_5",
    name: "Sunglasses",
    description: "UV protection sunglasses with a sleek design.",
    price: 120,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZ2xhc3Nlc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "prod_6",
    name: "Backpack",
    description: "Durable backpack perfect for school or travel.",
    price: 350,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFja3BhY2t8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "prod_7",
    name: "Wrist Watch",
    description: "Elegant wrist watch with a leather strap.",
    price: 900,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0Y2h8ZW58MHx8MHx8fDA%3D",
  },
  {
    id: "prod_8",
    name: "Headphones",
    description: "Noise-cancelling over-ear headphones.",
    price: 1200,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    id: "prod_9",
    name: "Cap",
    description: "Adjustable baseball cap.",
    price: 80,
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FwfGVufDB8fDB8fHww",
  },
  {
    id: "prod_10",
    name: "Water Bottle",
    description: "Stainless steel water bottle, 500ml.",
    price: 90,
    image: "https://images.unsplash.com/photo-1602143407151-011141920038?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2F0ZXIlMjBib3R0bGV8ZW58MHx8MHx8fDA%3D",
  },
];
