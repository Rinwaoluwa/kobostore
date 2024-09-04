import Image from "next/image";
import { CartAsideContainer } from "./cart-aside";
import { CartModalAddSideEffect } from "./cart-side-effect";
import { Button } from "@/components/ui/shadcn/button";
import { YnsLink } from "@/components/yns-link";
import { products } from "@/lib/constants";
import { TrashcanSVG } from "@/components/ui/TrashcanSVG";

export default async function CartModalPage({
  searchParams,
}: {
  searchParams: { add?: string };
}) {
  // TODO fix type
  const cart = [1, 2, 4];

  if (!cart || cart.length === 0) {
    return null;
  }

  return (
    <CartAsideContainer withAnimations={true}>
      <div className="flex-1 overflow-y-auto px4 py-6 sm:px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-neutral-700">
            Shopping cart
          </h2>
          <YnsLink replace href="/cart" className="text-sm underline">
            (open full view)
          </YnsLink>
        </div>

        <div className="mt-8">
          <ul role="list" className="-my-6 divide-y divide-neutral-200">
            {products.map((product) => (
              <li
                key={product.id}
                className="grid grid-cols-[4rem,1fr,max-content] grid-rows-[auto,auto] gap-x-4 gap-y-2 py-6"
              >
                <div className="col-span-1 row-span-2 bg-neutral-100">
                  <Image
                    className="aspect-square rounded-md object-cover"
                    src={product.imageUrl}
                    width={80}
                    height={80}
                    alt=""
                  />
                </div>

                <h3 className="-mt-1 font-semibold leading-tight">
                  {product.name}
                </h3>
                <p className="text-sm font-medium leading-none">
                  ₦{product.price}
                </p>
                <p className="self-end text-sm font-medium text-muted-foreground">
                  Quantity: 2pcs
                </p>
                <button
                  role="button"
                  aria-describedby="delete button"
                  tabIndex={0}
                  className="hover:scale-[1.1] transition-all flex justify-end"
                //   onClick={() => 0}
                >
                  <TrashcanSVG />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-neutral-200 px-4 py-6 sm:px-6">
        <div
          id="cart-overlay-description"
          className="flex justify-between text-base font-medium text-neutral-900"
        >
          <p>Total</p>
          <p>
            {/* {formatMoney({
							amount: total,
							currency,
							locale,
						})} */}
          </p>
        </div>
        <p className="mt-0.5 text-sm text-neutral-500">
          Shipping and taxes will be added at the next step
        </p>
        <Button
          asChild={true}
          size={"lg"}
          className="mt-6 w-full rounded-full text-lg bg-slate-900 text-white"
        >
          <YnsLink href="/cart">Go to payment</YnsLink>
        </Button>
      </div>
      {/* {searchParams.add && <CartModalAddSideEffect productId={searchParams.add} />} */}
    </CartAsideContainer>
  );
}
