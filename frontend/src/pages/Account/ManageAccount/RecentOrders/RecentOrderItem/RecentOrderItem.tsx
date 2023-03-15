import { ReactElement } from "react";

const RecentOrderItem = (): ReactElement => {
    return (
        <tr>
            <td>3054231326</td>
            <td>26/13/2016</td>
            <td>
                <div className="dash__table-img-wrap">
                    <img
                        className="u-img-fluid"
                        src="images/product/electronic/product3.jpg"
                        alt=""
                    />
                </div>
            </td>
            <td>
                <div className="dash__table-total">
                    <span>$126.00</span>
                    <div className="dash__link dash__link--brand">
                        <a href="dash-manage-order.html">MANAGE</a>
                    </div>
                </div>
            </td>
        </tr>
    )
}

export default RecentOrderItem;