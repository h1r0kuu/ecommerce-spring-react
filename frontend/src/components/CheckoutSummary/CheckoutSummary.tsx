import { MDBCol, MDBInput, MDBInputGroup } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import { Button } from "react-bootstrap"
import CheckoutItem from "./CheckoutItem/CheckoutItem"

const CheckoutSummary = (): ReactElement => {
    return (
        <div className="ms-lg-4 mt-4 mt-lg-0" style={{ width: "320px" }}>
            <h6 className="mb-3">Summary</h6>
            <div className="d-flex justify-content-between">
                <p className="mb-2">Total price:</p>
                <p className="mb-2">$195.90</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className="mb-2">Discount:</p>
                <p className="mb-2 text-danger">- $60.00</p>
            </div>
            <div className="d-flex justify-content-between">
                <p className="mb-2">Shipping cost:</p>
                <p className="mb-2">+ $14.00</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between">
                <p className="mb-2">Total price:</p>
                <p className="mb-2 fw-bold">$149.90</p>
            </div>
            <MDBInputGroup>
                <MDBInput className="border" />
                <Button variant="light" className="text-primary border">Apply</Button>
            </MDBInputGroup>
            <h6 className="text-dark my-4">Items in cart</h6>
            <CheckoutItem />
            <CheckoutItem />
            <CheckoutItem />
        </div>
    )
}

export default CheckoutSummary