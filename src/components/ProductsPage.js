import { useState } from "react"
import jsonData from "./../data.json"
import { ProductTable, SearchBar } from "./index"


 const ProductsPage = () => {
    const [products, setProducts] = useState(jsonData)

  return (
    <div>
      <h1>IronStore</h1>
        {products.map((product) => (
            
      <ProductTable key={product.id} product={product}  />
        ))}
    </div>
  )
}

export default ProductsPage


