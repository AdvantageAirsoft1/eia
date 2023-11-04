import { useCartStore } from "@/store/useCartStore"
import { BiMinus } from 'react-icons/bi'
import { ProductType } from "@/types/productTypes"

interface DecrementPropTypes{
  product: ProductType
}

const DecrementButton = ({ product } : DecrementPropTypes) => {
  const cartStore = useCartStore()
  return (
    <button onClick={() => cartStore.removeProduct({
      id: product.id,
      unit_amount: product.unit_amount ?? 0, // Provide a default value if null
      quantity: product.quantity ?? 1,     // Provide a default value if null
      name: product.name,
      image: product.image
        })
      }
    >
      <BiMinus />
    </button>
  )
}

export default DecrementButton