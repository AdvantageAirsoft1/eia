import { AiOutlineHeart } from "react-icons/ai";
import { useWishlistStore } from "@/store/useWishlistStore";
import { ProductType } from "@/types/productTypes";

const AddToWishlistButton = ({ name, id, image, unit_amount, quantity }: ProductType) => {
  const wishlistStore = useWishlistStore();

  return (
    <div
      className="flex items-center gap-2 justify-center cursor-pointer"
      onClick={() => wishlistStore.addToWishlist({ name, id, image, unit_amount: unit_amount ?? 0, quantity: quantity ?? 1 })}
    >
      <AiOutlineHeart />
      <span>Add To Wishlist</span>
    </div>
  );
};

export default AddToWishlistButton;