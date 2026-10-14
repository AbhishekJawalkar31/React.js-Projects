import products from "../data/products"
import ProductCard from "../components/ProductCard"
import { useState } from "react"

function Home() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")

  return (
    <>
      <input type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)}/>

      <p>Categories</p>
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Electronics")}>Electronics</button>
      <button onClick={() => setCategory("Footwear")}>Footwear</button>
      <button onClick={() => setCategory("Accessories")}>Accessories</button>

      <div className="product-grid">
          {products.filter((product) => (category === "All" || product.category === category) && product.name.toLowerCase().includes(search.toLowerCase()))
            .map((product) => (
              <ProductCard
                  key = {product.id}
                  id = {product.id}
                  product = {product}
              />
            ))
          }
      </div>
    </>
  )
}

export default Home