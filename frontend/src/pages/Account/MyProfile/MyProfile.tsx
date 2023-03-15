import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";
import AccountDashPad from "../../../components/AccountDashPad/AccountDashPad";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Header from "../../../components/Header/Header";
import AccountPageWrapper from "../../../components/PageWrapper/AccountPageWrapper/AccountPageWrapper";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";

const MyProfile = (): ReactElement => {
    return (
        <AccountPageWrapper>
            <div className="dash__box dash__box--shadow dash__box--radius dash__box--bg-white u-s-m-b-30">
                <div className="dash__pad-2">
                    <h1 className="dash__h1 u-s-m-b-14">My Profile</h1>
                    <span className="dash__text u-s-m-b-30">
                        Look all your info, you could customize your profile.
                    </span>
                    <Grid container>
                        <Grid item lg={4} mb={3.75}>
                            <h2 className="dash__h2 u-s-m-b-8">Full Name</h2>
                            <span className="dash__text">John Doe</span>
                        </Grid>
                        <Grid item lg={4} mb={3.75}>
                            <h2 className="dash__h2 u-s-m-b-8">E-mail</h2>
                            <span className="dash__text">johndoe@domain.com</span>
                            <div className="dash__link dash__link--secondary">
                                <a href="#">Change</a>
                            </div>
                        </Grid>
                        <Grid item lg={4} mb={3.75}>
                            <h2 className="dash__h2 u-s-m-b-8">Phone</h2>
                            <span className="dash__text">
                                Please enter your mobile
                            </span>
                            <div className="dash__link dash__link--secondary">
                                <a href="#">Add</a>
                            </div>
                        </Grid>
                        <Grid item lg={4} mb={3.75}>
                            <h2 className="dash__h2 u-s-m-b-8">Birthday</h2>
                            <span className="dash__text">1991-02-02</span>
                        </Grid>
                        <Grid item lg={4} mb={3.75}>
                            <h2 className="dash__h2 u-s-m-b-8">Gender</h2>
                            <span className="dash__text">Male</span>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item lg={12}>
                            <div className="dash__link dash__link--secondary u-s-m-b-30">
                                <a data-modal="modal" data-modal-id="#dash-newsletter">
                                    Subscribe Newsletter
                                </a>
                            </div>
                            <Box mb={2}>
                                <a
                                    className="dash__custom-link btn--e-transparent-brand-b-2"
                                    href="dash-edit-profile.html"
                                >
                                    Edit Profile
                                </a>
                            </Box>
                            <div>
                                <a
                                    className="dash__custom-link btn--e-brand-b-2"
                                    href="#"
                                >
                                    Change Password
                                </a>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </AccountPageWrapper>
    )
}

export default MyProfile;