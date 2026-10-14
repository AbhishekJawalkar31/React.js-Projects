import products from "../data/products"
import ProductCard from "../components/ProductCard"
import { useState } from "react"

function Home() {
  const [search, setSearch] = useState("")

  return (
    <>
      <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)}/>

      <div className="product-grid">
          {products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
            .map((product) => (
              <ProductCard
                  key = {product.id}
                  id = {product.id}
                  product = {product}
              />
          ))}
      </div>
    </>
  )
}

export default Home