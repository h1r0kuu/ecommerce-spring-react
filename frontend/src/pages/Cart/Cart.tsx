import { ReactElement } from "react"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"
import BreadcrumbsItem from "../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem"
import ShoppingCart from "../../components/ShoppingCart/ShoppingCart"
import Wrapper from "../../components/Wrapper/Wrapper"

const Cart = (): ReactElement => {
    return (
        <Wrapper>
            <Breadcrumbs>
                <BreadcrumbsItem title="Home" />
                <BreadcrumbsItem title="Shopping cart" />
            </Breadcrumbs>
            <ShoppingCart />
        </Wrapper>
    )
}

export default Cart