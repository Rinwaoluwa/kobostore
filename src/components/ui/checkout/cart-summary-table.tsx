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
                <TableCell>{product.price}</TableCell>
                <TableCell>{/* Quantity*/}2</TableCell>
                <TableCell className="text-right">{/*Total*/}6</TableCell>
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
