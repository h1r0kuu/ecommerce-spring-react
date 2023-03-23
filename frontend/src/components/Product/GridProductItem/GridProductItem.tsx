import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol } from "mdb-react-ui-kit";
import { ReactElement } from "react";
import { Button } from "react-bootstrap";

const GridProductItem = (): ReactElement => {
    return (
        <MDBCol lg={3} md={6} sm={6}>
            <MDBCard className="my-2 shadow-0">
                <a href="#" className="img-wrap">
                    <MDBCardImage />
                </a>
                <MDBCardBody className="p-0 pt-2">
                    <Button as="a" variant="light" className="border px-2 pt-2 float-end icon-hover">
                        <FontAwesomeIcon icon={faHeart} size="lg" className="px-1 text-secondary" />
                    </Button>
                    <MDBCardTitle><strong>$1099.00</strong></MDBCardTitle>
                    <p className="card-text mb-3">Apple iPhone 13 Pro max</p>
                    <p className="text-muted">
                        Color: Black, Memory: 128GB
                    </p>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}

export default GridProductItem