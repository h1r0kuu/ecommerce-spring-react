import { ReactElement } from "react";

const OrdersPlacedDash = (): ReactElement => {
    return (
        <li>
            <div className="dash__w-wrap">
                <span className="dash__w-icon dash__w-icon-style-1">
                    <i className="fas fa-cart-arrow-down" />
                </span>
                <span className="dash__w-text">4</span>
                <span className="dash__w-name">Orders Placed</span>
            </div>
        </li>
    )
}

export default OrdersPlacedDash