import { notFound } from "next/navigation";
import Image from "next/image";
import { type Metadata } from "next/types";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/shadcn/breadcrumb";
import { AddToCartButton } from "@/components/add-to-cart-button";
// import { cn, deslugify, formatMoney, formatProductName } from "@/lib/utils";
import { YnsLink } from "@/components/yns-link";
import { products } from "@/lib/constants";

export const generateMetadata = async ({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { variant?: string };
}): Promise<Metadata> => {
  const product = products.find((variant) => variant.id === params.id);
  if (!product) {
    return notFound();
  }

  return {
    title: product.name,
    description: product.description,
  } satisfies Metadata;
};

export default async function SingleProductPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { variant?: string };
}) {
  const product = products.find((variant) => variant.id === params.id);
  if (!product) {
    return notFound();
  }

  const category = product.category;

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-4 pb-6 pt-6 sm:px-6 lg:px-8">
      <article className="pb-12">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink
                asChild
                className="inline-flex min-h-12 min-w-12 items-center justify-center"
              >
                <YnsLink href="/">All products</YnsLink>
              </BreadcrumbLink>
            </BreadcrumbItem>
            {category && (
              <>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink
                    className="inline-flex min-h-12 min-w-12 items-center justify-center"
                    asChild
                  >
                    <YnsLink href={`/${category}`}>{category}</YnsLink>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </>
            )}
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{product.name}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="mt-4 grid gap-4 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-8">
            <h1 className="text-3xl font-bold leading-none tracking-tight text-foreground">
              {product.name}
            </h1>
            {product.price && (
              <p className="mt-2 text-2xl font-medium leading-none tracking-tight text-foreground/70">
                ₦{product.price}
              </p>
            )}
            <div className="mt-2">
              {product.price <= 0 && <div>Out of stock</div>}
            </div>
          </div>

          <div className="lg:col-span-7 lg:row-span-3 lg:row-start-1">
            <h2 className="sr-only">{product.name}</h2>

            <div className="grid gap-4 lg:grid-cols-3">
              <Image
                className={
                  "lg:col-span-3 w-full rounded-lg bg-neutral-100 object-cover object-center transition-opacity rounded-s"
                }
                src={product.imageUrl}
                width={700}
                height={700}
                sizes="(max-width: 1024x) 100vw, (max-width: 1280px) 50vw, 700px"
                loading="eager"
                priority
                alt=""
              />
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-5">
            <section>
              <h2 className="sr-only">{product.description}</h2>
              <div className="prose text-secondary-foreground">
                <h5>{product.description}</h5>
              </div>
            </section>

            <AddToCartButton
              productId={product.id}
              disabled={product.price <= 0}
            />
          </div>
        </div>
      </article>
    </main>
  );
}
