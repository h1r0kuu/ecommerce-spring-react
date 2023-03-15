import { ReactElement } from "react"

const FeatureProductItem = (): ReactElement => {
    return (
        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 u-s-m-b-30">
            <div className="product-o product-o--hover-on u-h-100">
                <div className="product-o__wrap">
                    <a
                        className="aspect aspect--bg-grey aspect--square u-d-block"
                        href="product-detail.html"
                    >
                        <img
                            className="aspect__img"
                            src="images/product/electronic/product19.jpg"
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
                    <a href="product-detail.html">Tablet 14inch Screen</a>
                </span>
                <div className="product-o__rating gl-rating-style">
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half-alt" />
                    <span className="product-o__review">(23)</span>
                </div>
                <span className="product-o__price">
                    $125.00
                    <span className="product-o__discount">$160.00</span>
                </span>
            </div>
        </div>
    )
}

export default FeatureProductItem;