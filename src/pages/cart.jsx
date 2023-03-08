import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.cart);

  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <>
      <h3>Cart</h3>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.images} alt="img" />
            <h5>{product.title}</h5>
            <h6>Price: $ {product.price}</h6>
            <button onClick={() => handleRemove(product.id)}>Remove</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart;
