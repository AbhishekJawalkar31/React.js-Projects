import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext)

  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <Link to={'/product/' + product.id}>
        <h2>{product.name}</h2>
      </Link>

      <p>{product.category}</p>

      <p>{product.description}</p>

      <p>₹{product.price}</p>
      
      <button onClick={() => addToCart(product)}>Add to Cart</button>
    </div>
  )
}

export default ProductCard