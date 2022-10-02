import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategoriesData } from "../../redux/actions/categoryUser";
import { fetchProductsData } from "../../redux/actions/productsAction";
import ProductItem from "../ProductItem";
import Loader from "../UI/Loader/Loader";
import Pagination from "../UI/Pagination";

const sortData = (data, type) => {
    return data.sort((a, b) => {
        if (type === "asc") {
            return +a.price > +b.price ? 1 : -1;
        } else if (type === "desc") {
            return +a.price < +b.price ? 1 : -1;
        } else {
            return 0
        }
    });
};

function Shop(props) {
    const [productData, setProductData] = useState([]);
    const [sortProduct, setSortProduct] = useState("false");
    const [selectedCategory, setSelectedCategory] = useState("")
    const [itemsPerPage] = useState(9);
    const [pageNumber, setPageNumber] = useState(1);
    const { products, loading, error } = useSelector(state => state.productReducer)
    const { categories } = useSelector(state => state.categoryUserReducer)
    const cart = useSelector(state => state.cartReducer)
    const dispatch = useDispatch()

    console.log("items", cart);
    useEffect(() => {
        document.title = "E-shopper-Shop";
    }, [])
    useEffect(() => {
        if (!products.length) {
            dispatch(fetchProductsData())
        }
        if (products.length) {
            setProductData(products)
        }
        if (!categories.length) {
            dispatch(getCategoriesData())
        }
        if (selectedCategory) {
            setProductData(products.filter(item => item.categoryId === selectedCategory))
        }
    }, [products, dispatch, categories, selectedCategory])


    const searchHandler = (event) => {
        const enteredValue = event.target.value;
        const searchedData = products.filter(
            (item) =>
                item.name.toLowerCase().includes(enteredValue.toLowerCase()) ||
                item.price.toString().includes(enteredValue)
        );
        setProductData(searchedData);
    };

    const sortHandler = (event) => {
        setSortProduct(event.target.value);
    };

    const sortedProducts = sortData(productData, sortProduct);

    const indexOfLastItem = pageNumber * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = sortedProducts.slice(
        indexOfFirstItem,
        indexOfLastItem
    );

    const changePage = (pageNumber, event) => {
        event.preventDefault();
        setPageNumber(pageNumber);
    };

    const prevPage = (event) => {
        event.preventDefault();
        setPageNumber((prevState) => {
            return prevState > 1 ? prevState - 1 : prevState;
        });
    };

    const nextPage = (event) => {
        event.preventDefault();
        setPageNumber((prevState) => {
            return prevState < sortedProducts.length / itemsPerPage
                ? prevState + 1
                : prevState;
        });
    };

    const handleChangeCategory = e => {
        setSelectedCategory(e.target.value)
    }

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
                                    <form className="d-flex justify-content-between w-100">
                                        <div className="input-group w-50">
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
                                        <select
                                            id="category"
                                            className="shop-dropdown"
                                            name="category"
                                            defaultValue={""}
                                            onChange={handleChangeCategory}
                                        >
                                            <option value="">
                                                All Categories
                                            </option>
                                            {categories.map(item => {
                                                return (
                                                    <option key={item.id} value={item.id}>
                                                        {item.name}
                                                    </option>
                                                )
                                            })}

                                        </select>
                                        <select
                                            id="sort"
                                            className="shop-dropdown"
                                            name="sort"
                                            defaultValue={""}
                                            onChange={sortHandler}
                                        >
                                            <option disabled value="">
                                                Sort by
                                            </option>
                                            <option value="desc">
                                                Price (high to low)
                                            </option>
                                            <option value="asc">
                                                Price (low to high)
                                            </option>
                                        </select>
                                    </form>
                                </div>
                            </div>
                            {loading ? (
                                <Loader />
                            ) : (
                                error ? (
                                    <p className="error-message">{error}</p>
                                ) : (
                                    <>
                                        {currentItems.map((product) => (
                                            <ProductItem
                                                key={product.id}
                                                id={product.id}
                                                img={product.image}
                                                name={product.name}
                                                price={product.price}
                                                subPrice={product.subPrice || 200}
                                            />
                                        ))}
                                    </>
                                )
                            )}

                            <div className="col-12 pb-1">
                                <Pagination
                                    totalItems={sortedProducts.length}
                                    itemsPerPage={itemsPerPage}
                                    changePage={changePage}
                                    prevPage={prevPage}
                                    nextPage={nextPage}
                                    pageNumber={pageNumber}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Shop;
