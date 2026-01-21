import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export function Navbar() {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
          <ShoppingBag className="h-6 w-6" />
          <span>My Store</span>
        </Link>
        <div className="ml-auto flex items-center gap-4">
          <Link href="/" className="text-sm font-medium hover:underline">
            Products
          </Link>
        </div>
      </div>
    </nav>
  );
}
