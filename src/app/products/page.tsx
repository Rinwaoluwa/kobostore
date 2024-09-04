"use client";

import { products } from "@/lib/constants";
import ApparelGrid from "@/components/ui/ApparealGrid";
import { Product } from "@/lib/types";
import { SortList } from "@/components/ui/SortList";
import { useState } from "react";

export default function ApparelPage() {
  const [apparels, setApparals] = useState(
    products.filter(
      (product: Product) => !product.category.includes("accessories")
    )
  );
  const handleSortByLowestPrice = () => {
    setApparals(
      products
        .filter((product: Product) => !product.category.includes("accessories"))
        .sort((a, b) => a.price - b.price)
    );
  };
  const handleSortByHigestPrice = () => {
    setApparals(
      products
        .filter((product: Product) => !product.category.includes("accessories"))
        .sort((a, b) => b.price - a.price)
    );
  };
  const handleSortByAll = () => {
    setApparals(
      products.filter(
        (product: Product) => !product.category.includes("accessories")
      )
    )
  };
  const filterControls = [
    { name: "All", onClick: handleSortByAll },
    { name: "Highest price", onClick: handleSortByHigestPrice },
    { name: "Lowest price", onClick: handleSortByLowestPrice },
  ];

  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 pt-6 sm:px-6 lg:px-8 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Category: Apparel</h1>
      <SortList items={filterControls} />
      <ApparelGrid items={apparels} />
    </div>
  );
}
