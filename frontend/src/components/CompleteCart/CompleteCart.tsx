import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";
import Section from "../Section/Section";
// col-lg-12 col-md-12 col-sm-12 u-s-m-b-30
const CompleteCart = (): ReactElement => {
    return (
        <Section>
            <Grid item lg={12} md={12} sm={12} mb={3.75}>
                <form className="f-cart">
                    <Grid container>
                        <Grid item lg={4} md={6} mb={3.75}>
                            <div className="f-cart__pad-box">
                                <h1 className="gl-h1">ESTIMATE SHIPPING AND TAXES</h1>
                                <span className="gl-text u-s-m-b-30">
                                    Enter your destination to get a shipping estimate.
                                </span>
                                <Box mb={3.75}>
                                    {/*====== Select Box ======*/}
                                    <label className="gl-label" htmlFor="shipping-country">
                                        COUNTRY *
                                    </label>
                                    <select
                                        className="select-box select-box--primary-style"
                                        id="shipping-country"
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
                                    <label className="gl-label" htmlFor="shipping-state">
                                        STATE/PROVINCE *
                                    </label>
                                    <select
                                        className="select-box select-box--primary-style"
                                        id="shipping-state"
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
                                <Box mb={3.75}>
                                    <label className="gl-label" htmlFor="shipping-zip">
                                        ZIP/POSTAL CODE *
                                    </label>
                                    <input
                                        className="input-text input-text--primary-style"
                                        type="text"
                                        id="shipping-zip"
                                        placeholder="Zip/Postal Code"
                                    />
                                </Box>
                                <Box mb={3.75}>
                                    <a
                                        className="f-cart__ship-link btn--e-transparent-brand-b-2"
                                        href="cart.html"
                                    >
                                        CALCULATE SHIPPING
                                    </a>
                                </Box>
                                <span className="gl-text">
                                    Note: There are some countries where free shipping is
                                    available otherwise our flat rate charges or country
                                    delivery charges will be apply.
                                </span>
                            </div>
                        </Grid>
                        <Grid item lg={4} md={6} mb={3.75}>
                            <div className="f-cart__pad-box">
                                <h1 className="gl-h1">NOTE</h1>
                                <span className="gl-text u-s-m-b-30">
                                    Add Special Note About Your Product
                                </span>
                                <div>
                                    <label htmlFor="f-cart-note" />
                                    <textarea
                                        className="text-area text-area--primary-style"
                                        id="f-cart-note"
                                        defaultValue={""}
                                    />
                                </div>
                            </div>

                        </Grid>
                        <Grid item lg={4} md={6} mb={3.75}>
                            <div className="f-cart__pad-box">
                                <Box mb={3.75}>
                                    <table className="f-cart__table">
                                        <tbody>
                                            <tr>
                                                <td>SHIPPING</td>
                                                <td>$4.00</td>
                                            </tr>
                                            <tr>
                                                <td>TAX</td>
                                                <td>$0.00</td>
                                            </tr>
                                            <tr>
                                                <td>SUBTOTAL</td>
                                                <td>$379.00</td>
                                            </tr>
                                            <tr>
                                                <td>GRAND TOTAL</td>
                                                <td>$379.00</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </Box>
                                <div>
                                    <button className="btn btn--e-brand-b-2" type="submit">
                                        PROCEED TO CHECKOUT
                                    </button>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Section>
    )
}

export default CompleteCart;