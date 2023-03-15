import { ReactElement } from "react";
import ProductItemRating from "./ProductItemRating/ProductItemRating";

const ProductItem = (): ReactElement => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="product-m">
                <div className="product-m__thumb">
                    <a className="aspect aspect--bg-grey aspect--square u-d-block"
                        href="product-detail.html">
                        <img
                            className="aspect__img"
                            src="images/product/men/product6.jpg"
                            alt=""
                        />
                    </a>
                    <div className="product-m__quick-look">
                        <a
                            className="fas fa-search"
                            data-modal="modal"
                            data-modal-id="#quick-look"
                            data-tooltip="tooltip"
                            data-placement="top"
                            title="Quick Look"
                        />
                    </div>
                    <div className="product-m__add-cart">
                        <a
                            className="btn--e-brand"
                            data-modal="modal"
                            data-modal-id="#add-to-cart"
                        >
                            Add to Cart
                        </a>
                    </div>
                </div>
                <div className="product-m__content">
                    <div className="product-m__category">
                        <a href="shop-side-version-2.html">Men Clothing</a>
                    </div>
                    <div className="product-m__name">
                        <a href="product-detail.html">New Fashion B Nice Elegant</a>
                    </div>
                    <ProductItemRating rating={2.5} numReviews={0} />
                    <div className="product-m__price">$125.00</div>
                    <div className="product-m__hover">
                        <div className="product-m__preview-description">
                            <span>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry's standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </span>
                        </div>
                        <div className="product-m__wishlist">
                            <a
                                className="far fa-heart"
                                href="#"
                                data-tooltip="tooltip"
                                data-placement="top"
                                title="Add to Wishlist"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProductItem;