import React from "react";
import "./App.css";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./container/Main";
import Shop from "./container/Pages/Shop";

function App() {
    return (
        <>
            <Header />
            <Main />
            {/* <Shop /> */}
            <Footer />
        </>
    );
}

export default App;
