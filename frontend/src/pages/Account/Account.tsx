import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import AccountMain from "../../components/Account/AccountMain/AccountMain"
import AccountNavigation from "../../components/Account/AccountNavigation/AccountNavigation"
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"
import BreadcrumbsItem from "../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem"
import Wrapper from "../../components/Wrapper/Wrapper"

const Account = (): ReactElement => {
    return (
        <Wrapper>
            <Breadcrumbs>
                <BreadcrumbsItem title="Home" />
                <BreadcrumbsItem title="Account" />
            </Breadcrumbs>
            <section className="py-5 bg-light">
                <MDBContainer>
                    <MDBRow>
                        <MDBCol lg={3} xl={3}>
                            <AccountNavigation />
                        </MDBCol>
                        <MDBCol lg={9} xl={9}>
                            <AccountMain />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </Wrapper>
    )
}

export default Account