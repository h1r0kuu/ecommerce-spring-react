import { Grid } from "@mui/material";
import { ReactElement } from "react";

const TopTrendingItem = (): ReactElement => {
    return (
        <Grid item xl={3} lg={4} md={6} sm={6} mb={3.75}>
            <div className="product-o product-o--hover-on product-o--radius">
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
                    <i className="fas fa-star-half-alt" />
                    <span className="product-o__review">(23)</span>
                </div>
                <span className="product-o__price">
                    $125.00
                    <span className="product-o__discount">$160.00</span>
                </span>
            </div>
        </Grid>
    )
}

export default TopTrendingItem