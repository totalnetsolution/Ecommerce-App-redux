import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllProducts } from '../features/products/productSlice';
import ProductItem from './productItem';

const ProductList = () => {
  const products = useSelector(selectAllProducts);

  return (
    <div className="row">
      {products.map((product) => (
        <div className="col-md-4 mb-4" key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
