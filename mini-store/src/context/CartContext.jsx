import { createContext, useState } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

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
    
  return ( 
    <CartContext.Provider value={{ cart, setCart, addToCart }} >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider