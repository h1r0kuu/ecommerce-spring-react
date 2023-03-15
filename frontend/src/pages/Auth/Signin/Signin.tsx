import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Header from "../../../components/Header/Header";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";
import SectionIntro from "../../../components/Section/SectionIntro/SectionIntro";

const Signin = (): ReactElement => {
    return (
        <PageWrapper>
            <Breadcrumbs>
                <Breadcrumb isActive={false} link={"/"} label={"Home"} />
                <Breadcrumb isActive={true} link={"#"} label={"My Account"} />
            </Breadcrumbs>
            <Box pb={7.5}>
                <SectionIntro headerText="CREATE AN ACCOUNT" />
                <div className="section__content">
                    <div className="container">
                        <Grid container className="row--center">
                            <Grid item lg={6} md={8} marginBottom={30}>
                                <div className="l-f-o">
                                    <div className="l-f-o__pad-box">
                                        <h1 className="gl-h1">I'M NEW CUSTOMER</h1>
                                        <span className="gl-text u-s-m-b-30">
                                            By creating an account with our store, you will be able to move
                                            through the checkout process faster, store shipping addresses,
                                            view and track your orders in your account and more.
                                        </span>
                                        <div className="u-s-m-b-15">
                                            <a
                                                className="l-f-o__create-link btn--e-transparent-brand-b-2"
                                                href="signup.html"
                                            >
                                                CREATE AN ACCOUNT
                                            </a>
                                        </div>
                                        <h1 className="gl-h1">SIGNIN</h1>
                                        <span className="gl-text u-s-m-b-30">
                                            If you have an account with us, please log in.
                                        </span>
                                        <form className="l-f-o__form">
                                            <div className="gl-s-api">
                                                <div className="u-s-m-b-15">
                                                    <button
                                                        className="gl-s-api__btn gl-s-api__btn--fb"
                                                        type="button"
                                                    >
                                                        <FontAwesomeIcon icon={faFacebookF} />
                                                        <span>Signin with Facebook</span>
                                                    </button>
                                                </div>
                                                <div className="u-s-m-b-15">
                                                    <button
                                                        className="gl-s-api__btn gl-s-api__btn--gplus"
                                                        type="button"
                                                    >
                                                        <FontAwesomeIcon icon={faGoogle} />
                                                        <span>Signin with Google</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="login-email">
                                                    E-MAIL *
                                                </label>
                                                <input
                                                    className="input-text input-text--primary-style"
                                                    type="text"
                                                    id="login-email"
                                                    placeholder="Enter E-mail"
                                                />
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="login-password">
                                                    PASSWORD *
                                                </label>
                                                <input
                                                    className="input-text input-text--primary-style"
                                                    type="text"
                                                    id="login-password"
                                                    placeholder="Enter Password"
                                                />
                                            </div>
                                            <div className="gl-inline">
                                                <div className="u-s-m-b-30">
                                                    <button
                                                        className="btn btn--e-transparent-brand-b-2"
                                                        type="submit"
                                                    >
                                                        LOGIN
                                                    </button>
                                                </div>
                                                <div className="u-s-m-b-30">
                                                    <a className="gl-link" href="lost-password.html">
                                                        Lost Your Password?
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="u-s-m-b-30">
                                                {/*====== Check Box ======*/}
                                                <div className="check-box">
                                                    <input type="checkbox" id="remember-me" />
                                                    <div className="check-box__state check-box__state--primary">
                                                        <label className="check-box__label" htmlFor="remember-me">
                                                            Remember Me
                                                        </label>
                                                    </div>
                                                </div>
                                                {/*====== End - Check Box ======*/}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </Box>
        </PageWrapper>
    )
}

export default Signin;