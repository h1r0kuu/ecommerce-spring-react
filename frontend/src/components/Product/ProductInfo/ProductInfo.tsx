import { faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCol, MDBContainer, MDBRow, MDBTabs, MDBTabsContent, MDBTabsItem, MDBTabsLink, MDBTabsPane } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import { Nav, Navbar, NavItem, NavLink, Tab, Tabs } from "react-bootstrap"
import SimilarItem from "./SimilarItem/SimilarItem"

const ProductInfo = (): ReactElement => {
    return (
        <section className="bg-light border-top py-4">
            <MDBContainer>
                <MDBRow className="gx-4">
                    <MDBCol lg={8} className="mb-4">
                        <div className="border rounded-2 px-3 py-2 bg-white">
                            <Tab.Container id="left-tabs-example" defaultActiveKey="Specification">
                                <Nav variant="pills" className="nav-justified mb-3" as={"ul"}>
                                    <NavItem className="d-flex" as="li">
                                        <NavLink className="d-flex align-items-center justify-content-center w-100" eventKey={"Specification"}>Specification</NavLink>
                                    </NavItem>
                                    <NavItem className="d-flex" as="li">
                                        <NavLink className="d-flex align-items-center justify-content-center w-100" eventKey={"warrantyInfo"}>Warranty info</NavLink>
                                    </NavItem>
                                    <NavItem className="d-flex" as="li">
                                        <NavLink className="d-flex align-items-center justify-content-center w-100" eventKey={"shippingInfo"}>Shipping info</NavLink>
                                    </NavItem>
                                </Nav>
                                <Tab.Content>
                                    <Tab.Pane className="fade mb-2" eventKey={"Specification"}>
                                        <p>
                                            With supporting text below as a natural lead-in to additional content. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                            enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                            pariatur.
                                        </p>
                                        <MDBRow className="mb-2">
                                            <MDBCol md={6} className="col-12">
                                                <ul className="list-unstyled mb-0">
                                                    <li><FontAwesomeIcon icon={faCheck} className="text-success me-2" />Some great feature name here</li>
                                                    <li><FontAwesomeIcon icon={faCheck} className="text-success me-2" />Lorem ipsum dolor sit amet, consectetur</li>
                                                    <li><FontAwesomeIcon icon={faCheck} className="text-success me-2" />Duis aute irure dolor in reprehenderit</li>
                                                    <li><FontAwesomeIcon icon={faCheck} className="text-success me-2" />Optical heart sensor</li>
                                                </ul>
                                            </MDBCol>
                                            <MDBCol md={6} className="col-12">
                                                <ul className="list-unstyled">
                                                    <li><FontAwesomeIcon icon={faCheck} className="text-success me-2" />Easy fast and ver good</li>
                                                    <li><FontAwesomeIcon icon={faCheck} className="text-success me-2" />Some great feature name here</li>
                                                    <li><FontAwesomeIcon icon={faCheck} className="text-success me-2" />Modern style and design</li>
                                                </ul>
                                            </MDBCol>
                                        </MDBRow>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Tab.Container>
                        </div>
                    </MDBCol>
                    <MDBCol lg={4}>
                        <div className="px-0 border rounded-2 shadow-0">
                            <MDBCard>
                                <MDBCardBody>
                                    <MDBCardTitle>Similar items</MDBCardTitle>
                                    <SimilarItem />
                                    <SimilarItem />
                                    <SimilarItem />
                                    <SimilarItem />
                                </MDBCardBody>
                            </MDBCard>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default ProductInfo