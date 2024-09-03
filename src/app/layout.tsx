import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Inter } from "next/font/google";

import { ShoppingBag, Search } from "lucide-react";
import { Input } from "@/components/ui/shadcn/input";
import { Button } from "@/components/ui/shadcn/button";
import { CartSummaryNav } from "@/components/ui/nav/cart-summary-nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kobo Store Product Listing",
  description:
    "Discover our carefully selected products for your home and lifestyle. Shop apparel, accessories, and more.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <header className="border-b bg-white">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold">
              Kobo Store
            </Link>
            <nav className="hidden md:flex space-x-4">
              <Link href="/" className="hover:text-gray-600">
                Home
              </Link>
              <Link href="/products" className="hover:text-gray-600">
                Apparel
              </Link>
              <Link href="/accessories" className="hover:text-gray-600">
                Accessories
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="pl-10 pr-4 py-2 rounded-full"
                />
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
              <CartSummaryNav />
            </div>
          </div>
        </header>

        {children}

        <footer className="bg-gray-100 py-8">
          <div className="container mx-auto px-4">
            <div className="flex justify-around">
              <div>
                <h3 className="font-semibold mb-4">
                  Subscribe to our newsletter
                </h3>
                <form className="flex">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 max-w-lg flex-1"
                    required
                  />
                  <Button
                    type="submit"
                    className={`bg-slate-800 text-white inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 shadow hover:bg-slate-600 h-9 px-4 py-2 mx-2 w-24 rounded-full`}
                  >
                    Subscribe
                  </Button>
                </form>
              </div>
              <div className="flex gap-8">
                <div>
                  <h3 className="font-semibold mb-4">Products</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/products" className="hover:underline">
                        Apparel
                      </Link>
                    </li>
                    <li>
                      <Link href="/accessories" className="hover:underline">
                        Accessories
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-4">Support</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link href="/features" className="hover:underline">
                        Features
                      </Link>
                    </li>
                    <li>
                      <Link href="/pricing" className="hover:underline">
                        Pricing
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:underline">
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600 mb-4 md:mb-0">
                © 2024 Kobo Store
                <br />
                Delightfully commerce for everyone
              </p>
              <div className="flex space-x-4">
                <Link
                  href="https://x.com/rinwaintech"
                  className="text-gray-600 hover:text-gray-900"
                >
                  @rinwaintech
                </Link>
                <Link
                  href="https://www.linkedin.com/in/peterodejobi/"
                  className="text-gray-600 hover:text-gray-900"
                >
                  Peter Odejobi
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
