import { CartContext } from "../context/CartContext"
import { useContext } from "react"

function Cart() {
    const { cart } = useContext(CartContext)

    const totalPrice = cart.reduce(
        (sum, item) => sum + item.product.price * item.quantity,
        0
    )

    if(cart.length === 0) {
        return <h1>Your cart is empty!</h1>
    }

    return (
        <div>
            <h1>Your Cart!</h1>
            {cart.map((item) => (
                <div key={item.product.id}>
                    <img src={item.product.image} alt={item.product.name} />

                    <div>
                        <h2>{item.product.name}</h2>
                        <p>{item.product.category}</p>
                        <p>{item.product.description}</p>
                        <p>₹{item.product.price}</p>
                        <p>Quantity: {item.quantity}</p>
                    </div>
                </div>
            ))}

            <h1>Total Price: {totalPrice}</h1>
        </div>
    )
}

export default Cart