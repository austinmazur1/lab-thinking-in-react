
//Display each PRODUCT in the list 
export const ProductRow = ({ product }) => {
  return (
    <div>
      <p>{product.name}</p>
      <p>{product.price}</p>
    </div>
  )
}

