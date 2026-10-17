import { createContext} from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const CartContext = createContext()

function CartProvider({ children }) {
  // consuming custom hook useLocalStorage()
  const { value: cart, setValue: setCart } = useLocalStorage("cart", [])

  function addToCart(product) {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.product.id === product.id)

      if (existingProduct) {
        return prevCart.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }

      return [...prevCart, { product, quantity: 1 }]
    })
  }

  function increaseQuantity(productId) {
    setCart((prevCart) => {
      return prevCart.map((item) => item.product.id === productId 
      ? {...item, quantity: item.quantity + 1} 
      : item) 
    })
  }

  function decreaseQuantity(productId) {
    setCart((prevCart) => {
      return prevCart.map((item) => item.product.id === productId && item.quantity > 1
      ? {...item, quantity: item.quantity - 1} 
      : item) 
    })
  }

  function removeFromCart(productId) {
    setCart((prevCart) => {
      return prevCart.filter((item) => item.product.id !== productId)
    })
  }
    
  return ( 
    <CartContext.Provider value={{ cart, setCart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }} >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider