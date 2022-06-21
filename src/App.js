import React from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./container/Main";
import Shop from "./container/Pages/Shop";
import ProductDetail from "./container/Pages/ProductDetail";
import Contact from "./container/Pages/Contact";
import Cart from "./container/Pages/Cart";
import Checkout from "./container/Pages/Checkout";

function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/shop" exact component={Shop} />
          <Route path="/detail" exact component={ProductDetail} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}

export default App;
