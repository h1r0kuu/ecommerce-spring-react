import { faStar, faStarHalfAlt } from "@fortawesome/free-regular-svg-icons";
import { faStar as faFullStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Header from "../../../components/Header/Header";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";
import { HOME } from "../../../utils/pathConstants";
import ProductDescriptionPane from "../ProductDescriptionPane/ProductDescriptionPane";
import ReviewsPane from "../ReviewsPane/ReviewsPane";

const ProductDetails = (): ReactElement => {
    return (
        <PageWrapper>
            <div className="u-s-p-t-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5">
                            {/*====== Product Breadcrumb ======*/}
                            <div className="pd-breadcrumb u-s-m-b-30">
                                <ul className="pd-breadcrumb__list">
                                    <Breadcrumb isActive={false} link={HOME} label={"Home"} />
                                    <Breadcrumb isActive={false} link={HOME} label={"Electronics"} />
                                    <Breadcrumb isActive={false} link={HOME} label={"dasdas"} />
                                    <Breadcrumb isActive={true} link={HOME} label={"Product Name"} />
                                </ul>
                            </div>
                            {/*====== End - Product Breadcrumb ======*/}
                            {/*====== Product Detail Zoom ======*/}
                            <div className="pd u-s-m-b-30">
                                <div className="pd-wrap">
                                    <div
                                        id="pd-o-initiate"
                                        className="slick-initialized slick-slider"
                                    >
                                        <div className="slick-list draggable">
                                            <div
                                                className="slick-track"
                                                style={{ opacity: 1, width: 3450 }}
                                            >
                                                <div
                                                    className="pd-o-img-wrap slick-slide slick-current slick-active"
                                                    data-src="images/product/product-d-1.jpg"
                                                    data-slick-index={0}
                                                    aria-hidden="false"
                                                    style={{
                                                        width: 690,
                                                        position: "relative",
                                                        left: 0,
                                                        top: 0,
                                                        zIndex: 999,
                                                        opacity: 1
                                                    }}
                                                    tabIndex={0}
                                                >
                                                    <img
                                                        className="u-img-fluid"
                                                        src="images/product/product-d-1.jpg"
                                                        data-zoom-image="images/product/product-d-1.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    className="pd-o-img-wrap slick-slide"
                                                    data-src="images/product/product-d-2.jpg"
                                                    data-slick-index={1}
                                                    aria-hidden="true"
                                                    style={{
                                                        width: 690,
                                                        position: "relative",
                                                        left: "-690px",
                                                        top: 0,
                                                        zIndex: 998,
                                                        opacity: 0
                                                    }}
                                                    tabIndex={-1}
                                                >
                                                    <img
                                                        className="u-img-fluid"
                                                        src="images/product/product-d-2.jpg"
                                                        data-zoom-image="images/product/product-d-2.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    className="pd-o-img-wrap slick-slide"
                                                    data-src="images/product/product-d-3.jpg"
                                                    data-slick-index={2}
                                                    aria-hidden="true"
                                                    style={{
                                                        width: 690,
                                                        position: "relative",
                                                        left: "-1380px",
                                                        top: 0,
                                                        zIndex: 998,
                                                        opacity: 0
                                                    }}
                                                    tabIndex={-1}
                                                >
                                                    <img
                                                        className="u-img-fluid"
                                                        src="images/product/product-d-3.jpg"
                                                        data-zoom-image="images/product/product-d-3.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    className="pd-o-img-wrap slick-slide"
                                                    data-src="images/product/product-d-4.jpg"
                                                    data-slick-index={3}
                                                    aria-hidden="true"
                                                    style={{
                                                        width: 690,
                                                        position: "relative",
                                                        left: "-2070px",
                                                        top: 0,
                                                        zIndex: 998,
                                                        opacity: 0
                                                    }}
                                                    tabIndex={-1}
                                                >
                                                    <img
                                                        className="u-img-fluid"
                                                        src="images/product/product-d-4.jpg"
                                                        data-zoom-image="images/product/product-d-4.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                                <div
                                                    className="pd-o-img-wrap slick-slide"
                                                    data-src="images/product/product-d-5.jpg"
                                                    data-slick-index={4}
                                                    aria-hidden="true"
                                                    style={{
                                                        width: 690,
                                                        position: "relative",
                                                        left: "-2760px",
                                                        top: 0,
                                                        zIndex: 998,
                                                        opacity: 0
                                                    }}
                                                    tabIndex={-1}
                                                >
                                                    <img
                                                        className="u-img-fluid"
                                                        src="images/product/product-d-5.jpg"
                                                        data-zoom-image="images/product/product-d-5.jpg"
                                                        alt=""
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="pd-text">Click for larger zoom</span>
                                </div>
                                <div className="u-s-m-t-15">
                                    <div>
                                        <div
                                            id="pd-o-thumbnail"
                                            className="slick-initialized slick-slider"
                                        >
                                            <div
                                                className="pt-prev slick-arrow slick-disabled"
                                                aria-disabled="true"
                                                style={{}}
                                            >
                                                <i className="fas fa-angle-left" />
                                            </div>
                                            <div className="slick-list draggable">
                                                <div
                                                    className="slick-track"
                                                    style={{
                                                        opacity: 1,
                                                        width: 1150,
                                                        transform: "translate3d(0px, 0px, 0px)"
                                                    }}
                                                >
                                                    <div
                                                        className="slick-slide slick-current slick-active"
                                                        style={{ width: 230 }}
                                                        tabIndex={0}
                                                        data-slick-index={0}
                                                        aria-hidden="false"
                                                    >
                                                        <img
                                                            className="u-img-fluid"
                                                            src="images/product/product-d-1.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className="slick-slide slick-active"
                                                        style={{ width: 230 }}
                                                        tabIndex={0}
                                                        data-slick-index={1}
                                                        aria-hidden="false"
                                                    >
                                                        <img
                                                            className="u-img-fluid"
                                                            src="images/product/product-d-2.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className="slick-slide slick-active"
                                                        style={{ width: 230 }}
                                                        tabIndex={0}
                                                        data-slick-index={2}
                                                        aria-hidden="false"
                                                    >
                                                        <img
                                                            className="u-img-fluid"
                                                            src="images/product/product-d-3.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className="slick-slide"
                                                        style={{ width: 230 }}
                                                        tabIndex={-1}
                                                        data-slick-index={3}
                                                        aria-hidden="true"
                                                    >
                                                        <img
                                                            className="u-img-fluid"
                                                            src="images/product/product-d-4.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div
                                                        className="slick-slide"
                                                        style={{ width: 230 }}
                                                        tabIndex={-1}
                                                        data-slick-index={4}
                                                        aria-hidden="true"
                                                    >
                                                        <img
                                                            className="u-img-fluid"
                                                            src="images/product/product-d-5.jpg"
                                                            alt=""
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className="pt-next slick-arrow"
                                                style={{}}
                                                aria-disabled="false"
                                            >
                                                <i className="fas fa-angle-right" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*====== End - Product Detail Zoom ======*/}
                        </div>
                        <div className="col-lg-7">
                            {/*====== Product Right Side Details ======*/}
                            <div className="pd-detail">
                                <div>
                                    <span className="pd-detail__name">
                                        Nikon Camera 4k Lens Zoom Pro
                                    </span>
                                </div>
                                <div>
                                    <div className="pd-detail__inline">
                                        <span className="pd-detail__price">$6.99</span>
                                        <span className="pd-detail__discount">(76% OFF)</span>
                                        <del className="pd-detail__del">$28.97</del>
                                    </div>
                                </div>
                                <div className="u-s-m-b-15">
                                    <div className="pd-detail__rating gl-rating-style">
                                        <FontAwesomeIcon icon={faFullStar} />
                                        <FontAwesomeIcon icon={faFullStar} />
                                        <FontAwesomeIcon icon={faFullStar} />
                                        <FontAwesomeIcon icon={faFullStar} />
                                        <FontAwesomeIcon icon={faStarHalfAlt} />
                                        <span className="pd-detail__review u-s-m-l-4">
                                            <a data-click-scroll="#view-review">23 Reviews</a>
                                        </span>
                                    </div>
                                </div>
                                <div className="u-s-m-b-15">
                                    <div className="pd-detail__inline">
                                        <span className="pd-detail__stock">200 in stock</span>
                                        <span className="pd-detail__left">Only 2 left</span>
                                    </div>
                                </div>
                                <div className="u-s-m-b-15">
                                    <span className="pd-detail__preview-desc">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy
                                        text ever since the 1500s, when an unknown printer took a galley
                                        of type and scrambled it to make a type specimen book.
                                    </span>
                                </div>
                                <div className="u-s-m-b-15">
                                    <div className="pd-detail__inline">
                                        <span className="pd-detail__click-wrap">
                                            <i className="far fa-heart u-s-m-r-6" />
                                            <a href="signin.html">Add to Wishlist</a>
                                            <span className="pd-detail__click-count">(222)</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="u-s-m-b-15">
                                    <div className="pd-detail__inline">
                                        <span className="pd-detail__click-wrap">
                                            <i className="far fa-envelope u-s-m-r-6" />
                                            <a href="signin.html">Email me When the price drops</a>
                                            <span className="pd-detail__click-count">(20)</span>
                                        </span>
                                    </div>
                                </div>
                                <div className="u-s-m-b-15">
                                    <ul className="pd-social-list">
                                        <li>
                                            <a className="s-fb--color-hover" href="#">
                                                <i className="fab fa-facebook-f" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="s-tw--color-hover" href="#">
                                                <i className="fab fa-twitter" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="s-insta--color-hover" href="#">
                                                <i className="fab fa-instagram" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="s-wa--color-hover" href="#">
                                                <i className="fab fa-whatsapp" />
                                            </a>
                                        </li>
                                        <li>
                                            <a className="s-gplus--color-hover" href="#">
                                                <i className="fab fa-google-plus-g" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="u-s-m-b-15">
                                    <form className="pd-detail__form">
                                        <div className="u-s-m-b-15">
                                            <span className="pd-detail__label u-s-m-b-8">Color:</span>
                                            <div className="pd-detail__color">
                                                <div className="color__radio">
                                                    <input
                                                        type="radio"
                                                        id="jet"
                                                        name="color"
                                                    />
                                                    <label
                                                        className="color__radio-label"
                                                        htmlFor="jet"
                                                        style={{ backgroundColor: "#333333" }}
                                                    />
                                                </div>
                                                <div className="color__radio">
                                                    <input type="radio" id="folly" name="color" />
                                                    <label
                                                        className="color__radio-label"
                                                        htmlFor="folly"
                                                        style={{ backgroundColor: "#FF0055" }}
                                                    />
                                                </div>
                                                <div className="color__radio">
                                                    <input type="radio" id="yellow" name="color" />
                                                    <label
                                                        className="color__radio-label"
                                                        htmlFor="yellow"
                                                        style={{ backgroundColor: "#FFFF00" }}
                                                    />
                                                </div>
                                                <div className="color__radio">
                                                    <input type="radio" id="granite-gray" name="color" />
                                                    <label
                                                        className="color__radio-label"
                                                        htmlFor="granite-gray"
                                                        style={{ backgroundColor: "#605F5E" }}
                                                    />
                                                </div>
                                                <div className="color__radio">
                                                    <input type="radio" id="space-cadet" name="color" />
                                                    <label
                                                        className="color__radio-label"
                                                        htmlFor="space-cadet"
                                                        style={{ backgroundColor: "#1D3461" }}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="u-s-m-b-15">
                                            <span className="pd-detail__label u-s-m-b-8">Size:</span>
                                            <div className="pd-detail__size">
                                                <div className="size__radio">
                                                    <input
                                                        type="radio"
                                                        id="xs"
                                                        name="size"
                                                    />
                                                    <label className="size__radio-label" htmlFor="xs">
                                                        XS
                                                    </label>
                                                </div>
                                                <div className="size__radio">
                                                    <input type="radio" id="small" name="size" />
                                                    <label className="size__radio-label" htmlFor="xxl">
                                                        Small
                                                    </label>
                                                </div>
                                                <div className="size__radio">
                                                    <input type="radio" id="medium" name="size" />
                                                    <label className="size__radio-label" htmlFor="medium">
                                                        Medium
                                                    </label>
                                                </div>
                                                <div className="size__radio">
                                                    <input type="radio" id="large" name="size" />
                                                    <label className="size__radio-label" htmlFor="xxl">
                                                        Large
                                                    </label>
                                                </div>
                                                <div className="size__radio">
                                                    <input type="radio" id="xl" name="size" />
                                                    <label className="size__radio-label" htmlFor="xl">
                                                        XL
                                                    </label>
                                                </div>
                                                <div className="size__radio">
                                                    <input type="radio" id="xxl" name="size" />
                                                    <label className="size__radio-label" htmlFor="xxl">
                                                        XXL
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="pd-detail-inline-2">
                                            <div className="u-s-m-b-15">
                                                {/*====== Input Counter ======*/}
                                                <div className="input-counter">
                                                    <span className="input-counter__minus fas fa-minus" />
                                                    <input
                                                        className="input-counter__text input-counter--text-primary-style"
                                                        type="text"
                                                        defaultValue={1}
                                                        data-min={1}
                                                        data-max={1000}
                                                    />
                                                    <span className="input-counter__plus fas fa-plus" />
                                                </div>
                                                {/*====== End - Input Counter ======*/}
                                            </div>
                                            <div className="u-s-m-b-15">
                                                <button className="btn btn--e-brand-b-2" type="submit">
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="u-s-m-b-15">
                                    <span className="pd-detail__label u-s-m-b-8">
                                        Product Policy:
                                    </span>
                                    <ul className="pd-detail__policy-list">
                                        <li>
                                            <i className="fas fa-check-circle u-s-m-r-8" />
                                            <span>Buyer Protection.</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle u-s-m-r-8" />
                                            <span>Full Refund if you don't receive your order.</span>
                                        </li>
                                        <li>
                                            <i className="fas fa-check-circle u-s-m-r-8" />
                                            <span>Returns accepted if product not as described.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/*====== End - Product Right Side Details ======*/}
                        </div>
                    </div>
                </div>
            </div>
            {/*====== Product Detail Tab ======*/}
            <div className="u-s-p-y-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="pd-tab">
                                <div className="u-s-m-b-30">
                                    <ul className="nav pd-tab__list">
                                        <li className="nav-item">
                                            <a
                                                className="nav-link active show"
                                                data-toggle="tab"
                                                href="#pd-desc"
                                            >
                                                DESCRIPTION
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a
                                                className="nav-link"
                                                id="view-review"
                                                data-toggle="tab"
                                                href="#pd-rev"
                                            >
                                                REVIEWS
                                                <span>(23)</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="tab-content">
                                    {/*====== Tab 1 ======*/}
                                    <ProductDescriptionPane />
                                    {/*====== End - Tab 1 ======*/}
                                    {/*====== Tab 3 ======*/}
                                    <ReviewsPane />
                                    {/*====== End - Tab 3 ======*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*====== End - Product Detail Tab ======*/}
            <div className="u-s-p-b-90">
                {/*====== Section Intro ======*/}
                <div className="section__intro u-s-m-b-46">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section__text-wrap">
                                    <h1 className="section__heading u-c-secondary u-s-m-b-12">
                                        CUSTOMER ALSO VIEWED
                                    </h1>
                                    <span className="section__span u-c-grey">
                                        PRODUCTS THAT CUSTOMER VIEWED
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Section Intro ======*/}
                {/*====== Section Content ======*/}
                <div className="section__content">
                    <div className="container">
                        <div>
                            <div
                                className="owl-carousel product-slider owl-loaded owl-drag"
                                data-item={4}
                            >
                                <div className="owl-stage-outer">
                                    <div
                                        className="owl-stage"
                                        style={{
                                            transform: "translate3d(0px, 0px, 0px)",
                                            transition: "all 0s ease 0s",
                                            width: 2070
                                        }}
                                    >
                                        <div className="owl-item active" style={{ width: 345 }}>
                                            <div className="u-s-m-b-30">
                                                <div className="product-o product-o--hover-on">
                                                    <div className="product-o__wrap">
                                                        <a
                                                            className="aspect aspect--bg-grey aspect--square u-d-block"
                                                            href="product-detail.html"
                                                        >
                                                            <img
                                                                className="aspect__img"
                                                                src="images/product/electronic/product1.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a
                                                                        data-modal="modal"
                                                                        data-modal-id="#quick-look"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Quick View"
                                                                    >
                                                                        <i className="fas fa-search-plus" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        data-modal="modal"
                                                                        data-modal-id="#add-to-cart"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Add to Cart"
                                                                    >
                                                                        <i className="fas fa-plus-circle" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="signin.html"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Add to Wishlist"
                                                                    >
                                                                        <i className="fas fa-heart" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="signin.html"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Email me When the price drops"
                                                                    >
                                                                        <i className="fas fa-envelope" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a>
                                                    </span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">
                                                            Beats Bomb Wireless Headphone
                                                        </a>
                                                    </span>
                                                    <div className="product-o__rating gl-rating-style">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <span className="product-o__review">(20)</span>
                                                    </div>
                                                    <span className="product-o__price">
                                                        $125.00
                                                        <span className="product-o__discount">$160.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item active" style={{ width: 345 }}>
                                            <div className="u-s-m-b-30">
                                                <div className="product-o product-o--hover-on">
                                                    <div className="product-o__wrap">
                                                        <a
                                                            className="aspect aspect--bg-grey aspect--square u-d-block"
                                                            href="product-detail.html"
                                                        >
                                                            <img
                                                                className="aspect__img"
                                                                src="images/product/electronic/product2.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a
                                                                        data-modal="modal"
                                                                        data-modal-id="#quick-look"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Quick View"
                                                                    >
                                                                        <i className="fas fa-search-plus" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        data-modal="modal"
                                                                        data-modal-id="#add-to-cart"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Add to Cart"
                                                                    >
                                                                        <i className="fas fa-plus-circle" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="signin.html"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Add to Wishlist"
                                                                    >
                                                                        <i className="fas fa-heart" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="signin.html"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Email me When the price drops"
                                                                    >
                                                                        <i className="fas fa-envelope" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a>
                                                    </span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">Red Wireless Headphone</a>
                                                    </span>
                                                    <div className="product-o__rating gl-rating-style">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <span className="product-o__review">(20)</span>
                                                    </div>
                                                    <span className="product-o__price">
                                                        $125.00
                                                        <span className="product-o__discount">$160.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{ width: 345 }}>
                                            <div className="u-s-m-b-30">
                                                <div className="product-o product-o--hover-on">
                                                    <div className="product-o__wrap">
                                                        <a
                                                            className="aspect aspect--bg-grey aspect--square u-d-block"
                                                            href="product-detail.html"
                                                        >
                                                            <img
                                                                className="aspect__img"
                                                                src="images/product/electronic/product3.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a
                                                                        data-modal="modal"
                                                                        data-modal-id="#quick-look"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Quick View"
                                                                    >
                                                                        <i className="fas fa-search-plus" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        data-modal="modal"
                                                                        data-modal-id="#add-to-cart"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Add to Cart"
                                                                    >
                                                                        <i className="fas fa-plus-circle" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="signin.html"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Add to Wishlist"
                                                                    >
                                                                        <i className="fas fa-heart" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="signin.html"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Email me When the price drops"
                                                                    >
                                                                        <i className="fas fa-envelope" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a>
                                                    </span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">
                                                            Yellow Wireless Headphone
                                                        </a>
                                                    </span>
                                                    <div className="product-o__rating gl-rating-style">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <span className="product-o__review">(20)</span>
                                                    </div>
                                                    <span className="product-o__price">
                                                        $125.00
                                                        <span className="product-o__discount">$160.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{ width: 345 }}>
                                            <div className="u-s-m-b-30">
                                                <div className="product-o product-o--hover-on">
                                                    <div className="product-o__wrap">
                                                        <a
                                                            className="aspect aspect--bg-grey aspect--square u-d-block"
                                                            href="product-detail.html"
                                                        >
                                                            <img
                                                                className="aspect__img"
                                                                src="images/product/electronic/product23.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a
                                                                        data-modal="modal"
                                                                        data-modal-id="#quick-look"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Quick View"
                                                                    >
                                                                        <i className="fas fa-search-plus" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        data-modal="modal"
                                                                        data-modal-id="#add-to-cart"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Add to Cart"
                                                                    >
                                                                        <i className="fas fa-plus-circle" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="signin.html"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Add to Wishlist"
                                                                    >
                                                                        <i className="fas fa-heart" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="signin.html"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Email me When the price drops"
                                                                    >
                                                                        <i className="fas fa-envelope" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a>
                                                    </span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">
                                                            Razor Gear Ultra Slim 8GB Ram
                                                        </a>
                                                    </span>
                                                    <div className="product-o__rating gl-rating-style">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <span className="product-o__review">(20)</span>
                                                    </div>
                                                    <span className="product-o__price">
                                                        $125.00
                                                        <span className="product-o__discount">$160.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{ width: 345 }}>
                                            <div className="u-s-m-b-30">
                                                <div className="product-o product-o--hover-on">
                                                    <div className="product-o__wrap">
                                                        <a
                                                            className="aspect aspect--bg-grey aspect--square u-d-block"
                                                            href="product-detail.html"
                                                        >
                                                            <img
                                                                className="aspect__img"
                                                                src="images/product/electronic/product26.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a
                                                                        data-modal="modal"
                                                                        data-modal-id="#quick-look"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Quick View"
                                                                    >
                                                                        <i className="fas fa-search-plus" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        data-modal="modal"
                                                                        data-modal-id="#add-to-cart"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Add to Cart"
                                                                    >
                                                                        <i className="fas fa-plus-circle" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="signin.html"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Add to Wishlist"
                                                                    >
                                                                        <i className="fas fa-heart" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="signin.html"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Email me When the price drops"
                                                                    >
                                                                        <i className="fas fa-envelope" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a>
                                                    </span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">
                                                            Razor Gear Ultra Slim 12GB Ram
                                                        </a>
                                                    </span>
                                                    <div className="product-o__rating gl-rating-style">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <span className="product-o__review">(20)</span>
                                                    </div>
                                                    <span className="product-o__price">
                                                        $125.00
                                                        <span className="product-o__discount">$160.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="owl-item" style={{ width: 345 }}>
                                            <div className="u-s-m-b-30">
                                                <div className="product-o product-o--hover-on">
                                                    <div className="product-o__wrap">
                                                        <a
                                                            className="aspect aspect--bg-grey aspect--square u-d-block"
                                                            href="product-detail.html"
                                                        >
                                                            <img
                                                                className="aspect__img"
                                                                src="images/product/electronic/product30.jpg"
                                                                alt=""
                                                            />
                                                        </a>
                                                        <div className="product-o__action-wrap">
                                                            <ul className="product-o__action-list">
                                                                <li>
                                                                    <a
                                                                        data-modal="modal"
                                                                        data-modal-id="#quick-look"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Quick View"
                                                                    >
                                                                        <i className="fas fa-search-plus" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        data-modal="modal"
                                                                        data-modal-id="#add-to-cart"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Add to Cart"
                                                                    >
                                                                        <i className="fas fa-plus-circle" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="signin.html"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Add to Wishlist"
                                                                    >
                                                                        <i className="fas fa-heart" />
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <a
                                                                        href="signin.html"
                                                                        data-tooltip="tooltip"
                                                                        data-placement="top"
                                                                        title=""
                                                                        data-original-title="Email me When the price drops"
                                                                    >
                                                                        <i className="fas fa-envelope" />
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <span className="product-o__category">
                                                        <a href="shop-side-version-2.html">Electronics</a>
                                                    </span>
                                                    <span className="product-o__name">
                                                        <a href="product-detail.html">
                                                            Razor Gear Ultra Slim 16GB Ram
                                                        </a>
                                                    </span>
                                                    <div className="product-o__rating gl-rating-style">
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <i className="fas fa-star" />
                                                        <span className="product-o__review">(20)</span>
                                                    </div>
                                                    <span className="product-o__price">
                                                        $125.00
                                                        <span className="product-o__discount">$160.00</span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="owl-nav">
                                    <div className="p-prev">
                                        <i className="fas fa-long-arrow-alt-left" />
                                    </div>
                                    <div className="p-next">
                                        <i className="fas fa-long-arrow-alt-right" />
                                    </div>
                                </div>
                                <div className="owl-dots disabled" />
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Section Content ======*/}
            </div>
            {/*====== End - Section 1 ======*/}

        </PageWrapper >
    )
}

export default ProductDetails;