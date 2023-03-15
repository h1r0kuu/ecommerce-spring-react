import { ReactElement } from "react"

const NewArrivalsItem = (): ReactElement => {
    return (
        <div className="owl-item active" style={{ width: "277.5px" }}>
            <div className="u-s-m-b-30">
                <div className="product-o product-o--hover-on">
                    <div className="product-o__wrap">
                        <a
                            className="aspect aspect--bg-grey aspect--square u-d-block"
                            href="product-detail.html"
                        >
                            <img
                                className="aspect__img"
                                src="images/product/electronic/product13.jpg"
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
                        <a href="product-detail.html">Nikon DSLR 4K Camera</a>
                    </span>
                    <div className="product-o__rating gl-rating-style">
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <i className="far fa-star" />
                        <span className="product-o__review">(0)</span>
                    </div>
                    <span className="product-o__price">
                        $125.00
                        <span className="product-o__discount">$160.00</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewArrivalsItem