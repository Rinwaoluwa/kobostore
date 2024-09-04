"use client";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Loader2Icon } from "lucide-react";
import { Button } from "./ui/shadcn/button";

export const AddToCartButton = ({
	productId,
	disabled,
}: {
	productId: string;
	disabled?: boolean;
}) => {
	const router = useRouter();
	const [pending, startTransition] = useTransition();

	return (
		<Button
			size="lg"
			type="submit"
			className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 bg-slate-900 text-white shadow hover:bg-primary/90 h-10 px-8 w-full rounded-full text-lg"
			onClick={async () => {
				startTransition(() => router.push(`/cart-overlay`));
			}}
			aria-disabled={pending}
			disabled={pending || disabled}
		>
			{pending ? (
				<Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
			) : disabled ? (
				"Disabled"
			) : (
				"Add to cart"
			)}
		</Button>
	);
};
