import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MDBCard, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import { Button, FormSelect } from "react-bootstrap"
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs"
import BreadcrumbsItem from "../../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem"
import Wrapper from "../../../components/Wrapper/Wrapper"

const Wishlist = (): ReactElement => {
    return (
        <Wrapper>
            <Breadcrumbs>
                <BreadcrumbsItem title="Home" />
                <BreadcrumbsItem title="Wishlist" />
            </Breadcrumbs>
            <section className="bg-light my-5">
                <MDBContainer>
                    <MDBRow>
                        <MDBCard className="border shadow-0">
                            <div className="m-4">
                                <h4 className="card-title mb-4">Your Wishlist</h4>
                                <MDBRow className="gy-3 mb-4">
                                    <MDBCol lg={6}>
                                        <div className="me-lg-5">
                                            <div className="d-flex">
                                                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/11.webp" className="border rounded me-3" style={{ width: "96px", height: "96px;" }} />
                                                <div>
                                                    <a href="#" className="nav-link">Winter jacket for men and lady</a>
                                                    <p className="text-muted">Yellow, Jeans</p>
                                                </div>
                                            </div>
                                        </div>
                                    </MDBCol>
                                    <MDBCol lg={6} sm={6} className="d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                                        <div className="float-md-end">
                                            <Button variant="light" className="border icon-hover-danger">
                                                View
                                            </Button>
                                            <Button variant="light" className="border icon-hover-danger mx-3">
                                                Add to cart
                                            </Button>
                                            <Button variant="light" className="border icon-hover-danger">
                                                Remove
                                            </Button>
                                        </div>
                                    </MDBCol>
                                </MDBRow>
                            </div>
                        </MDBCard>
                    </MDBRow>
                </MDBContainer>
            </section>
        </Wrapper>

    )
}

export default Wishlist