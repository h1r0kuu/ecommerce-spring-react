import { FormGroup, FormLabel, TextField } from "@mui/material";
import { ReactElement } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Header from "../../components/Header/Header";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const Checkout = (): ReactElement => {
    return (
        <PageWrapper>
            <Breadcrumbs>
                <Breadcrumb isActive={false} link={"/"} label={"Home"} />
                <Breadcrumb isActive={true} link={"#"} label={"My Account"} />
            </Breadcrumbs>
            {/*====== End - Section 1 ======*/}
            {/*====== Section 2 ======*/}
            <div className="u-s-p-b-60">
                {/*====== Section Content ======*/}
                <div className="section__content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div id="checkout-msg-group">
                                    <div className="msg u-s-m-b-30">
                                        <span className="msg__text">
                                            Returning customer?
                                            <a
                                                className="gl-link"
                                                href="#return-customer"
                                                data-toggle="collapse"
                                            >
                                                Click here to login
                                            </a>
                                        </span>
                                        <div
                                            className="collapse"
                                            id="return-customer"
                                            data-parent="#checkout-msg-group"
                                        >
                                            <div className="l-f u-s-m-b-16">
                                                <span className="gl-text u-s-m-b-16">
                                                    If you have an account with us, please log in.
                                                </span>
                                                <form className="l-f__form">
                                                    <div className="gl-inline">
                                                        <div className="u-s-m-b-15">
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
                                                        <div className="u-s-m-b-15">
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
                                                    </div>
                                                    <div className="gl-inline">
                                                        <div className="u-s-m-b-15">
                                                            <button
                                                                className="btn btn--e-transparent-brand-b-2"
                                                                type="submit"
                                                            >
                                                                LOGIN
                                                            </button>
                                                        </div>
                                                        <div className="u-s-m-b-15">
                                                            <a className="gl-link" href="lost-password.html">
                                                                Lost Your Password?
                                                            </a>
                                                        </div>
                                                    </div>
                                                    {/*====== Check Box ======*/}
                                                    <div className="check-box">
                                                        <input type="checkbox" id="remember-me" />
                                                        <div className="check-box__state check-box__state--primary">
                                                            <label
                                                                className="check-box__label"
                                                                htmlFor="remember-me"
                                                            >
                                                                Remember Me
                                                            </label>
                                                        </div>
                                                    </div>
                                                    {/*====== End - Check Box ======*/}
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="msg">
                                        <span className="msg__text">
                                            Have a coupon?
                                            <a
                                                className="gl-link"
                                                href="#have-coupon"
                                                data-toggle="collapse"
                                            >
                                                Click Here to enter your code
                                            </a>
                                        </span>
                                        <div
                                            className="collapse"
                                            id="have-coupon"
                                            data-parent="#checkout-msg-group"
                                        >
                                            <div className="c-f u-s-m-b-16">
                                                <span className="gl-text u-s-m-b-16">
                                                    Enter your coupon code if you have one.
                                                </span>
                                                <form className="c-f__form">
                                                    <div className="u-s-m-b-16">
                                                        <div className="u-s-m-b-15">
                                                            <label htmlFor="coupon" />
                                                            <input
                                                                className="input-text input-text--primary-style"
                                                                type="text"
                                                                id="coupon"
                                                                placeholder="Coupon Code"
                                                            />
                                                        </div>
                                                        <div className="u-s-m-b-15">
                                                            <button
                                                                className="btn btn--e-transparent-brand-b-2"
                                                                type="submit"
                                                            >
                                                                APPLY
                                                            </button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Section Content ======*/}
            </div>
            {/*====== End - Section 2 ======*/}
            {/*====== Section 3 ======*/}
            <div className="u-s-p-b-60">
                {/*====== Section Content ======*/}
                <div className="section__content">
                    <div className="container">
                        <div className="checkout-f">
                            <div className="row">
                                <div className="col-lg-6">
                                    <h1 className="checkout-f__h1">DELIVERY INFORMATION</h1>
                                    <form className="checkout-f__delivery">
                                        <div className="u-s-m-b-30">
                                            <div className="u-s-m-b-15">
                                                {/*====== Check Box ======*/}
                                                <div className="check-box">
                                                    <input type="checkbox" id="get-address" />
                                                    <div className="check-box__state check-box__state--primary">
                                                        <label
                                                            className="check-box__label"
                                                            htmlFor="get-address"
                                                        >
                                                            Use default shipping and billing address from account
                                                        </label>
                                                    </div>
                                                </div>
                                                {/*====== End - Check Box ======*/}
                                            </div>
                                            {/*====== First Name, Last Name ======*/}
                                            <div className="gl-inline">
                                                <div className="u-s-m-b-15">
                                                    <label className="gl-label" htmlFor="billing-fname">
                                                        FIRST NAME *
                                                    </label>
                                                    <input
                                                        className="input-text input-text--primary-style"
                                                        type="text"
                                                        id="billing-fname"
                                                        data-bill=""
                                                    />
                                                </div>
                                                <div className="u-s-m-b-15">
                                                    <label className="gl-label" htmlFor="billing-lname">
                                                        LAST NAME *
                                                    </label>
                                                    <input
                                                        className="input-text input-text--primary-style"
                                                        type="text"
                                                        id="billing-lname"
                                                        data-bill=""
                                                    />
                                                </div>
                                            </div>
                                            {/*====== End - First Name, Last Name ======*/}
                                            {/*====== E-MAIL ======*/}
                                            <div className="u-s-m-b-15">
                                                <label className="gl-label" htmlFor="billing-email">
                                                    E-MAIL *
                                                </label>
                                                <input
                                                    className="input-text input-text--primary-style"
                                                    type="text"
                                                    id="billing-email"
                                                    data-bill=""
                                                />
                                            </div>
                                            {/*====== End - E-MAIL ======*/}
                                            {/*====== PHONE ======*/}
                                            <div className="u-s-m-b-15">
                                                <label className="gl-label" htmlFor="billing-phone">
                                                    PHONE *
                                                </label>
                                                <input
                                                    className="input-text input-text--primary-style"
                                                    type="text"
                                                    id="billing-phone"
                                                    data-bill=""
                                                />
                                            </div>
                                            {/*====== End - PHONE ======*/}
                                            {/*====== Street Address ======*/}
                                            <div className="u-s-m-b-15">
                                                <label className="gl-label" htmlFor="billing-street">
                                                    STREET ADDRESS *
                                                </label>
                                                <input
                                                    className="input-text input-text--primary-style"
                                                    type="text"
                                                    id="billing-street"
                                                    placeholder="House name and street name"
                                                    data-bill=""
                                                />
                                            </div>
                                            <div className="u-s-m-b-15">
                                                <label htmlFor="billing-street-optional" />
                                                <input
                                                    className="input-text input-text--primary-style"
                                                    type="text"
                                                    id="billing-street-optional"
                                                    placeholder="Apartment, suite unit etc. (optional)"
                                                    data-bill=""
                                                />
                                            </div>
                                            {/*====== End - Street Address ======*/}
                                            {/*====== Country ======*/}
                                            <div className="u-s-m-b-15">
                                                {/*====== Select Box ======*/}
                                                <label className="gl-label" htmlFor="billing-country">
                                                    COUNTRY *
                                                </label>
                                                <select
                                                    className="select-box select-box--primary-style"
                                                    id="billing-country"
                                                    data-bill=""
                                                >
                                                    <option value="">
                                                        Choose Country
                                                    </option>
                                                    <option value="uae">United Arab Emirate (UAE)</option>
                                                    <option value="uk">United Kingdom (UK)</option>
                                                    <option value="us">United States (US)</option>
                                                </select>
                                                {/*====== End - Select Box ======*/}
                                            </div>
                                            {/*====== End - Country ======*/}
                                            {/*====== Town / City ======*/}
                                            <div className="u-s-m-b-15">
                                                <label className="gl-label" htmlFor="billing-town-city">
                                                    TOWN/CITY *
                                                </label>
                                                <input
                                                    className="input-text input-text--primary-style"
                                                    type="text"
                                                    id="billing-town-city"
                                                    data-bill=""
                                                />
                                            </div>
                                            {/*====== End - Town / City ======*/}
                                            {/*====== STATE/PROVINCE ======*/}
                                            <div className="u-s-m-b-15">
                                                {/*====== Select Box ======*/}
                                                <label className="gl-label" htmlFor="billing-state">
                                                    STATE/PROVINCE *
                                                </label>
                                                <select
                                                    className="select-box select-box--primary-style"
                                                    id="billing-state"
                                                    data-bill=""
                                                >
                                                    <option value="">
                                                        Choose State/Province
                                                    </option>
                                                    <option value="al">Alabama</option>
                                                    <option value="al">Alaska</option>
                                                    <option value="ny">New York</option>
                                                </select>
                                                {/*====== End - Select Box ======*/}
                                            </div>
                                            {/*====== End - STATE/PROVINCE ======*/}
                                            {/*====== ZIP/POSTAL ======*/}
                                            <div className="u-s-m-b-15">
                                                <label className="gl-label" htmlFor="billing-zip">
                                                    ZIP/POSTAL CODE *
                                                </label>
                                                <input
                                                    className="input-text input-text--primary-style"
                                                    type="text"
                                                    id="billing-zip"
                                                    placeholder="Zip/Postal Code"
                                                    data-bill=""
                                                />
                                            </div>
                                            {/*====== End - ZIP/POSTAL ======*/}
                                            <div className="u-s-m-b-10">
                                                {/*====== Check Box ======*/}
                                                <div className="check-box">
                                                    <input
                                                        type="checkbox"
                                                        id="make-default-address"
                                                        data-bill=""
                                                    />
                                                    <div className="check-box__state check-box__state--primary">
                                                        <label
                                                            className="check-box__label"
                                                            htmlFor="make-default-address"
                                                        >
                                                            Make default shipping and billing address
                                                        </label>
                                                    </div>
                                                </div>
                                                {/*====== End - Check Box ======*/}
                                            </div>
                                            <div className="u-s-m-b-10">
                                                <a
                                                    className="gl-link"
                                                    href="#create-account"
                                                    data-toggle="collapse"
                                                >
                                                    Want to create a new account?
                                                </a>
                                            </div>
                                            <div className="collapse u-s-m-b-15" id="create-account">
                                                <span className="gl-text u-s-m-b-15">
                                                    Create an account by entering the information below. If
                                                    you are a returning customer please login at the top of
                                                    the page.
                                                </span>
                                                <div>
                                                    <label className="gl-label" htmlFor="reg-password">
                                                        Account Password *
                                                    </label>
                                                    <input
                                                        className="input-text input-text--primary-style"
                                                        type="text"
                                                        data-bill=""
                                                        id="reg-password"
                                                    />
                                                </div>
                                            </div>
                                            <div className="u-s-m-b-10">
                                                <label className="gl-label" htmlFor="order-note">
                                                    ORDER NOTE
                                                </label>
                                                <textarea
                                                    className="text-area text-area--primary-style"
                                                    id="order-note"
                                                    defaultValue={""}
                                                />
                                            </div>
                                            <div>
                                                <button
                                                    className="btn btn--e-transparent-brand-b-2"
                                                    type="submit"
                                                >
                                                    SAVE
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-6">
                                    <h1 className="checkout-f__h1">ORDER SUMMARY</h1>
                                    {/*====== Order Summary ======*/}
                                    <div className="o-summary">
                                        <div className="o-summary__section u-s-m-b-30">
                                            <div className="o-summary__item-wrap gl-scroll">
                                                <div className="o-card">
                                                    <div className="o-card__flex">
                                                        <div className="o-card__img-wrap">
                                                            <img
                                                                className="u-img-fluid"
                                                                src="images/product/electronic/product3.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="o-card__info-wrap">
                                                            <span className="o-card__name">
                                                                <a href="product-detail.html">
                                                                    Yellow Wireless Headphone
                                                                </a>
                                                            </span>
                                                            <span className="o-card__quantity">Quantity x 1</span>
                                                            <span className="o-card__price">$150.00</span>
                                                        </div>
                                                    </div>
                                                    <a className="o-card__del far fa-trash-alt" />
                                                </div>
                                                <div className="o-card">
                                                    <div className="o-card__flex">
                                                        <div className="o-card__img-wrap">
                                                            <img
                                                                className="u-img-fluid"
                                                                src="images/product/electronic/product18.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="o-card__info-wrap">
                                                            <span className="o-card__name">
                                                                <a href="product-detail.html">
                                                                    Nikon DSLR Camera 4k
                                                                </a>
                                                            </span>
                                                            <span className="o-card__quantity">Quantity x 1</span>
                                                            <span className="o-card__price">$150.00</span>
                                                        </div>
                                                    </div>
                                                    <a className="o-card__del far fa-trash-alt" />
                                                </div>
                                                <div className="o-card">
                                                    <div className="o-card__flex">
                                                        <div className="o-card__img-wrap">
                                                            <img
                                                                className="u-img-fluid"
                                                                src="images/product/women/product8.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="o-card__info-wrap">
                                                            <span className="o-card__name">
                                                                <a href="product-detail.html">
                                                                    New Dress D Nice Elegant
                                                                </a>
                                                            </span>
                                                            <span className="o-card__quantity">Quantity x 1</span>
                                                            <span className="o-card__price">$150.00</span>
                                                        </div>
                                                    </div>
                                                    <a className="o-card__del far fa-trash-alt" />
                                                </div>
                                                <div className="o-card">
                                                    <div className="o-card__flex">
                                                        <div className="o-card__img-wrap">
                                                            <img
                                                                className="u-img-fluid"
                                                                src="images/product/men/product8.jpg"
                                                                alt=""
                                                            />
                                                        </div>
                                                        <div className="o-card__info-wrap">
                                                            <span className="o-card__name">
                                                                <a href="product-detail.html">
                                                                    New Fashion D Nice Elegant
                                                                </a>
                                                            </span>
                                                            <span className="o-card__quantity">Quantity x 1</span>
                                                            <span className="o-card__price">$150.00</span>
                                                        </div>
                                                    </div>
                                                    <a className="o-card__del far fa-trash-alt" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="o-summary__section u-s-m-b-30">
                                            <div className="o-summary__box">
                                                <h1 className="checkout-f__h1">SHIPPING &amp; BILLING</h1>
                                                <div className="ship-b">
                                                    <span className="ship-b__text">Ship to:</span>
                                                    <div className="ship-b__box u-s-m-b-10">
                                                        <p className="ship-b__p">
                                                            4247 Ashford Drive Virginia VA-20006 USA (+0)
                                                            900901904
                                                        </p>
                                                        <a
                                                            className="ship-b__edit btn--e-transparent-platinum-b-2"
                                                            data-modal="modal"
                                                            data-modal-id="#edit-ship-address"
                                                        >
                                                            Edit
                                                        </a>
                                                    </div>
                                                    <div className="ship-b__box">
                                                        <span className="ship-b__text">
                                                            Bill to default billing address
                                                        </span>
                                                        <a
                                                            className="ship-b__edit btn--e-transparent-platinum-b-2"
                                                            data-modal="modal"
                                                            data-modal-id="#edit-ship-address"
                                                        >
                                                            Edit
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="o-summary__section u-s-m-b-30">
                                            <div className="o-summary__box">
                                                <table className="o-summary__table">
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
                                            </div>
                                        </div>
                                        <div className="o-summary__section u-s-m-b-30">
                                            <div className="o-summary__box">
                                                <h1 className="checkout-f__h1">PAYMENT INFORMATION</h1>
                                                <form className="checkout-f__payment">
                                                    <div className="u-s-m-b-10">
                                                        {/*====== Radio Box ======*/}
                                                        <div className="radio-box">
                                                            <input
                                                                type="radio"
                                                                id="cash-on-delivery"
                                                                name="payment"
                                                            />
                                                            <div className="radio-box__state radio-box__state--primary">
                                                                <label
                                                                    className="radio-box__label"
                                                                    htmlFor="cash-on-delivery"
                                                                >
                                                                    Cash on Delivery
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {/*====== End - Radio Box ======*/}
                                                        <span className="gl-text u-s-m-t-6">
                                                            Pay Upon Cash on delivery. (This service is only
                                                            available for some countries)
                                                        </span>
                                                    </div>
                                                    <div className="u-s-m-b-10">
                                                        {/*====== Radio Box ======*/}
                                                        <div className="radio-box">
                                                            <input
                                                                type="radio"
                                                                id="direct-bank-transfer"
                                                                name="payment"
                                                            />
                                                            <div className="radio-box__state radio-box__state--primary">
                                                                <label
                                                                    className="radio-box__label"
                                                                    htmlFor="direct-bank-transfer"
                                                                >
                                                                    Direct Bank Transfer
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {/*====== End - Radio Box ======*/}
                                                        <span className="gl-text u-s-m-t-6">
                                                            Make your payment directly into our bank account.
                                                            Please use your Order ID as the payment reference.
                                                            Your order will not be shipped until the funds have
                                                            cleared in our account.
                                                        </span>
                                                    </div>
                                                    <div className="u-s-m-b-10">
                                                        {/*====== Radio Box ======*/}
                                                        <div className="radio-box">
                                                            <input
                                                                type="radio"
                                                                id="pay-with-check"
                                                                name="payment"
                                                            />
                                                            <div className="radio-box__state radio-box__state--primary">
                                                                <label
                                                                    className="radio-box__label"
                                                                    htmlFor="pay-with-check"
                                                                >
                                                                    Pay With Check
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {/*====== End - Radio Box ======*/}
                                                        <span className="gl-text u-s-m-t-6">
                                                            Please send a check to Store Name, Store Street, Store
                                                            Town, Store State / County, Store Postcode.
                                                        </span>
                                                    </div>
                                                    <div className="u-s-m-b-10">
                                                        {/*====== Radio Box ======*/}
                                                        <div className="radio-box">
                                                            <input
                                                                type="radio"
                                                                id="pay-with-card"
                                                                name="payment"
                                                            />
                                                            <div className="radio-box__state radio-box__state--primary">
                                                                <label
                                                                    className="radio-box__label"
                                                                    htmlFor="pay-with-card"
                                                                >
                                                                    Pay With Credit / Debit Card
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {/*====== End - Radio Box ======*/}
                                                        <span className="gl-text u-s-m-t-6">
                                                            International Credit Cards must be eligible for use
                                                            within the United States.
                                                        </span>
                                                    </div>
                                                    <div className="u-s-m-b-10">
                                                        {/*====== Radio Box ======*/}
                                                        <div className="radio-box">
                                                            <input type="radio" id="pay-pal" name="payment" />
                                                            <div className="radio-box__state radio-box__state--primary">
                                                                <label
                                                                    className="radio-box__label"
                                                                    htmlFor="pay-pal"
                                                                >
                                                                    Pay Pal
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {/*====== End - Radio Box ======*/}
                                                        <span className="gl-text u-s-m-t-6">
                                                            When you click "Place Order" below we'll take you to
                                                            Paypal's site to set up your billing information.
                                                        </span>
                                                    </div>
                                                    <div className="u-s-m-b-15">
                                                        {/*====== Check Box ======*/}
                                                        <div className="check-box">
                                                            <input type="checkbox" id="term-and-condition" />
                                                            <div className="check-box__state check-box__state--primary">
                                                                <label
                                                                    className="check-box__label"
                                                                    htmlFor="term-and-condition"
                                                                >
                                                                    I consent to the
                                                                </label>
                                                            </div>
                                                        </div>
                                                        {/*====== End - Check Box ======*/}
                                                        <a className="gl-link">Terms of Service.</a>
                                                    </div>
                                                    <div>
                                                        <button className="btn btn--e-brand-b-2" type="submit">
                                                            PLACE ORDER
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/*====== End - Order Summary ======*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Section Content ======*/}
            </div>
            {/*====== End - Section 3 ======*/}
        </PageWrapper>

    )
}

export default Checkout;