import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";
import AccountDashPad from "../../../components/AccountDashPad/AccountDashPad";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Header from "../../../components/Header/Header";
import AccountPageWrapper from "../../../components/PageWrapper/AccountPageWrapper/AccountPageWrapper";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";

const EditProfile = (): ReactElement => {
    return (
        <AccountPageWrapper>
            <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white">
                <div className="dash__pad-2">
                    <h1 className="dash__h1 u-s-m-b-14">Edit Profile</h1>
                    <span className="dash__text u-s-m-b-30">
                        Looks like you haven't update your profile
                    </span>
                    <div className="dash__link dash__link--secondary u-s-m-b-30">
                        <a data-modal="modal" data-modal-id="#dash-newsletter">
                            Subscribe Newsletter
                        </a>
                    </div>
                    <Grid container >
                        <Grid item lg={12}>
                            <form className="dash-edit-p">
                                <div className="gl-inline">
                                    <Box mb={3.75}>

                                        <label className="gl-label" htmlFor="reg-fname">
                                            FIRST NAME *
                                        </label>
                                        <input
                                            className="input-text input-text--primary-style"
                                            type="text"
                                            id="reg-fname"
                                            placeholder="John"
                                        />
                                    </Box>
                                    <Box mb={3.75}>
                                        <label className="gl-label" htmlFor="reg-lname">
                                            LAST NAME *
                                        </label>
                                        <input
                                            className="input-text input-text--primary-style"
                                            type="text"
                                            id="reg-lname"
                                            placeholder="Doe"
                                        />
                                    </Box>
                                </div>
                                <div className="gl-inline">
                                    <Box mb={3.75}>
                                        {/*====== Date of Birth Select-Box ======*/}
                                        <span className="gl-label">BIRTHDAY</span>
                                        <div className="gl-dob">
                                            <select className="select-box select-box--primary-style">
                                                <option >Month</option>
                                                <option value="male">January</option>
                                                <option value="male">February</option>
                                                <option value="male">March</option>
                                                <option value="male">April</option>
                                            </select>
                                            <select className="select-box select-box--primary-style">
                                                <option >Day</option>
                                                <option value={"01"}>01</option>
                                                <option value={"02"}>02</option>
                                                <option value={"03"}>03</option>
                                                <option value={"04"}>04</option>
                                            </select>
                                            <select className="select-box select-box--primary-style">
                                                <option >Year</option>
                                                <option value={1991}>1991</option>
                                                <option value={1992}>1992</option>
                                                <option value={1993}>1993</option>
                                                <option value={1994}>1994</option>
                                            </select>
                                        </div>
                                        {/*====== End - Date of Birth Select-Box ======*/}
                                    </Box>
                                    <Box mb={3.75}>

                                        <label className="gl-label" htmlFor="gender">
                                            GENDER
                                        </label>
                                        <select
                                            className="select-box select-box--primary-style u-w-100"
                                            id="gender"
                                        >
                                            <option >Select</option>
                                            <option value="male">Male</option>
                                            <option value="male">Female</option>
                                        </select>
                                    </Box>
                                </div>
                                <div className="gl-inline">
                                    <Box mb={3.75}>
                                        <h2 className="dash__h2 u-s-m-b-8">E-mail</h2>
                                        <span className="dash__text">
                                            johndoe@domain.com
                                        </span>
                                        <div className="dash__link dash__link--secondary">
                                            <a href="#">Change</a>
                                        </div>
                                    </Box>
                                    <Box mb={3.75}>
                                        <h2 className="dash__h2 u-s-m-b-8">Phone</h2>
                                        <span className="dash__text">
                                            Please enter your mobile
                                        </span>
                                        <div className="dash__link dash__link--secondary">
                                            <a href="#">Add</a>
                                        </div>
                                    </Box>
                                </div>
                                <button className="btn btn--e-brand-b-2" type="submit">
                                    SAVE
                                </button>
                            </form>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </AccountPageWrapper>
    )
}

export default EditProfile;