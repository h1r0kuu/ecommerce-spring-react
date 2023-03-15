import { ReactElement } from "react"

const ShippingFilter = (): ReactElement => {
    return (
        <div className="u-s-m-b-30">
            <div className="shop-w shop-w--style">
                <div className="shop-w__intro-wrap">
                    <h1 className="shop-w__h">SHIPPING</h1>
                    <span
                        className="fas fa-minus shop-w__toggle"
                        data-target="#s-shipping"
                        data-toggle="collapse"
                    />
                </div>
                <div className="shop-w__wrap collapse show" id="s-shipping">
                    <ul className="shop-w__list gl-scroll">
                        <li>
                            {/*====== Check Box ======*/}
                            <div className="check-box">
                                <input type="checkbox" id="free-shipping" />
                                <div className="check-box__state check-box__state--primary">
                                    <label className="check-box__label" htmlFor="free-shipping">
                                        Free Shipping
                                    </label>
                                </div>
                            </div>
                            {/*====== End - Check Box ======*/}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default ShippingFilter