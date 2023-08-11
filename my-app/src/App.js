
import ProductForm from "./Components/ProductAdd/ProductForm";
import ProductShowOnScreen from "./Components/ProductShowOnScreen";
import ProductProvider from "./Store/ProductProvider";
import CartProvider from "./Store/CartProvider";
import  Modal  from "@mui/material";

import Cart from "./Components/Cart";
import { useState } from "react";
import Header from "./Components/Header";

function App() {
  const [openCart, setOpenCart] = useState(false);
  const handleClose = () => setOpenCart(false);
  return (
    <ProductProvider>
      <CartProvider>
        <Header setOpen={setOpenCart} />
        <Modal open={openCart} onClose={handleClose}>
          <Cart setCloseCart={handleClose}> </Cart>
        </Modal>
        <ProductForm />
        <ProductShowOnScreen />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;