import { ReactElement } from "react"
import CancelOrdersDash from "./CancelOrdersDash/CancelOrdersDash"
import OrdersPlacedDash from "./OrdersPlacedDash/OrdersPlacedDash"
import WishlistDash from "./WishlistDash/WishlistDash"

const OrdersDashPad = (): ReactElement => {
    return (
        <div className="dash__box dash__box--bg-white dash__box--shadow dash__box--w">
            <div className="dash__pad-1">
                <ul className="dash__w-list">
                    <OrdersPlacedDash />
                    <CancelOrdersDash />
                    <WishlistDash />
                </ul>
            </div>
        </div>
    )
}

export default OrdersDashPad