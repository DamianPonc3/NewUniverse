import React from "react";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import "./scss/index.scss"
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="app"> 
      <NavBar />
      <hr />
      <ItemListContainer greeting="¡Elegí el pack que mas te convenga y congelá el precio!" />
      <hr />
      <ShoppingCart />
    </div>
  );
}

export default App;
