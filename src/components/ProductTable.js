import {ProductRow} from './ProductRow';

export const ProductTable = ({ product }) => {
  return (
    <div>
      <div>
        <p>Name</p>
        <p>Price</p>
      </div>
      <div>
        <ProductRow product={product}/>
      </div>
    </div>
  );
};
