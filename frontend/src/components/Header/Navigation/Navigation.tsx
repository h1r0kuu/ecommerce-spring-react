import { ReactElement } from "react";
import { MDBContainer, MDBNavbar, MDBNavbarNav, MDBNavbarToggler, MDBNavbarItem, MDBNavbarLink } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";
import { HOME } from "../../../utils/pathConstants";


const Navigation = (): ReactElement => {
    return (
        <MDBNavbar expand={"lg"} light style={{ backgroundColor: "#f5f5f5" }}>
            <MDBContainer className="justify-content-center justify-content-md-between">
                <MDBNavbarToggler target="navbarleft">
                    <FontAwesomeIcon icon={faBars} />
                </MDBNavbarToggler>
                <NavbarCollapse id="navbarleft" >
                    <MDBNavbarNav className="me-auto mb-2 mb-lg-0" >
                        <MDBNavbarItem>
                            <MDBNavbarLink href={HOME} color="dark">
                                Home
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                </NavbarCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Navigation