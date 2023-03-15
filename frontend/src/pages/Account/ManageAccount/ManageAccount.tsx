import { Grid } from "@mui/material";
import { ReactElement } from "react";
import AccountPageWrapper from "../../../components/PageWrapper/AccountPageWrapper/AccountPageWrapper";
import RecentOrders from "./RecentOrders/RecentOrders";

const ManageAccount = (): ReactElement => {

    return (
        <AccountPageWrapper>
            <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                <div className="dash__pad-2">
                    <h1 className="dash__h1 u-s-m-b-14">Manage My Account</h1>
                    <span className="dash__text u-s-m-b-30">
                        From your My Account Dashboard you have the ability to view
                        a snapshot of your recent account activity and update your
                        account information. Select a link below to view or edit
                        information.
                    </span>
                    <Grid container>
                        <Grid item lg={4} mb={3.75}>
                            <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                                <div className="dash__pad-3">
                                    <h2 className="dash__h2 u-s-m-b-8">
                                        PERSONAL PROFILE
                                    </h2>
                                    <div className="dash__link dash__link--secondary u-s-m-b-8">
                                        <a href="dash-edit-profile.html">Edit</a>
                                    </div>
                                    <span className="dash__text">John Doe</span>
                                    <span className="dash__text">johndoe@domain.com</span>
                                    <div className="dash__link dash__link--secondary u-s-m-t-8">
                                        <a
                                            data-modal="modal"
                                            data-modal-id="#dash-newsletter"
                                        >
                                            Subscribe Newsletter
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={4} mb={3.75}>
                            <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                                <div className="dash__pad-3">
                                    <h2 className="dash__h2 u-s-m-b-8">ADDRESS BOOK</h2>
                                    <span className="dash__text-2 u-s-m-b-8">
                                        Default Shipping Address
                                    </span>
                                    <div className="dash__link dash__link--secondary u-s-m-b-8">
                                        <a href="dash-address-book.html">Edit</a>
                                    </div>
                                    <span className="dash__text">
                                        4247 Ashford Drive Virginia - VA-20006 - USA
                                    </span>
                                    <span className="dash__text">(+0) 900901904</span>
                                </div>
                            </div>
                        </Grid>
                        <Grid item lg={4} mb={3.75}>
                            <div className="dash__box dash__box--bg-grey dash__box--shadow-2 u-h-100">
                                <div className="dash__pad-3">
                                    <h2 className="dash__h2 u-s-m-b-8">
                                        BILLING ADDRESS
                                    </h2>
                                    <span className="dash__text-2 u-s-m-b-8">
                                        Default Billing Address
                                    </span>
                                    <span className="dash__text">
                                        4247 Ashford Drive Virginia - VA-20006 - USA
                                    </span>
                                    <span className="dash__text">(+0) 900901904</span>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <RecentOrders />
        </AccountPageWrapper>
    )
}

export default ManageAccount;