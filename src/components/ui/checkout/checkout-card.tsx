import CheckoutForm from "./checkout-form";

export const CheckoutCard = async () => {
  return (
    <section className="max-w-md pb-12">
      <h2 className="text-3xl font-bold leading-none tracking-tight">
        Checkout
      </h2>
      <p className="mb-4 mt-2 text-sm text-muted-foreground">
        Provide billing and shipping details below.
      </p>
	  <CheckoutForm />
    </section>
  );
};
