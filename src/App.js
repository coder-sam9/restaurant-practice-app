import { Fragment, useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header/Header";
import Meals from "./components/Meals/Meals";

function App() {
  const [showCart,setShowCart]=useState(false);
  const showCartOpen=()=>{
    setShowCart(true);
  }
  const showCartClose=()=>{
    setShowCart(false);
  }
  return (
    <Fragment>
    {showCart && <Cart onClose={showCartClose}/>}
      <Header openCart={showCartOpen}/>
      <main>

      <Meals/>
      </main>
    </Fragment>
  );
}

export default App;
