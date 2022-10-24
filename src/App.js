import React, { useEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";

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
import { useDispatch, useSelector } from "react-redux";
import { putCartItem } from "./common/cartServices";
import { fetchCartData } from "./redux/actions/cartAction";

function App() {
    const location = useLocation()
    const userInfo = localStorage.getItem("loggedInUser")
    const cart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        const sendCart = async () => {
            const res = await putCartItem({ ...cart, user: userInfo ? JSON.parse(userInfo).uid : null })
        }
        if (cart.items.length) {
            sendCart()
        }
    }, [cart, userInfo])

    useEffect(() => {
        dispatch(fetchCartData())
    }, [dispatch])

    return (
        <>
            {
                location.pathname.includes("admin") ? (
                    <Switch>
                        <PrivateRoute path="/admin">
                            <AdminHome />
                        </PrivateRoute>
                    </Switch>
                ) : (
                    <>
                        <Header />
                        <main>
                            <Switch>
                                <PublicRoute path="/" exact>
                                    <Home />
                                </PublicRoute>
                                <PublicRoute path="/shop" exact>
                                    <Shop />
                                </PublicRoute>
                                <PublicRoute path="/shop/detail/:id" exact>
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
                    </>

                )
            }
        </>
    );
}

export default App;