import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import { Button } from "react-bootstrap"
import Stars from "../../Stars/Stars"

const ProductListItem = (): ReactElement => {
    return (
        <MDBRow className="justify-content-center mb-3">
            <MDBCol md={12}>
                <MDBCard className="shadow-0 border rounded-3">
                    <MDBCardBody>
                        <MDBRow className="g-0">
                            <MDBCol xl={3} md={4} className="d-flex justify-content-center">
                                <div className="bg-image hover-zoom ripple rounded ripple-surface me-md-3 mb-3 mb-md-0">

                                </div>
                            </MDBCol>
                            <MDBCol xl={6} md={5} sm={7}>
                                <h5>Rucksack Backpack Jeans</h5>
                                <div className="d-flex flex-row">
                                    <div className="text-warning mb-1 me-2">
                                        <Stars stars={4.5} />
                                        <span className="ms-1">
                                            4.5
                                        </span>
                                    </div>
                                    <span className="text-muted">154 orders</span>
                                </div>
                                <p className="text mb-4 mb-md-0">
                                    Short description about the product goes here, for ex its features. Lorem ipsum dolor sit amet with hapti you enter into any new area of science, you almost lorem ipsum is great text
                                    consectetur adipisicing
                                </p>
                            </MDBCol>
                            <MDBCol xl={3} md={3} sm={5}>
                                <div className="d-flex flex-row align-items-center mb-1">
                                    <h4 className="mb-1 me-1">$34,50</h4>
                                    <span className="text-danger"><s>$49.99</s></span>
                                </div>
                                <h6 className="text-success">Free shipping</h6>
                                <div className="mt-4">
                                    <Button variant="primary" className="shadow-0">Buy this</Button>
                                    <Button variant="light" className="border px-2 pt-2 icon-hover" as="a">
                                        <FontAwesomeIcon icon={faHeart} size={"lg"} className="px-1" />
                                    </Button>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow >
    )
}

export default ProductListItem