import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const items = useSelector((state) => state.cart);

  return (
    <>
      <span>Provis Ecom Project</span>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <span>Cart Items: {items.length}</span>
      </div>
    </>
  );
}

export default Navbar;
