import { useCartStore } from "@/store/useCartStore"
import { BiPlus } from 'react-icons/bi'
import { ProductType } from "@/types/productTypes"

interface IncrementPropTypes{
  product: ProductType
}

const DecrementButton = ({ product } : IncrementPropTypes) => {
  const cartStore = useCartStore()
  return (
    <button onClick={() => cartStore.addToCart({
      id: product.id,
      unit_amount: product.unit_amount ?? 0, // Provide a default value if null
      quantity: product.quantity ?? 1,     // Provide a default value if null
      name: product.name,
      image: product.image
        })
      }
    >
      <BiPlus />
    </button>
  )
}

export default DecrementButton