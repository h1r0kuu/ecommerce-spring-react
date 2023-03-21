import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MDBCol, MDBRow } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import { Button, FormSelect } from "react-bootstrap"

const ShoppingCartItem = (): ReactElement => {
    return (
        <MDBRow className="gy-3 mb-4">
            <MDBCol lg={5}>
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
            <MDBCol lg={2} sm={6} className="col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                <div>
                    <FormSelect style={{ width: "100px" }} className="form-select me-4">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </FormSelect>
                </div>
                <div >
                    <text className="h6">$1156.00</text>
                    <br />
                    <small className="text-muted text-nowrap"> $460.00 / per item </small>
                </div>
            </MDBCol>
            <MDBCol lg={5} sm={6} className="d-flex justify-content-sm-center justify-content-md-start justify-content-lg-center justify-content-xl-end mb-2">
                <div className="float-md-end">
                    <Button variant="light" className="border px-2 icon-hover-primary">
                        <FontAwesomeIcon icon={faHeart} size="lg" className="px-1 text-secondary" />
                    </Button>
                    <Button variant="light" className="border text-danger icon-hover-danger">
                        Remove
                    </Button>
                </div>
            </MDBCol>
        </MDBRow>
    )
}

export default ShoppingCartItem