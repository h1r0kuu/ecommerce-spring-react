import { ReactElement } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import CompleteCart from "../../../components/CompleteCart/CompleteCart";
import Header from "../../../components/Header/Header";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";
import ShoppingCart from "../../../components/ShoppingCart/ShoppingCart";
import { CHECKOUT } from "../../../utils/pathConstants";

const Cart = (): ReactElement => {
    return (
        <PageWrapper>
            <Breadcrumbs>
                <Breadcrumb isActive={false} link={"/"} label={"Home"} />
                <Breadcrumb isActive={true} link={"#"} label={"My Account"} />
            </Breadcrumbs>
            {/*====== End - Section 1 ======*/}
            {/*====== Section 2 ======*/}
            <ShoppingCart />
            {/*====== End - Section 2 ======*/}
            {/*====== Section 3 ======*/}
            <CompleteCart />
            {/*====== End - Section 3 ======*/}
        </PageWrapper>

    )
}

export default Cart;