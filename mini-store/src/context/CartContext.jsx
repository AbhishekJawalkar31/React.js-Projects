import { createContext, useState } from 'react'

export const CartContext = createContext()

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    function addToCart(product) {
      setCart((prevCart) => [...prevCart, product])
    }
    
  return ( 
    <CartContext.Provider value={{ cart, setCart, addToCart }} >
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider