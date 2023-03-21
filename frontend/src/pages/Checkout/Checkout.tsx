import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"
import BreadcrumbsItem from "../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem"
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm"
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary"
import HaveAnAccount from "../../components/HaveAnAccount/HaveAnAccount"
import Wrapper from "../../components/Wrapper/Wrapper"

const Checkout = (): ReactElement => {
    return (
        <Wrapper>
            <Breadcrumbs>
                <BreadcrumbsItem title="Home" />
                <BreadcrumbsItem title="Shopping cart" />
                <BreadcrumbsItem title="Checkout" />
            </Breadcrumbs>
            <section className="bg-light py-5">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol xl={8} lg={8} className="mb-4">
                            <HaveAnAccount />
                            <CheckoutForm />
                        </MDBCol>
                        <MDBCol xl={4} lg={4} className="d-flex justify-content-center justify-content-lg-end">
                            <CheckoutSummary />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </Wrapper>
    )
}

export default Checkout