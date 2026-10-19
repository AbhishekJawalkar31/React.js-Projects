import products from "../data/products"
import ProductCard from "../components/ProductCard"
import { useState, useRef, useEffect } from "react"

function Home() {
  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [sortOrder, setSortOrder] = useState("Default")
  const searchRef = useRef(null)
  let filteredProducts = []
  let sortedProducts = []

  useEffect(() => {
    if(searchRef.current) {
      searchRef.current.focus()
    }
  }, [])

  filteredProducts = products.filter((product) => (category === "All" || product.category === category) 
    && product.name.toLowerCase().includes(search.toLowerCase()))

  sortedProducts = [...filteredProducts].sort((a, b) => {
    if(sortOrder === "lowToHigh") {
      return a.price - b.price
    }

    if(sortOrder === "highToLow") {
      return b.price - a.price
    }
  })

  return (
    <>
      <input ref={searchRef} type="text" placeholder="Search products..." value={search} onChange={(e) => setSearch(e.target.value)}/>

      <p>Categories</p>
      <button onClick={() => setCategory("All")}>All</button>
      <button onClick={() => setCategory("Electronics")}>Electronics</button>
      <button onClick={() => setCategory("Footwear")}>Footwear</button>
      <button onClick={() => setCategory("Accessories")}>Accessories</button>

      <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
        <option value="Default">Default</option>
        <option value="highToLow">Price: High to Low</option>
        <option value="lowToHigh">Price: Low to High</option>
      </select>

      <div className="product-grid">
        {sortedProducts.map((product) => (
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