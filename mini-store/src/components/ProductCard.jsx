import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} />

      <h2>{product.name}</h2>

      <p>{product.category}</p>

      <p>{product.description}</p>

      <p>₹{product.price}</p>
      
      <button>Add to Cart</button>
    </div>
  )
}

export default ProductCard