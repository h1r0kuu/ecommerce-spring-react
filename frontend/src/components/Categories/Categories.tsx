import { ReactElement } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCouch } from "@fortawesome/free-solid-svg-icons"

const Categories = (): ReactElement => {
    return (
        <section>
            <MDBContainer className="pt-5">
                <MDBRow className="gy-4">
                    <MDBCol lg={6} md={12}>
                        <MDBRow>
                            <MDBCol xs={3}>
                                <Link to={"#"} className="text-center d-flex flex-column justify-content-center">
                                    <Button variant="outline-secondary" className="mx-auto p-3 mb-2">
                                        <FontAwesomeIcon icon={faCouch} size="xl" />
                                    </Button>
                                    <div className="text-dark">Interior items</div>
                                </Link>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default Categories