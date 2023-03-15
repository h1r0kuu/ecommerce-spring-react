import { ReactElement } from "react";
import Breadcrumb from "../../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import Header from "../../../components/Header/Header";
import Wishlist from "../../../components/Lists/Wishlist/Wishlist";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";

const WishlistPage = (): ReactElement => {
    return (
        <PageWrapper>
            <Breadcrumbs>
                <Breadcrumb isActive={false} link={"/"} label={"Home"} />
                <Breadcrumb isActive={true} link={"#"} label={"My Account"} />
            </Breadcrumbs>
            {/*====== End - Section 1 ======*/}
            {/*====== Section 2 ======*/}
            <Wishlist />
            {/*====== End - Section 2 ======*/}
        </PageWrapper >
    )
}

export default WishlistPage;