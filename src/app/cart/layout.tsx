import { type ReactNode } from "react";

import { CartSummaryTable } from "@/components/ui/checkout/cart-summary-table";
import { CartEmpty } from "@/components/ui/checkout/cart-empty";

export default async function CartLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cart = [1, 3, 4];

  if (cart.length === 0) {
    <CartEmpty />;
  }

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 pt-6 sm:px-6 lg:px-8">
      <div className="min-h-[calc(100dvh-7rem)] mx-auto xl:grid xl:grid-cols-12 xl:gap-x-8">
        <div className="my-8 xl:col-span-7">
          <div className="sticky top-1">
            <CartSummaryTable cart={cart} />
          </div>
        </div>
        <div className="my-8 max-w-[65ch] xl:col-span-5">{children}</div>
      </div>
    </main>
  );
}
