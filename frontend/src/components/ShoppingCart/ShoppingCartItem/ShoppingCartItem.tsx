import { ReactElement } from "react";
const ShoppingCartItem = (): ReactElement => {
    return (
        <tr>
            <td>
                <div className="table-p__box">
                    <div className="table-p__img-wrap">
                        <img
                            className="u-img-fluid"
                            src="images/product/electronic/product3.jpg"
                            alt=""
                        />
                    </div>
                    <div className="table-p__info">
                        <span className="table-p__name">
                            <a href="product-detail.html">
                                Yellow Wireless Headphone
                            </a>
                        </span>
                        <span className="table-p__category">
                            <a href="shop-side-version-2.html">Electronics</a>
                        </span>
                        <ul className="table-p__variant-list">
                            <li>
                                <span>Size: 22</span>
                            </li>
                            <li>
                                <span>Color: Red</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </td>
            <td>
                <span className="table-p__price">$125.00</span>
            </td>
            <td>
                <div className="table-p__input-counter-wrap">
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
            </td>
            <td>
                <div className="table-p__del-wrap">
                    <a
                        className="far fa-trash-alt table-p__delete-link"
                        href="#"
                    />
                </div>
            </td>
        </tr>
    )
}

export default ShoppingCartItem;