"use client";
import Link from "next/link";

import { useEffect, useState } from "react";
import { CartSummaryNav } from "./cart-summary-nav";
import { usePathname } from "next/navigation";
import { Providers } from "@/components/Provider";

export function NavMenu() {
  const pathname = usePathname()
  const [activeTab, setActiveTab] = useState(0);
  const active = "bg-slate-500 text-white";

  useEffect(() => {
    const updateActiveTab = () => {
      if (pathname === '/') {
        setActiveTab(0);
      } else if (pathname.includes('/products')) {
        setActiveTab(1);
      } else if (pathname.includes('/accessories')) {
        setActiveTab(2);
      }
    };

    updateActiveTab();

  }, [pathname]);

  return (
    <header className="border-b bg-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold ">
          Kobo Store
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/"
            className={`h-9 w-max rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-200 hover:text-white focus:bg-slate-200 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-200 data-[state=open]:bg-slate-200 ${
              activeTab === 0 && active
            }`}
          >
            Home
          </Link>
          <Link
            href="/products"
            className={`h-9 w-max rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-200 hover:text-white focus:bg-slate-200 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-200 data-[state=open]:bg-slate-200 ${
              activeTab === 1 && active
            }`}
          >
            Apparel
          </Link>
          <Link
            href="/accessories"
            className={`h-9 w-max rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-slate-200 hover:text-white focus:bg-slate-200 focus:text-white focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-slate-200 data-[state=open]:bg-slate-200 ${
              activeTab === 2 && active
            }`}
          >
            Accessories
          </Link>
        </nav>
        <div className="space-x-4">
          <Providers>
            <CartSummaryNav />
          </Providers>
        </div>
      </div>
    </header>
  );
}
