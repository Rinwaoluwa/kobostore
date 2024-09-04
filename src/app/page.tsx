"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/shadcn/button";
import { products } from "@/lib/constants";
import { Product } from "@/lib/types";
import { SortList } from "@/components/ui/SortList";

export default function Home() {
  const router = useRouter();
  const [filter, setFilter] = useState("");
  const [productList, setProductList] = useState(products);

  const handleSortByLowestPrice = () => {
    setFilter("lowestPrice");
    setProductList(productList.sort((a, b) => a.price - b.price));
  };
  const handleSortByHigestPrice = () => {
    setFilter("highestPrice");
    setProductList(productList.sort((a, b) => b.price - a.price));
  };
  const handleSortAccessories = () => {
    setFilter("accessories");
    setProductList(
      productList.filter((product) => !product.category.includes("apparels"))
    );
  };
  const handleSortByApparel = () => {
    setFilter("apparels");
    setProductList(
      productList.filter((product) => !product.category.includes("accessories"))
    );
  };

  const handleSortByAll = () => {
    setFilter("");
    console.log("click");
    setProductList(productList);
  };

  const filterControls = [
    { name: "All", onClick: handleSortByAll },
    { name: "Accessories", onClick: handleSortAccessories },
    { name: "Apparels", onClick: handleSortByApparel },
    { name: "Highest price", onClick: handleSortByHigestPrice },
    { name: "Lowest price", onClick: handleSortByLowestPrice },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-white">
        {!filter && (
          <section className="mt-8">
            <div className="bg-gray-200 container mx-auto px-24 py-16 md:py-24 flex flex-col gap-8 md:flex-row items-center rounded w-4/5">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h1 className="text-4xl md:t ext-5xl font-bold mb-4">
                  Discover our
                  <br />
                  Curated Collection
                </h1>
                <p className="text-lg mb-6">
                  Explore our carefully selected products for your home and
                  lifestyle.
                </p>
                <Button
                  size="lg"
                  className="inline-flex h-10 items-center justify-center rounded-full bg-neutral-900 px-6 font-medium text-neutral-50 transition-colors hover:bg-neutral-900/90 focus:outline-none focus:ring-1 focus:ring-neutral-950"
                >
                  Shop Now
                </Button>
              </div>
              <div className="md:w-1/2">
                <Image
                  src="https://img.freepik.com/premium-photo/realty-free-images_1023251-443657.jpg?w=826"
                  alt="Featured product"
                  width={500}
                  height={500}
                  className="w-full h-auto rounded-md"
                />
              </div>
            </div>
          </section>
        )}

        <section className="py-4 bg-white">
          <div className="container mx-auto px-4 w-4/5">
            <SortList items={filterControls} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {products.map((product: Product, index: number) => {
                // Remove scroll limits when user filters items
                if (index >= 6 && !filter) return;
                return (
                  <Link href={`/products/${product.id}`} key={index}>
                    <div className="p-4 rounded-lg shadow">
                      <Image
                        src={product.imageUrl}
                        alt={product.name}
                        width={300}
                        height={300}
                        className="w-full h-64 object-cover mb-4 rounded scale-105 object-cover transition-all hover:scale-100 hover:opacity-75"
                      />
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <p className="text-gray-600">₦{product.price}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-4 bg-white">
          <div className="container mx-auto px-4 w-4/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div onClick={() => router.push("/products")}>
                <Image
                  src={products[2].imageUrl}
                  alt="Apparel collection"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg scale-105 transition-all hover:scale-100 hover:opacity-75"
                />
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Apparel Collection
                </h3>
                <Button variant="outline">Shop now</Button>
              </div>

              <div onClick={() => router.push("/accessories")}>
                <Image
                  src={products[5].imageUrl}
                  alt="Accessories collection"
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover rounded-lg scale-105 transition-all hover:scale-100 hover:opacity-75"
                />
                <h3 className="text-xl font-semibold mt-4 mb-2">
                  Accessories Collection
                </h3>
                <Button variant="outline">Shop now</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
