"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ChevronDown } from "lucide-react";
import { AddressSchema, getAddressSchema } from "./checkout-form-schema";
import { CountrySelect } from "../country-select";
import { InputWithErrors } from "../input-errors";

const translations = {
  nameRequired: "Full name is required",
  cityRequired: "City is required",
  countryRequired: "Country is required",
  line1Required: "Address line 1 is required",
  postalCodeRequired: "Postal code is required",
};

const addressSchema = getAddressSchema(translations);

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<AddressSchema>({
    defaultValues: {
      city: "",
      country: "",
      line1: "",
      line2: "",
      name: "",
      phone: "",
      postalCode: "",
      state: "",
      taxId: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(addressSchema),
  });

  const onSubmit = (data: AddressSchema) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Country or region
            </label>
            <div className="grid gap-6 sm:grid-cols-2 2xl:grid-cols-1">
              <CountrySelect
                {...register("country")}
                label={""}
                name="country"
                autoComplete="shipping country"
                onChangeValue={(value) => console.log(value)}
                value={getValues?.("country")}
                errors={errors?.country?.message}
              />
            </div>
            {errors.country && (
              <p className="mt-1 text-sm text-red-600">
                {errors.country.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="line1"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address line 1
            </label>
            <input
              type="text"
              id="line1"
              {...register("line1")}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Street address"
            />
            {errors.line1 && (
              <p className="mt-1 text-sm text-red-600">
                {errors.line1.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="line2"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address line 2
            </label>
            <input
              type="text"
              id="line2"
              {...register("line2")}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Apt., suite, unit number, etc. (optional)"
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              {...register("city")}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="City"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
            )}
          </div>

          <div className="flex gap-4">
            <div className="flex-1">
              <label
                htmlFor="postalCode"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Postal code
              </label>
              <input
                type="text"
                id="postalCode"
                {...register("postalCode")}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="Postal code"
              />
              {errors.postalCode && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.postalCode.message}
                </p>
              )}
            </div>
            <div className="flex-1">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                State
              </label>
              <input
                type="text"
                id="state"
                {...register("state")}
                className="w-full p-2 border border-gray-300 rounded-md"
                placeholder="State (optional)"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone number (optional)
            </label>
            <input
              type="tel"
              id="phone"
              {...register("phone")}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Phone number"
            />
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Continue to shipping
        </button>
      </form>
    </div>
  );
}
