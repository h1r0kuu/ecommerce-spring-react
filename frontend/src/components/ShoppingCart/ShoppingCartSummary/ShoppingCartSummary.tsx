import { MDBCard, MDBCardBody } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import { Button, Form, FormControl, FormGroup, FormLabel, InputGroup } from "react-bootstrap"
import { CHECKOUT } from "../../../utils/pathConstants"

const ShoppingCartSummary = (): ReactElement => {
    return (
        <>
            <MDBCard className="mb-3 border shadow-0">
                <MDBCardBody>
                    <Form>
                        <FormGroup>
                            <FormLabel>Have Coupon?</FormLabel>
                            <InputGroup>
                                <FormControl className="border"></FormControl>
                                <Button className="border" variant="light">Apply</Button>
                            </InputGroup>
                        </FormGroup>
                    </Form>
                </MDBCardBody>
            </MDBCard>
            <MDBCard className="shadow-0 border">
                <MDBCardBody>
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">Total price:</p>
                        <p className="mb-2">$329.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">Discount:</p>
                        <p className="mb-2 text-success">-$60.00</p>
                    </div>
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">TAX:</p>
                        <p className="mb-2">$14.00</p>
                    </div>
                    <hr />
                    <div className="d-flex justify-content-between">
                        <p className="mb-2">Total price:</p>
                        <p className="mb-2 fw-bold">$283.00</p>
                    </div>
                    <div className="mt-3">
                        <Button variant="success" className="w-100 shadow-0 mb-2" as={"a"} href={CHECKOUT}>Make Purchase</Button>
                        <Button variant="light" className="w-100 border mt-2">Back to shop</Button>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </>
    )
}

export default ShoppingCartSummary