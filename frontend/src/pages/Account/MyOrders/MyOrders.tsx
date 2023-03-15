import { ReactElement } from "react";
import AccountPageWrapper from "../../../components/PageWrapper/AccountPageWrapper/AccountPageWrapper";

const MyOrders = (): ReactElement => {
    return (
        <AccountPageWrapper>
            <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                <div className="dash__pad-2">
                    <h1 className="dash__h1 u-s-m-b-14">My Orders</h1>
                    <span className="dash__text u-s-m-b-30">
                        Here you can see all products that have been delivered.
                    </span>
                    <form className="m-order u-s-m-b-30">
                        <div className="m-order__select-wrapper">
                            <label className="u-s-m-r-8" htmlFor="my-order-sort">
                                Show:
                            </label>
                            <select
                                className="select-box select-box--primary-style"
                                id="my-order-sort"
                            >
                                <option>Last 5 orders</option>
                                <option>Last 15 days</option>
                                <option>Last 30 days</option>
                                <option>Last 6 months</option>
                                <option>Orders placed in 2018</option>
                                <option>All Orders</option>
                            </select>
                        </div>
                    </form>
                    <div className="m-order__list">
                        <div className="m-order__get">
                            <div className="manage-o__header u-s-m-b-30">
                                <div className="dash-l-r">
                                    <div>
                                        <div className="manage-o__text-2 u-c-secondary">
                                            Order #305423126
                                        </div>
                                        <div className="manage-o__text u-c-silver">
                                            Placed on 26 Oct 2016 09:08:37
                                        </div>
                                    </div>
                                    <div>
                                        <div className="dash__link dash__link--brand">
                                            <a href="dash-manage-order.html">MANAGE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="manage-o__description">
                                <div className="description__container">
                                    <div className="description__img-wrap">
                                        <img
                                            className="u-img-fluid"
                                            src="images/product/electronic/product3.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="description-title">
                                        Yellow Wireless Headphone
                                    </div>
                                </div>
                                <div className="description__info-wrap">
                                    <div>
                                        <span className="manage-o__badge badge--processing">
                                            Processing
                                        </span>
                                    </div>
                                    <div>
                                        <span className="manage-o__text-2 u-c-silver">
                                            Quantity:
                                            <span className="manage-o__text-2 u-c-secondary">
                                                1
                                            </span>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="manage-o__text-2 u-c-silver">
                                            Total:
                                            <span className="manage-o__text-2 u-c-secondary">
                                                $16.00
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-order__get">
                            <div className="manage-o__header u-s-m-b-30">
                                <div className="dash-l-r">
                                    <div>
                                        <div className="manage-o__text-2 u-c-secondary">
                                            Order #305423126
                                        </div>
                                        <div className="manage-o__text u-c-silver">
                                            Placed on 26 Oct 2016 09:08:37
                                        </div>
                                    </div>
                                    <div>
                                        <div className="dash__link dash__link--brand">
                                            <a href="dash-manage-order.html">MANAGE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="manage-o__description">
                                <div className="description__container">
                                    <div className="description__img-wrap">
                                        <img
                                            className="u-img-fluid"
                                            src="images/product/women/product8.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="description-title">
                                        New Dress D Nice Elegant
                                    </div>
                                </div>
                                <div className="description__info-wrap">
                                    <div>
                                        <span className="manage-o__badge badge--shipped">
                                            Shipped
                                        </span>
                                    </div>
                                    <div>
                                        <span className="manage-o__text-2 u-c-silver">
                                            Quantity:
                                            <span className="manage-o__text-2 u-c-secondary">
                                                1
                                            </span>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="manage-o__text-2 u-c-silver">
                                            Total:
                                            <span className="manage-o__text-2 u-c-secondary">
                                                $16.00
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-order__get">
                            <div className="manage-o__header u-s-m-b-30">
                                <div className="dash-l-r">
                                    <div>
                                        <div className="manage-o__text-2 u-c-secondary">
                                            Order #305423126
                                        </div>
                                        <div className="manage-o__text u-c-silver">
                                            Placed on 26 Oct 2016 09:08:37
                                        </div>
                                    </div>
                                    <div>
                                        <div className="dash__link dash__link--brand">
                                            <a href="dash-manage-order.html">MANAGE</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="manage-o__description">
                                <div className="description__container">
                                    <div className="description__img-wrap">
                                        <img
                                            className="u-img-fluid"
                                            src="images/product/men/product8.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="description-title">
                                        New Fashion D Nice Elegant
                                    </div>
                                </div>
                                <div className="description__info-wrap">
                                    <div>
                                        <span className="manage-o__badge badge--delivered">
                                            Delivered
                                        </span>
                                    </div>
                                    <div>
                                        <span className="manage-o__text-2 u-c-silver">
                                            Quantity:
                                            <span className="manage-o__text-2 u-c-secondary">
                                                1
                                            </span>
                                        </span>
                                    </div>
                                    <div>
                                        <span className="manage-o__text-2 u-c-silver">
                                            Total:
                                            <span className="manage-o__text-2 u-c-secondary">
                                                $16.00
                                            </span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AccountPageWrapper>

    )
}

export default MyOrders;