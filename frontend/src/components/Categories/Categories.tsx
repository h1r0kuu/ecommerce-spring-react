import { ReactElement } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBNavbarLink, MDBNavbarNav } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons"

const Categories = (): ReactElement => {
    return (
        <MDBNavbarNav className="flex-column nav-pills mb-md-2">
            <MDBNavbarLink className="active py-2 ps-3 my-0">ELectronics</MDBNavbarLink>
            <MDBNavbarLink className="my-0 py-2 ps-3 bg-white">ELectronics</MDBNavbarLink>
            <MDBNavbarLink className="my-0 py-2 ps-3 bg-white">ELectronics</MDBNavbarLink>
            <MDBNavbarLink className="my-0 py-2 ps-3 bg-white">ELectronics</MDBNavbarLink>
        </MDBNavbarNav>
    )
}

export default Categories