import React, { useContext, useEffect } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { NavLink } from "react-router-dom";
import CartContext from "../../store/cart-context";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useDispatch, useSelector } from "react-redux";
import { putCartItem } from "../../common/cartServices";

function Checkout(props) {
    const userinfo = localStorage.getItem("loggedInUser")
    const cart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        document.title = "E-shopper-Checkout";
    }, [])

    const placeOrderHandler = async (values, action) => {
        const orderData = {
            ...cart,
            user: JSON.parse(userinfo),
            shippingDetails: values
        }
        await addDoc(collection(db, "orders"), orderData);
        await putCartItem({ items: [], totalPrice: 0, totalQty: 0, user: userinfo ? JSON.parse(userinfo).uid : null })
        dispatch({ type: "CLEAR_CART" })
        action.reset()
    }

    const ctx = useContext(CartContext);

    const schema = yup.object().shape({
        firstName: yup.string().required("Required"),
        lastName: yup.string().required("Required"),
        email: yup
            .string()
            .email("Please enter valid email")
            .required("Required"),
        phone: yup
            .string()
            .max(10, "mobile number should be 10 digits.")
            .required("Required"),
        address: yup.string().required("Required"),
        country: yup.string().required("Required"),
        city: yup.string().required("Required"),
        state: yup.string().required("Required"),
        zip: yup.string().required("Required"),
    });

    const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
        useFormik({
            initialValues: {
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: "",
                country: "",
                city: "",
                state: "",
                zip: "",
            },
            validationSchema: schema,
            onSubmit: placeOrderHandler,
        });

    const shippingCharge = 10;
    return (
        <>
            <div className="container-fluid bg-secondary mb-5">
                <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{ minHeight: 300 }}
                >
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">
                        Checkout
                    </h1>
                    <div className="d-inline-flex">
                        <p className="m-0">
                            <NavLink to={"/"}>Home</NavLink>
                        </p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">
                            <NavLink to={"/cart"}>Cart</NavLink>
                        </p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Checkout</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-8">
                        <div className="mb-4">
                            <h4 className="font-weight-semi-bold mb-4">
                                Billing Address
                            </h4>
                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6 form-group">
                                        <label>First Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="John"
                                            name="firstName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.firstName}
                                        />
                                        {errors.firstName &&
                                            touched.firstName && (
                                                <p className="text-danger">
                                                    {errors.firstName}
                                                </p>
                                            )}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Last Name</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="Doe"
                                            name="lastName"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.lastName}
                                        />
                                        {errors.lastName &&
                                            touched.lastName && (
                                                <p className="text-danger">
                                                    {errors.lastName}
                                                </p>
                                            )}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>E-mail</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="example@email.com"
                                            name="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.email}
                                        />
                                        {errors.email && touched.email && (
                                            <p className="text-danger">
                                                {errors.email}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Mobile No</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="+123 456 789"
                                            name="phone"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.phone}
                                        />
                                        {errors.phone && touched.phone && (
                                            <p className="text-danger">
                                                {errors.phone}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Address Line 1</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="123 Street"
                                            name="address"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.address}
                                        />
                                        {errors.address && touched.address && (
                                            <p className="text-danger">
                                                {errors.address}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Address Line 2</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="123 Street"
                                        />
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>Country</label>
                                        <select
                                            className="custom-select"
                                            name="country"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.country}
                                        >
                                            <option value={""}>
                                                ---Select---
                                            </option>
                                            <option value={"INDIA"}>
                                                INDIA
                                            </option>
                                            <option value="US">US</option>
                                            <option value={"RSA"}>RSA</option>
                                            <option value={"SRL"}>SRL</option>
                                        </select>
                                        {errors.country && touched.country && (
                                            <p className="text-danger">
                                                {errors.country}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>City</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="New York"
                                            name="city"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.city}
                                        />
                                        {errors.city && touched.city && (
                                            <p className="text-danger">
                                                {errors.city}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>State</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder="New York"
                                            name="state"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.state}
                                        />
                                        {errors.state && touched.state && (
                                            <p className="text-danger">
                                                {errors.state}
                                            </p>
                                        )}
                                    </div>
                                    <div className="col-md-6 form-group">
                                        <label>ZIP Code</label>
                                        <input
                                            className="form-control"
                                            type="text"
                                            placeholder={123}
                                            name="zip"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            value={values.zip}
                                        />
                                        {errors.zip && touched.zip && (
                                            <p className="text-danger">
                                                {errors.zip}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3"
                                >
                                    Place Order
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">
                                    Order Total
                                </h4>
                            </div>
                            <div className="card-body">
                                <h5 className="font-weight-medium mb-3">
                                    Products
                                </h5>
                                {cart.items.map((item) => (
                                    <div className="d-flex justify-content-between">
                                        <p style={{ maxWidth: "150px" }}>{item.title}</p>
                                        <p style={{ maxWidth: "50px" }}>Qty : {item.qty}</p>
                                        <p style={{ maxWidth: "100px" }}>&#8377;{item.subTotal}</p>
                                    </div>
                                ))}
                                <hr className="mt-0" />
                                <div className="d-flex justify-content-between mb-3 pt-1">
                                    <h6 className="font-weight-medium">
                                        Subtotal
                                    </h6>
                                    <h6 className="font-weight-medium">
                                        &#8377;{cart.totalPrice}
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
                                        &#8377;{cart.totalPrice + shippingCharge}
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="card border-secondary mb-5">
                            <div className="card-header bg-secondary border-0">
                                <h4 className="font-weight-semi-bold m-0">
                                    Payment
                                </h4>
                            </div>
                            <div className="card-body">
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            name="payment"
                                            id="paypal"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="paypal"
                                        >
                                            Paypal
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            name="payment"
                                            id="directcheck"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="directcheck"
                                        >
                                            Direct Check
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-radio">
                                        <input
                                            type="radio"
                                            className="custom-control-input"
                                            name="payment"
                                            id="banktransfer"
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor="banktransfer"
                                        >
                                            Bank Transfer
                                        </label>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="card-footer border-secondary bg-transparent">
                                <button
                                    type="submit"
                                    className="btn btn-lg btn-block btn-primary font-weight-bold my-3 py-3"
                                >
                                    Place Order
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Checkout;
