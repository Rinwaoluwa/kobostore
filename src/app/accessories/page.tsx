import { Metadata } from "next";
import { products } from "@/lib/constants";
import ApparelGrid from "@/components/ui/ApparealGrid";
import { Product } from "@/lib/types";

export const metadata: Metadata = {
  title: "Apparel - Your Next Store",
  description:
    "Browse our collection of high-quality apparel including shoes, sunglasses, and t-shirts.",
};

export default async function ApparelPage() {
  const accessories = products.filter((product: Product) => !product.category.includes("apparels"))
  return (
    <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 pt-6 sm:px-6 lg:px-8 mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Category: Accessories</h1>
      <ApparelGrid items={accessories} />
    </div>
  );
}
