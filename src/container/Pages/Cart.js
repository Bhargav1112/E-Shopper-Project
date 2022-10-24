import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addCartData, deleteCartData, fetchCartData, removeCartData } from "../../redux/actions/cartAction";
import CartItem from "../cart/CartItem";

function Cart(props) {
    const userInfo = localStorage.getItem("loggedInUser")
    const cart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = "E-shopper-Cart";
    }, [dispatch])

    const addItemHandler = (item) => {
        // cartCtx.onAddItem({ ...item, quantity: 1 });
        dispatch(addCartData({ ...item, quantity: 1 }))
    };

    const removeFromCartHandler = (item) => {
        // cartCtx.onRemoveItem(id);
        dispatch(removeCartData(item))
    };

    const removeWholeItem = (item) => {
        // cartCtx.onRemoveWholeItem(id);
        dispatch(deleteCartData(item))
    };
    const shippingCharge = cart.items.length === 0 ? 0 : 10;

    return (
        <>
            <div className="container-fluid bg-secondary mb-5">
                <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{ minHeight: 300 }}
                >
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">
                        Shopping Cart
                    </h1>
                    <div className="d-inline-flex">
                        <p className="m-0">
                            <Link to={"/"}>Home</Link>
                        </p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Shopping Cart</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8 table-responsive mb-5">
                        <table className="table table-bordered text-center mb-0">
                            <thead className="bg-secondary text-dark">
                                <tr>
                                    <th>Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th>Remove</th>
                                </tr>
                            </thead>
                            <tbody className="align-middle">
                                {cart.items.length === 0 && (
                                    <>
                                        <tr>
                                            <th colSpan={5}>
                                                No Items Added...!
                                            </th>
                                        </tr>
                                        <tr>
                                            <th colSpan={5}>
                                                <Link
                                                    to={"/shop"}
                                                    className="btn btn-primary rounded text-white"
                                                >
                                                    Shop Now😍
                                                </Link>
                                            </th>
                                        </tr>
                                    </>
                                )}

                                {cart.items.map((item) => (
                                    <CartItem
                                        key={item.id}
                                        title={item.title}
                                        img={item.img}
                                        price={item.price}
                                        quantity={item.qty}
                                        totalAmount={item.subTotal}
                                        onRemoveWhole={removeWholeItem.bind(
                                            null,
                                            item
                                        )}
                                        onAdd={addItemHandler.bind(null, item)}
                                        onRemove={removeFromCartHandler.bind(
                                            null,
                                            item
                                        )}
                                    />
                                ))}
                                {cart.items.length > 0 && (
                                    <tr>
                                        <th colSpan={5}>
                                            <Link
                                                to={"/shop"}
                                                className="btn btn-primary rounded text-white"
                                            >
                                                Add Other Products
                                            </Link>
                                        </th>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    <div className="col-lg-4">
                        <form className="mb-5" action>
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control p-4"
                                    placeholder="Coupon Code"
                                />
                                <div className="input-group-append">
                                    <button className="btn btn-primary">
                                        Apply Coupon
                                    </button>
                                </div>
                            </div>
                        </form>
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">
                                    Cart Summary
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-between mb-3 pt-1">
                                    <h6 className="font-weight-medium">
                                        Subtotal
                                    </h6>
                                    <h6 className="font-weight-medium">
                                        &#8377;{cart.totalPrice.toFixed(2)}
                                    </h6>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h6 className="font-weight-medium">
                                        Shipping
                                    </h6>
                                    <h6 className="font-weight-medium">
                                        &#8377;{shippingCharge}
                                    </h6>
                                </div>
                            </div>
                            <div className="card-footer border-secondary bg-transparent">
                                <div className="d-flex justify-content-between mt-2">
                                    <h5 className="font-weight-bold">Total</h5>
                                    <h5 className="font-weight-bold">
                                        $
                                        {(
                                            cart.totalPrice + shippingCharge
                                        ).toFixed(2)}
                                    </h5>
                                </div>
                                <Link
                                    to={"/checkout"}
                                    className={`btn btn-block btn-primary my-3 py-3 ${cart.items.length > 0
                                        ? ""
                                        : "disabled"
                                        } `}
                                >
                                    Proceed To Checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;
