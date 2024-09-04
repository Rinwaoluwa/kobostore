"use client";

import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/shadcn/table";
import { YnsLink } from "@/components/yns-link";
import { products } from "@/lib/constants";

export const CartSummaryTable = ({ cart }: { cart: any }) => {
  return (
    <form className="max-w-2xl">
      <h1 className="text-3xl font-bold mb-6">Your cart</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-24 sm:table-cell">
              <span className="sr-only">Image</span>
            </TableHead>
            <TableHead className="">Product</TableHead>
            <TableHead className="w-1/6 min-w-32">Price</TableHead>
            <TableHead className="w-1/6 min-w-32">Quantity</TableHead>
            <TableHead className="w-1/6 min-w-32 text-right">Total</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => {
            return (
              <TableRow key={product.id}>
                <TableCell className="hidden sm:table-cell sm:w-24">
                  <Image
                    className="aspect-square rounded-md object-cover"
                    src={product.imageUrl}
                    width={96}
                    height={96}
                    alt=""
                  />
                </TableCell>
                <TableCell className="font-medium">
                  <YnsLink
                    className="transition-colors hover:text-muted-foreground"
                    href={`/products/${product.id}`}
                  >
                    {product.name}
                  </YnsLink>
                </TableCell>
                <TableCell>₦{product.price}</TableCell>
                <TableCell>
                  <span className="flex flex-row items-center text-foreground">
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md text-xs group aspect-square p-0"
                      type="submit"
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-100 pb-0.5 font-bold leading-none text-black transition-colors group-hover:bg-neutral-500 group-hover:text-white">
                        –
                      </span>
                    </button>
                    <span className="inline-block min-w-8 px-1 text-center tabular-nums">
                      1
                    </span>
                    <button
                      className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md text-xs group aspect-square p-0"
                      type="submit"
                    >
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-100 pb-0.5 font-bold leading-none text-black transition-colors group-hover:bg-neutral-500 group-hover:text-white">
                        +
                      </span>
                    </button>
                  </span>
                </TableCell>
                <TableCell className="text-right">₦{/*Total*/}6</TableCell>
              </TableRow>
            );
          })}
          {cart.shippingRate && (
            <TableRow>
              <TableCell className="hidden sm:table-cell sm:w-24"></TableCell>
              <TableCell className="font-medium" colSpan={3}>
                {/* Delivery estimate */}
                {cart.shippingRate.display_name} 45 days
              </TableCell>
              <TableCell className="text-right">
                {/* shopping rate */}
                45
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </form>
    /*<span class="flex flex-row items-center text-foreground"><button class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md text-xs group aspect-square p-0" type="submit" formaction="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"><span class="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-100 pb-0.5 font-bold leading-none text-black transition-colors group-hover:bg-neutral-500 group-hover:text-white">–</span></button><span class="inline-block min-w-8 px-1 text-center tabular-nums">1</span><button class="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-8 rounded-md text-xs group aspect-square p-0" type="submit" formaction="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"><span class="flex h-4 w-4 items-center justify-center rounded-full bg-neutral-100 pb-0.5 font-bold leading-none text-black transition-colors group-hover:bg-neutral-500 group-hover:text-white">+</span></button></span>*/
    // <TableFooter>
    //   {cart.taxBreakdown.map((tax, idx) => (
    //     <TableRow key={idx + tax.taxAmount} className="font-normal">
    //       <TableCell className="hidden w-24 sm:table-cell"></TableCell>
    //       <TableCell colSpan={3} className="text-right">
    //         {tax.taxType.toLocaleUpperCase()} {tax.taxPercentage}%
    //       </TableCell>
    //       <TableCell className="text-right">
    //         {/* <CartAmountWithSpinner total={tax.taxAmount} currency={currency} /> */}
    //       </TableCell>
    //     </TableRow>
    //   ))}
    //   <TableRow className="text-lg font-bold">
    //     <TableCell className="hidden w-24 sm:table-cell"></TableCell>
    //     <TableCell colSpan={3} className="text-right">
    //       Total Summary
    //     </TableCell>
    //     <TableCell className="text-right">
    //       {/* <CartAmountWithSpinner total={total} currency={currency} /> */}
    //     </TableCell>
    //   </TableRow>
    // </TableFooter>
  );
};
