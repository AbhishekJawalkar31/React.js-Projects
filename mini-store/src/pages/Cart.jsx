import { CartContext } from "../context/CartContext"
import { useContext } from "react"

function Cart() {
    const { cart } = useContext(CartContext)

    if(cart.length === 0) {
        return <h1>Your cart is empty!</h1>
    }

    return (
        <div>
            {cart.map((product) => (
                <div key={product.id}>
                    <img src={product.image} alt={product.name} />

                    <div>
                        <h2>{product.name}</h2>
                        <p>{product.category}</p>
                        <p>{product.description}</p>
                        <p>₹{product.price}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Cart