"use client";

import { useCartStore } from "@/store/useCartStore";
import { ProductType } from "@/types/productTypes";

const AddToCartButton = ({ name, id, image, unit_amount, quantity }: ProductType) => {
  const cartStore = useCartStore();

  return (
    <>
      <button
        onClick={() => cartStore.addToCart({ id, image, unit_amount: unit_amount ?? 0, quantity: quantity ?? 1, name })}
        className="my-12 text-white py-2 px-6 font-medium rounded-md bg-[#778da9]" >Add to cart</button>
    </>
  );
};

export default AddToCartButton;