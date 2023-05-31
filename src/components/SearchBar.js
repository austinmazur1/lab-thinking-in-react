import { useState } from "react";


//TODO put this in products page and pass down to search bar?

//on change event, using filter to check the text with the text in the db
export const SearchBar = ({products}) => {
  const [newSearch, setNewSearch] = useState("")
  const [filteredProducts, setFilteredProducts] = useState([]);

  const search =(event, index) => {
    const value = event.target.value;
    console.log(value)
    setNewSearch(value)


    //resets our state if input filed is left blank
    if(value === "") {
      setFilteredProducts([])
    } else {const filtered = products.filter((product) =>
  //  console.log(product.name.toLowerCase().includes(value.toLowerCase())) 
  product.name.toLowerCase().includes(value.toLowerCase())
      );

    setFilteredProducts(filtered);
  }};

  return (
    <div>
      <h4>Search</h4>
      <input type="text" name="" id="" value={newSearch} onChange={search}/>
      <div>
        <p>Only show products in stock</p>
        <input type="checkbox" name="" id="" />
      </div>
      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}
