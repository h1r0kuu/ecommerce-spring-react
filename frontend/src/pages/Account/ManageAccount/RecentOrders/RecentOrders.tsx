import { ReactElement } from "react";
import RecentOrderItem from "./RecentOrderItem/RecentOrderItem";

const RecentOrders = (): ReactElement => {
    return (
        <div className="dash__box dash__box--shadow dash__box--bg-white dash__box--radius">
            <h2 className="dash__h2 u-s-p-xy-20">RECENT ORDERS</h2>
            <div className="dash__table-wrap gl-scroll">
                <table className="dash__table">
                    <thead>
                        <tr>
                            <th>Order #</th>
                            <th>Placed On</th>
                            <th>Items</th>
                            <th>Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <RecentOrderItem />
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default RecentOrders;