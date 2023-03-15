import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Header from "../../../components/Header/Header";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";
import Section from "../../../components/Section/Section";
import SectionIntro from "../../../components/Section/SectionIntro/SectionIntro";

const ForgotPassword = (): ReactElement => {
    return (
        <PageWrapper>

            <Breadcrumbs>
                <Breadcrumb isActive={false} link={"/"} label={"Home"} />
                <Breadcrumb isActive={true} link={"#"} label={"My Account"} />
            </Breadcrumbs>
            <Section headerText="FORGOT_PASSWORD" center>
                <Grid item lg={6} md={8} marginBottom={3.75}>
                    <div className="l-f-o">
                        <div className="l-f-o__pad-box">
                            <h1 className="gl-h1">PASSWORD RESET</h1>
                            <span className="gl-text u-s-m-b-30">
                                Enter your email or username below and we will send you a link
                                to reset your password.
                            </span>
                            <form className="l-f-o__form">
                                <div className="u-s-m-b-30">
                                    <label className="gl-label" htmlFor="reset-email">
                                        E-MAIL *
                                    </label>
                                    <input
                                        className="input-text input-text--primary-style"
                                        type="text"
                                        id="reset-email"
                                        placeholder="Enter E-mail"
                                    />
                                </div>
                                <div className="u-s-m-b-30">
                                    <button
                                        className="btn btn--e-transparent-brand-b-2"
                                        type="submit"
                                    >
                                        SUBMIT
                                    </button>
                                </div>
                                <div className="u-s-m-b-30">
                                    <a className="gl-link" href="signin.html">
                                        Back to Login
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </Grid>
            </Section>

            <Box pb={7.5}>
                <SectionIntro headerText={"FORGOT PASSWORD?"} />
                <div className="section__content">
                    <div className="container">
                        <Grid container className="row--center">

                        </Grid>
                    </div>
                </div>
            </Box>
        </PageWrapper >
    )
}

export default ForgotPassword;