import React from "react";
import { Switch } from "react-router-dom";

import Header from "./component/Header";
import Footer from "./component/Footer";
import Home from "./container/Home";
import Shop from "./container/Pages/Shop";
import ProductDetail from "./container/Pages/ProductDetail";
import Contact from "./container/Pages/Contact";
import Cart from "./container/Pages/Cart";
import Checkout from "./container/Pages/Checkout";
import LoginPage from "./container/Pages/LoginPage";
import PublicRoute from "./routes/PublicRoute";
import PrivateRoute from "./routes/PrivateRoute";

const DUMMY_PRODUCTS = [
    {
        id: "p1",
        img: "img/product-1.jpg",
        price: "$123.00",
        subPrice: "$150.00",
        name: "One peice",
    },
    {
        id: "p2",
        img: "img/product-2.jpg",
        price: "$123.00",
        subPrice: "$150.00",
        name: "Jacket",
    },
    {
        id: "p3",
        img: "img/product-3.jpg",
        price: "$123.00",
        subPrice: "$150.00",
        name: "Lather Jacket",
    },
    {
        id: "p4",
        img: "img/product-4.jpg",
        price: "$123.00",
        subPrice: "$150.00",
        name: "Women Proffetional",
    },
    {
        id: "p5",
        img: "img/product-5.jpg",
        price: "$123.00",
        subPrice: "$150.00",
        name: "Colorful Stylish T-Shirt",
    },
    {
        id: "p6",
        img: "img/product-6.jpg",
        price: "$200.00",
        subPrice: "$250.00",
        name: "Blazer",
    },
    {
        id: "p7",
        img: "img/product-7.jpg",
        price: "$150.00",
        subPrice: "$200.00",
        name: "Women Full lenth Coat",
    },
    {
        id: "p8",
        img: "img/product-8.jpg",
        price: "$100.00",
        subPrice: "$160.00",
        name: "Childeren shirt",
    },
    {
        id: "p9",
        img: "img/product-1.jpg",
        price: "$125.00",
        subPrice: "$170.00",
        name: "Colorful Stylish Shirt",
    },
    {
        id: "p10",
        img: "img/cat-1.jpg",
        price: "$125.00",
        subPrice: "$170.00",
        name: "Colorful Stylish Shirt",
    },
    {
        id: "p11",
        img: "img/cat-2.jpg",
        price: "$125.00",
        subPrice: "$170.00",
        name: "Colorful Stylish Shirt",
    },
    {
        id: "p12",
        img: "img/cat-3.jpg",
        price: "$125.00",
        subPrice: "$170.00",
        name: "Colorful Stylish Shirt",
    },
    {
        id: "p13",
        img: "img/cat-4.jpg",
        price: "$125.00",
        subPrice: "$170.00",
        name: "Colorful Stylish Shirt",
    },
    {
        id: "p14",
        img: "img/cat-5.jpg",
        price: "$125.00",
        subPrice: "$170.00",
        name: "Colorful Stylish Shirt",
    },
];

function App() {
    return (
        <>
            <Header />
            <main>
                <Switch>
                    <PublicRoute path="/" exact>
                        <Home products={DUMMY_PRODUCTS} />
                    </PublicRoute>
                    <PublicRoute path="/shop" exact>
                        <Shop products={DUMMY_PRODUCTS} />
                    </PublicRoute>
                    <PublicRoute path="/detail" exact>
                        <ProductDetail />
                    </PublicRoute>
                    <PublicRoute path="/contact" exact>
                        <Contact />
                    </PublicRoute>
                    <PublicRoute path="/cart" exact>
                        <Cart />
                    </PublicRoute>
                    <PrivateRoute path="/checkout" exact>
                        <Checkout />
                    </PrivateRoute>
                    <PublicRoute path={"/login"} restricted={true} exact>
                        <LoginPage />
                    </PublicRoute>
                </Switch>
            </main>
            <Footer />
        </>
    );
}

export default App;
