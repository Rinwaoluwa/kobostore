import { type Metadata } from "next/types";
import { CheckoutCard } from "@/components/ui/checkout/checkout-card";

export const generateMetadata = async (): Promise<Metadata> => {
	return {
		title: "Kobo Store shopping cart",
	};
};

export default async function CartPage() {
	const cart = [1, 2, 3];
	if (!cart || cart.length === 0) {
		return null;
	}

	return <CheckoutCard />;
}
