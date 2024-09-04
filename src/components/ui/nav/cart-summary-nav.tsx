"use client";

import { Suspense } from "react";
import { ShoppingBagIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../shadcn/tooltip";
import { YnsLink } from "../../yns-link";
import { useAppSelector } from "@/lib/redux/hooks";
import { RootState } from "@/lib/redux/store";


const CartFallback = () => (
	<div className="mr-2.5 h-6 w-6 opacity-30">
		<ShoppingBagIcon />
	</div>
);

export const CartSummaryNav = () => {
	const cart = useAppSelector((state: RootState) => state.cart);
	if(!cart.length || cart.length === 0) {
		return <CartFallback />
	};

	return (
		<Suspense fallback={<CartFallback />}>
			<CartSummaryNavInner total={cart.length} />
		</Suspense>
	);
};

const CartSummaryNavInner = ({total}: {total: number}) => {
	const cart = useAppSelector((state: RootState) => state.cart);
	const cartTotal = cart.reduce(
		(acc, sum) => acc + sum.price * sum.quantity,
		0
	  );
	return (
		<TooltipProvider>
			<Tooltip delayDuration={100}>
				<TooltipTrigger asChild>
					<div>
						<YnsLink
							href="/cart-overlay"
							scroll={false}
							className="relative mr-2.5 block h-6 w-6"
							prefetch={true}
						>
							<ShoppingBagIcon />
							<span className="absolute bottom-0 right-0 inline-flex h-5 w-5 translate-x-1/2 translate-y-1/2 items-center justify-center rounded-full border-2 bg-white text-center text-xs">
								<span className="sr-only">items in cart: </span>
								{total}
							</span>
							<span className="sr-only"></span>
						</YnsLink>
					</div>
				</TooltipTrigger>
				<TooltipContent side="left" sideOffset={25}>
					<p>Total Items: {total}</p>
					<p>
						Total Price: {cartTotal}
					</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};
