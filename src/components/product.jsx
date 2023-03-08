import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { fetchProducts } from "../store/productSlice";
import { STATUSES } from "../store/productSlice";

function Product() {
  const dispatch = useDispatch();

  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(add(product));
  };

  if (status === STATUSES.LOADING) {
    return <h2>Loading...</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>API Calling Fails</h2>;
  }

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.images} alt="product_image" />
          <h4>{product.title}</h4>
          <h5>Price: $ {product.price}</h5>
          <button onClick={() => handleAdd(product)}>Add To Cart</button>
        </div>
      ))}
    </>
  );
}

export default Product;
