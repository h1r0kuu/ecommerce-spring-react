import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";
import AccountDashPad from "../../../../components/AccountDashPad/AccountDashPad";
import Breadcrumb from "../../../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../../../components/Breadcrumbs/Breadcrumbs";
import Header from "../../../../components/Header/Header";
import AccountPageWrapper from "../../../../components/PageWrapper/AccountPageWrapper/AccountPageWrapper";
import PageWrapper from "../../../../components/PageWrapper/PageWrapper";

const EditAddressBook = (): ReactElement => {
    return (
        <AccountPageWrapper>
            <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                <div className="dash__pad-2">
                    <h1 className="dash__h1 u-s-m-b-14">Edit Address</h1>
                    <span className="dash__text u-s-m-b-30">
                        We need an address where we could deliver products.
                    </span>
                    <form className="dash-address-manipulation">
                        <div className="gl-inline">
                            <Box mb={3.75}>

                                <label className="gl-label" htmlFor="address-fname">
                                    FIRST NAME *
                                </label>
                                <input
                                    className="input-text input-text--primary-style"
                                    type="text"
                                    id="address-fname"
                                    placeholder="John Doe"
                                />
                            </Box>
                            <Box mb={3.75}>

                                <label className="gl-label" htmlFor="address-lname">
                                    LAST NAME *
                                </label>
                                <input
                                    className="input-text input-text--primary-style"
                                    type="text"
                                    id="address-lname"
                                    placeholder="Doe"
                                />
                            </Box>
                        </div>
                        <div className="gl-inline">
                            <Box mb={3.75}>

                                <label className="gl-label" htmlFor="address-phone">
                                    PHONE *
                                </label>
                                <input
                                    className="input-text input-text--primary-style"
                                    type="text"
                                    id="address-phone"
                                    placeholder="(+0) 900901904"
                                />
                            </Box>
                            <Box mb={3.75}>

                                <label className="gl-label" htmlFor="address-street">
                                    STREET ADDRESS *
                                </label>
                                <input
                                    className="input-text input-text--primary-style"
                                    type="text"
                                    id="address-street"
                                    placeholder="4247 Ashford Drive Virginia"
                                />
                            </Box>
                        </div>
                        <div className="gl-inline">
                            <Box mb={3.75}>

                                {/*====== Select Box ======*/}
                                <label className="gl-label" htmlFor="address-country">
                                    COUNTRY *
                                </label>
                                <select
                                    className="select-box select-box--primary-style"
                                    id="address-country"
                                >
                                    <option value="">
                                        Choose Country
                                    </option>
                                    <option value="uae">United Arab Emirate (UAE)</option>
                                    <option value="uk">United Kingdom (UK)</option>
                                    <option value="us">United States (US)</option>
                                </select>
                                {/*====== End - Select Box ======*/}
                            </Box>
                            <Box mb={3.75}>

                                {/*====== Select Box ======*/}
                                <label className="gl-label" htmlFor="address-state">
                                    STATE/PROVINCE *
                                </label>
                                <select
                                    className="select-box select-box--primary-style"
                                    id="address-state"
                                >
                                    <option value="">
                                        Choose State/Province
                                    </option>
                                    <option value="al">Alabama</option>
                                    <option value="al">Alaska</option>
                                    <option value="ny">New York</option>
                                </select>
                                {/*====== End - Select Box ======*/}
                            </Box>
                        </div>
                        <div className="gl-inline">
                            <Box mb={3.75}>

                                <label className="gl-label" htmlFor="address-city">
                                    TOWN/CITY *
                                </label>
                                <input
                                    className="input-text input-text--primary-style"
                                    type="text"
                                    id="address-city"
                                />
                            </Box>
                            <Box mb={3.75}>

                                <label className="gl-label" htmlFor="address-street">
                                    ZIP/POSTAL CODE *
                                </label>
                                <input
                                    className="input-text input-text--primary-style"
                                    type="text"
                                    id="address-postal"
                                />
                            </Box>
                        </div>
                        <button className="btn btn--e-brand-b-2" type="submit">
                            SAVE
                        </button>
                    </form>
                </div>
            </div>
        </AccountPageWrapper>
    )
}

export default EditAddressBook;