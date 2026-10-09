import { useParams } from 'react-router-dom'
import products from '../data/products'

function ProductDetails() {

  const { id } = useParams()

  const product = products.find((product) => product.id === Number(id))

  if(!product) {
    return <h1>Product not found!</h1>
  }

  return (
      <div className='product-details'>
        <img src={product.image} alt={product.name} />

        <div>
          <h2>{product.name}</h2>
          <p>{product.category}</p>
          <p>{product.description}</p>
          <p>₹{product.price}</p>
          
          <button>Add to Cart</button>
        </div>
      </div>
  )
}

export default ProductDetails