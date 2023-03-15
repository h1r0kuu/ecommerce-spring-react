import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { CART, CHECKOUT } from "../../../../utils/pathConstants";
import MiniCartItem from "./MiniCartItem/MiniCartItem";

const MiniCart = (): ReactElement => {
    return (
        <div className="mini-cart">
            <div className="mini-product-container gl-scroll u-s-m-b-15">
                <MiniCartItem />
            </div>
            <div className="mini-product-stat">
                <div className="mini-total">
                    <span className="subtotal-text">SUBTOTAL</span>
                    <span className="subtotal-value">$16</span>
                </div>
                <div className="mini-action">
                    <Link to={CHECKOUT} className="mini-link btn--e-brand-b-2">PROCEED TO CHECKOUT</Link>
                    <Link to={CART} className="mini-link btn--e-transparent-secondary-b-2">VIEW CART</Link>
                </div>
            </div>
            {/*====== End - Mini Product Statistics ======*/}
        </div>
    )
}

export default MiniCart;