import React from "react";
import { Switch, Route } from 'react-router-dom'

import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./container/Main";
import Shop from "./container/Pages/Shop";

function App() {
    return (
        <>
            <Header />
            <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/shop" exact component={Shop} />
            </Switch>
            <Footer />
        </>
    );
}

export default App;
