import React, { useContext } from "react";
import CartContext from "../Store/CartContext";

const Header = (props) => {
  const cartCtx = useContext(CartContext);
  let quantity = 0;
  cartCtx.productAdded.forEach(
    (product) => (quantity = +quantity + +product.quantity)
  );

  const openCart = () => {
    props.setOpen(true);
  };
  return <button onClick={openCart}>Cart ({quantity})</button>;
};

export default Header;