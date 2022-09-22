import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";

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
import CartContextProvider from "./store/cart-context-provider";
import NotFoundPage from "./container/UI/NotFoundPage";
import AdminHome from "./Admin/components/AdminHome";

const DUMMY_PRODUCTS = [
    {
        id: "p1",
        img: "img/product-1.jpg",
        price: 123,
        subPrice: 150,
        name: "One peice",
    },
    {
        id: "p2",
        img: "img/product-2.jpg",
        price: 200,
        subPrice: 300,
        name: "Jacket",
    },
    {
        id: "p3",
        img: "img/product-3.jpg",
        price: 250,
        subPrice: 300,
        name: "Lather Jacket",
    },
    {
        id: "p4",
        img: "img/product-4.jpg",
        price: 150,
        subPrice: 200,
        name: "Women Proffetional",
    },
    {
        id: "p5",
        img: "img/product-5.jpg",
        price: 300,
        subPrice: 500,
        name: "Colorful Stylish T-Shirt",
    },
    {
        id: "p6",
        img: "img/product-6.jpg",
        price: 450,
        subPrice: 600,
        name: "Blazer",
    },
    {
        id: "p7",
        img: "img/product-7.jpg",
        price: 350,
        subPrice: 400,
        name: "Women Full lenth Coat",
    },
    {
        id: "p8",
        img: "img/product-8.jpg",
        price: 320,
        subPrice: 400,
        name: "Childeren shirt",
    },
    {
        id: "p9",
        img: "img/product-1.jpg",
        price: 310,
        subPrice: 400,
        name: "Colorful Stylish Shirt",
    },
    {
        id: "p10",
        img: "img/cat-1.jpg",
        price: 65,
        subPrice: 100,
        name: "Colorful Stylish Shirt",
    },
    {
        id: "p11",
        img: "img/cat-2.jpg",
        price: 75,
        subPrice: 120,
        name: "Colorful Stylish Shirt",
    },
    {
        id: "p12",
        img: "img/cat-3.jpg",
        price: 152,
        subPrice: 200,
        name: "Colorful Stylish Shirt",
    },
    {
        id: "p13",
        img: "img/cat-4.jpg",
        price: 165,
        subPrice: 180,
        name: "Colorful Stylish Shirt",
    },
    {
        id: "p14",
        img: "img/cat-5.jpg",
        price: 160,
        subPrice: 175,
        name: "Colorful Stylish Shirt",
    },
];

function App() {
    const [showAdmin, setShowAdmin] = useState(localStorage.getItem('admin') || "")
    return (
        <>
            {
                showAdmin ? (
                    <Switch>
                        <PrivateRoute path="/admin">
                            <AdminHome setShowAdmin={setShowAdmin} />
                        </PrivateRoute>
                    </Switch>
                ) : (
                    <CartContextProvider>
                        <Header setShowAdmin={setShowAdmin} />
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
                                <Route path="*">
                                    <NotFoundPage />
                                </Route>
                            </Switch>
                        </main>
                        <Footer />
                    </CartContextProvider>
                )
            }
        </>
    );
}

export default App;