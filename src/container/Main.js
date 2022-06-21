import React from "react";

function Main(props) {
  return (
    <>
      <div id="header-carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" style={{ height: 410 }}>
            <img className="img-fluid" src="img/carousel-1.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 700 }}>
                <h4 className="text-light text-uppercase font-weight-medium mb-3">
                  10% Off Your First Order
                </h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                  Fashionable Dress
                </h3>
                <a href className="btn btn-light py-2 px-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-item" style={{ height: 410 }}>
            <img className="img-fluid" src="img/carousel-2.jpg" alt="Image" />
            <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
              <div className="p-3" style={{ maxWidth: 700 }}>
                <h4 className="text-light text-uppercase font-weight-medium mb-3">
                  10% Off Your First Order
                </h4>
                <h3 className="display-4 text-white font-weight-semi-bold mb-4">
                  Reasonable Price
                </h3>
                <a href className="btn btn-light py-2 px-3">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#header-carousel"
          data-slide="prev"
        >
          <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
            <span className="carousel-control-prev-icon mb-n2" />
          </div>
        </a>
        <a
          className="carousel-control-next"
          href="#header-carousel"
          data-slide="next"
        >
          <div className="btn btn-dark" style={{ width: 45, height: 45 }}>
            <span className="carousel-control-next-icon mb-n2" />
          </div>
        </a>
      </div>
      <div>
        <div className="container-fluid pt-5">
          <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center border mb-4"
                style={{ padding: 30 }}
              >
                <h1 className="fa fa-check text-primary m-0 mr-3" />
                <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center border mb-4"
                style={{ padding: 30 }}
              >
                <h1 className="fa fa-shipping-fast text-primary m-0 mr-2" />
                <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center border mb-4"
                style={{ padding: 30 }}
              >
                <h1 className="fas fa-exchange-alt text-primary m-0 mr-3" />
                <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div
                className="d-flex align-items-center border mb-4"
                style={{ padding: 30 }}
              >
                <h1 className="fa fa-phone-volume text-primary m-0 mr-3" />
                <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-5">
          <div className="row px-xl-5 pb-3">
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: 30 }}
              >
                <p className="text-right">15 Products</p>
                <a
                  href
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img className="img-fluid" src="img/cat-1.jpg" alt />
                </a>
                <h5 className="font-weight-semi-bold m-0">Men's dresses</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: 30 }}
              >
                <p className="text-right">15 Products</p>
                <a
                  href
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img className="img-fluid" src="img/cat-2.jpg" alt />
                </a>
                <h5 className="font-weight-semi-bold m-0">Women's dresses</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: 30 }}
              >
                <p className="text-right">15 Products</p>
                <a
                  href
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img className="img-fluid" src="img/cat-3.jpg" alt />
                </a>
                <h5 className="font-weight-semi-bold m-0">Baby's dresses</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: 30 }}
              >
                <p className="text-right">15 Products</p>
                <a
                  href
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img className="img-fluid" src="img/cat-4.jpg" alt />
                </a>
                <h5 className="font-weight-semi-bold m-0">Accerssories</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: 30 }}
              >
                <p className="text-right">15 Products</p>
                <a
                  href
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img className="img-fluid" src="img/cat-5.jpg" alt />
                </a>
                <h5 className="font-weight-semi-bold m-0">Bags</h5>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 pb-1">
              <div
                className="cat-item d-flex flex-column border mb-4"
                style={{ padding: 30 }}
              >
                <p className="text-right">15 Products</p>
                <a
                  href
                  className="cat-img position-relative overflow-hidden mb-3"
                >
                  <img className="img-fluid" src="img/cat-6.jpg" alt />
                </a>
                <h5 className="font-weight-semi-bold m-0">Shoes</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid offer pt-5">
          <div className="row px-xl-5">
            <div className="col-md-6 pb-4">
              <div className="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                <img src="img/offer-1.png" alt />
                <div className="position-relative" style={{ zIndex: 1 }}>
                  <h5 className="text-uppercase text-primary mb-3">
                    20% off the all order
                  </h5>
                  <h1 className="mb-4 font-weight-semi-bold">
                    Spring Collection
                  </h1>
                  <a href className="btn btn-outline-primary py-md-2 px-md-3">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 pb-4">
              <div className="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                <img src="img/offer-2.png" alt />
                <div className="position-relative" style={{ zIndex: 1 }}>
                  <h5 className="text-uppercase text-primary mb-3">
                    20% off the all order
                  </h5>
                  <h1 className="mb-4 font-weight-semi-bold">
                    Winter Collection
                  </h1>
                  <a href className="btn btn-outline-primary py-md-2 px-md-3">
                    Shop Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5">
              <span className="px-2">Trandy Products</span>
            </h2>
          </div>
          <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-1.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-2.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-3.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-4.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-5.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-6.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-7.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-8.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid bg-secondary my-5">
          <div className="row justify-content-md-center py-5 px-xl-5">
            <div className="col-md-6 col-12 py-5">
              <div className="text-center mb-2 pb-2">
                <h2 className="section-title px-5 mb-3">
                  <span className="bg-secondary px-2">Stay Updated</span>
                </h2>
                <p>
                  Amet lorem at rebum amet dolores. Elitr lorem dolor sed amet
                  diam labore at justo ipsum eirmod duo labore labore.
                </p>
              </div>
              <form action>
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control border-white p-4"
                    placeholder="Email Goes Here"
                  />
                  <div className="input-group-append">
                    <button className="btn btn-primary px-4">Subscribe</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="container-fluid pt-5">
          <div className="text-center mb-4">
            <h2 className="section-title px-5">
              <span className="px-2">Just Arrived</span>
            </h2>
          </div>
          <div className="row px-xl-5 pb-3">
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-1.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-2.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-3.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-4.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-5.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-6.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-7.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
              <div className="card product-item border-0 mb-4">
                <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
                  <img
                    className="img-fluid w-100"
                    src="img/product-8.jpg"
                    alt
                  />
                </div>
                <div className="card-body border-left border-right text-center p-0 pt-4 pb-3">
                  <h6 className="text-truncate mb-3">Colorful Stylish Shirt</h6>
                  <div className="d-flex justify-content-center">
                    <h6>$123.00</h6>
                    <h6 className="text-muted ml-2">
                      <del>$123.00</del>
                    </h6>
                  </div>
                </div>
                <div className="card-footer d-flex justify-content-between bg-light border">
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-eye text-primary mr-1" />
                    View Detail
                  </a>
                  <a href className="btn btn-sm text-dark p-0">
                    <i className="fas fa-shopping-cart text-primary mr-1" />
                    Add To Cart
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5">
          <div className="row px-xl-5">
            <div className="col">
              <div className="owl-carousel vendor-carousel">
                <div className="vendor-item border p-4">
                  <img src="img/vendor-1.jpg" alt />
                </div>
                <div className="vendor-item border p-4">
                  <img src="img/vendor-2.jpg" alt />
                </div>
                <div className="vendor-item border p-4">
                  <img src="img/vendor-3.jpg" alt />
                </div>
                <div className="vendor-item border p-4">
                  <img src="img/vendor-4.jpg" alt />
                </div>
                <div className="vendor-item border p-4">
                  <img src="img/vendor-5.jpg" alt />
                </div>
                <div className="vendor-item border p-4">
                  <img src="img/vendor-6.jpg" alt />
                </div>
                <div className="vendor-item border p-4">
                  <img src="img/vendor-7.jpg" alt />
                </div>
                <div className="vendor-item border p-4">
                  <img src="img/vendor-8.jpg" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
