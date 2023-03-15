import { ReactElement } from "react";

const MiniCartItem = (): ReactElement => {
    return (
        <div className="card-mini-product">
            <div className="mini-product">
                <div className="mini-product__image-wrapper">
                    <a
                        className="mini-product__link"
                        href="product-detail.html"
                    >
                        <img
                            className="u-img-fluid"
                            src="images/product/electronic/product3.jpg"
                            alt=""
                        />
                    </a>
                </div>
                <div className="mini-product__info-wrapper">
                    <span className="mini-product__category">
                        <a href="shop-side-version-2.html">Electronics</a>
                    </span>
                    <span className="mini-product__name">
                        <a href="product-detail.html">
                            Yellow Wireless Headphone
                        </a>
                    </span>
                    <span className="mini-product__quantity">1 x</span>
                    <span className="mini-product__price">$8</span>
                </div>
            </div>
            <a className="mini-product__delete-link far fa-trash-alt" />
        </div>
    )
}

export default MiniCartItem