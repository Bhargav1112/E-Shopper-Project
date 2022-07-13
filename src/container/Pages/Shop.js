import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductItem from "../ProductItem";

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
];

const sortData = (data, type) => {
    return data.sort((a, b) => {
        if (type === "Latest") {
            return a.id > b.id ? 1 : -1;
        } else if (type === "Popularity") {
            return a.id < b.id ? 1 : -1;
        }
    });
};

function Shop(props) {
    const [productData, setProductData] = useState([]);
    const [state, setState] = useState(false);

    useEffect(() => {
        setProductData(DUMMY_PRODUCTS);
    }, []);

    const searchHandler = (event) => {
        const enteredValue = event.target.value;
        const searchedData = DUMMY_PRODUCTS.filter(
            (item) =>
                item.name.toLowerCase().includes(enteredValue.toLowerCase()) ||
                item.price.toString().includes(enteredValue)
        );
        setProductData(searchedData);
    };

    const sortHandler = (event) => {
        const selectedValue = event.target.value;
        const sortedData = sortData(productData, selectedValue);
        setProductData(sortedData);
        setState((prevstate) => !prevstate);
    };
    return (
        <>
            <div className="container-fluid bg-secondary mb-5">
                <div
                    className="d-flex flex-column align-items-center justify-content-center"
                    style={{ minHeight: 300 }}
                >
                    <h1 className="font-weight-semi-bold text-uppercase mb-3">
                        Our Shop
                    </h1>
                    <div className="d-inline-flex">
                        <p className="m-0">
                            <Link to={"/"}>Home</Link>
                        </p>
                        <p className="m-0 px-2">-</p>
                        <p className="m-0">Shop</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-5">
                <div className="row px-xl-5">
                    <div className="col-lg-3 col-md-12">
                        <div className="border-bottom mb-4 pb-4">
                            <h5 className="font-weight-semi-bold mb-4">
                                Filter by price
                            </h5>
                            <form>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        defaultChecked
                                        id="price-all"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="price-all"
                                    >
                                        All Price
                                    </label>
                                    <span className="badge border font-weight-normal">
                                        1000
                                    </span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="price-1"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="price-1"
                                    >
                                        $0 - $100
                                    </label>
                                    <span className="badge border font-weight-normal">
                                        150
                                    </span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="price-2"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="price-2"
                                    >
                                        $100 - $200
                                    </label>
                                    <span className="badge border font-weight-normal">
                                        295
                                    </span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="price-3"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="price-3"
                                    >
                                        $200 - $300
                                    </label>
                                    <span className="badge border font-weight-normal">
                                        246
                                    </span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="price-4"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="price-4"
                                    >
                                        $300 - $400
                                    </label>
                                    <span className="badge border font-weight-normal">
                                        145
                                    </span>
                                </div>
                                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                                    <input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id="price-5"
                                    />
                                    <label
                                        className="custom-control-label"
                                        htmlFor="price-5"
                                    >
                                        $400 - $500
                                    </label>
                                    <span className="badge border font-weight-normal">
                                        168
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12">
                        <div className="row pb-3">
                            <div className="col-12 pb-1">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <form className="d-flex justify-content-between">
                                        <div className="input-group">
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search by name"
                                                onChange={searchHandler}
                                            />
                                            <div className="input-group-append">
                                                <span className="input-group-text bg-transparent text-primary">
                                                    <i className="fa fa-search" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="input-group ms-auto">
                                            <label htmlFor="sort">
                                                Sort by:
                                            </label>
                                            <select
                                                id="sort"
                                                onChange={sortHandler}
                                            >
                                                <option value="">
                                                    --Select--
                                                </option>
                                                <option value="Latest">
                                                    Latest
                                                </option>
                                                <option value="Popularity">
                                                    Popularity
                                                </option>
                                                <option value="Best Rating">
                                                    Best Rating
                                                </option>
                                            </select>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {productData.map((product) => (
                                <ProductItem
                                    key={product.id}
                                    id={product.id}
                                    img={product.img}
                                    name={product.name}
                                    price={product.price}
                                    subPrice={product.subPrice}
                                />
                            ))}
                            <div className="col-12 pb-1">
                                <nav aria-label="Page navigation">
                                    <ul className="pagination justify-content-center mb-3">
                                        <li className="page-item disabled">
                                            <a
                                                className="page-link"
                                                href="#"
                                                aria-label="Previous"
                                            >
                                                <span aria-hidden="true">
                                                    «
                                                </span>
                                                <span className="sr-only">
                                                    Previous
                                                </span>
                                            </a>
                                        </li>
                                        <li className="page-item active">
                                            <a className="page-link" href="#">
                                                1
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                2
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">
                                                3
                                            </a>
                                        </li>
                                        <li className="page-item">
                                            <a
                                                className="page-link"
                                                href="#"
                                                aria-label="Next"
                                            >
                                                <span aria-hidden="true">
                                                    »
                                                </span>
                                                <span className="sr-only">
                                                    Next
                                                </span>
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
