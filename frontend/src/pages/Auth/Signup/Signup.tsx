import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { ReactElement } from "react";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";
import SectionIntro from "../../../components/Section/SectionIntro/SectionIntro";

const Signup = (): ReactElement => {
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
                                        <h1 className="gl-h1">PERSONAL INFORMATION</h1>
                                        <form className="l-f-o__form">
                                            <div className="gl-s-api">
                                                <div className="u-s-m-b-15">
                                                    <button
                                                        className="gl-s-api__btn gl-s-api__btn--fb"
                                                        type="button"
                                                    >
                                                        <FontAwesomeIcon icon={faFacebookF} />
                                                        <span>Signup with Facebook</span>
                                                    </button>
                                                </div>
                                                <div className="u-s-m-b-30">
                                                    <button
                                                        className="gl-s-api__btn gl-s-api__btn--gplus"
                                                        type="button"
                                                    >
                                                        <FontAwesomeIcon icon={faGoogle} />
                                                        <span>Signup with Google</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="reg-fname">
                                                    FIRST NAME *
                                                </label>
                                                <input
                                                    className="input-text input-text--primary-style"
                                                    type="text"
                                                    id="reg-fname"
                                                    placeholder="First Name"
                                                />
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="reg-lname">
                                                    LAST NAME *
                                                </label>
                                                <input
                                                    className="input-text input-text--primary-style"
                                                    type="text"
                                                    id="reg-lname"
                                                    placeholder="Last Name"
                                                />
                                            </div>
                                            <div className="gl-inline">
                                                <div className="u-s-m-b-30">
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
                                                </div>
                                                <div className="u-s-m-b-30">
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
                                                </div>
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="reg-email">
                                                    E-MAIL *
                                                </label>
                                                <input
                                                    className="input-text input-text--primary-style"
                                                    type="text"
                                                    id="reg-email"
                                                    placeholder="Enter E-mail"
                                                />
                                            </div>
                                            <div className="u-s-m-b-30">
                                                <label className="gl-label" htmlFor="reg-password">
                                                    PASSWORD *
                                                </label>
                                                <input
                                                    className="input-text input-text--primary-style"
                                                    type="text"
                                                    id="reg-password"
                                                    placeholder="Enter Password"
                                                />
                                            </div>
                                            <div className="u-s-m-b-15">
                                                <button
                                                    className="btn btn--e-transparent-brand-b-2"
                                                    type="submit"
                                                >
                                                    CREATE
                                                </button>
                                            </div>
                                            <a className="gl-link" href="#">
                                                Return to Store
                                            </a>
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

export default Signup;