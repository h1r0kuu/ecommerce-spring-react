import { MDBCard, MDBCardTitle, MDBCheckbox, MDBCol, MDBInput, MDBRow, MDBTextArea } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import { Button, Col, FormCheck, FormControl, FormLabel, FormSelect, FormText } from "react-bootstrap"
import FormCheckInput from "react-bootstrap/esm/FormCheckInput"
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel"

const CheckoutForm = (): ReactElement => {
    return (
        <MDBCard className="shadow-20 border">
            <div className="p-4">
                <MDBCardTitle className="mb-3">Checkout</MDBCardTitle>
                <MDBRow>
                    <MDBCol className="mb-3 col-6">
                        <p className="mb-0">First Name</p>
                        <div className="form-outline">
                            <MDBInput />
                        </div>
                    </MDBCol>
                    <MDBCol >
                        <p className="mb-0 col-6">Last Name</p>
                        <div className="form-outline">
                            <MDBInput />
                        </div>
                    </MDBCol>
                    <MDBCol className="mb-3 col-6">
                        <p className="mb-0">Phone</p>
                        <div className="form-outline">
                            <MDBInput />
                        </div>
                    </MDBCol>
                    <MDBCol className="mb-3 col-6">
                        <p className="mb-0">Email</p>
                        <div className="form-outline">
                            <MDBInput />
                        </div>
                    </MDBCol>
                </MDBRow>
                <FormCheck>
                    <MDBCheckbox />
                    <FormCheckLabel>Keep me up to date on news</FormCheckLabel>
                </FormCheck>
                <hr className="my-4" />
                <MDBCardTitle>Shipping Info</MDBCardTitle>
                <MDBRow className="mb-3">
                    <MDBCol lg={4} className="mb-3">
                        <FormCheck className="h-100 border rounded-3">
                            <div className="p-3">
                                <MDBCheckbox type="radio" checked />
                                <FormCheckLabel>
                                    Express delivary <br />
                                    <small className="text-muted">3-4 days via Fedex </small>
                                </FormCheckLabel>
                            </div>
                        </FormCheck>
                    </MDBCol>
                    <MDBCol lg={4} className="mb-3">
                        <FormCheck className="h-100 border rounded-3">
                            <div className="p-3">
                                <MDBCheckbox type="radio" />
                                <FormCheckLabel>
                                    Post office <br />
                                    <small className="text-muted">20-30 days via post</small>
                                </FormCheckLabel>
                            </div>
                        </FormCheck>
                    </MDBCol>
                    <MDBCol lg={4} className="mb-3">
                        <FormCheck className="h-100 border rounded-3">
                            <div className="p-3">
                                <MDBCheckbox type="radio" />
                                <FormCheckLabel>
                                    Self pick-up <br />
                                    <small className="text-muted">Come to our shop </small>
                                </FormCheckLabel>
                            </div>
                        </FormCheck>
                    </MDBCol>
                    <MDBRow>
                        <MDBCol sm={8} className="mb-3">
                            <p className="mb-0">Address</p>
                            <div className="form-outline">
                                <MDBInput />

                            </div>
                        </MDBCol>
                        <MDBCol sm={4} className="mb-3">
                            <p className="mb-0">City</p>
                            <FormSelect>
                                <option value="1">New York</option>
                            </FormSelect>
                        </MDBCol>
                        <MDBCol sm={4} className="mb-3">
                            <p className="mb-0">House</p>
                            <div className="form-outline">
                                <MDBInput />

                            </div>
                        </MDBCol>
                        <MDBCol sm={4} className="mb-3 col-6">
                            <p className="mb-0">Postal code</p>
                            <div className="form-outline">
                                <MDBInput />

                            </div>
                        </MDBCol>
                        <MDBCol sm={4} className="mb-3 col-6">
                            <p className="mb-0">Zip</p>
                            <div className="form-outline">
                                <FormControl className="placeholder-active border" />
                            </div>
                        </MDBCol>
                    </MDBRow>
                    <FormCheck className="mb-3">
                        <FormCheckInput />
                        <FormCheckLabel>Save this address</FormCheckLabel>
                    </FormCheck>
                    <div className="mb-3">
                        <p className="mb-0">Message to seller</p>
                        <MDBTextArea />
                    </div>
                    <div className="float-end">
                        <Button variant="light" className="border">Cancel</Button>
                        <Button variant="success" className="shadow-0">Continue</Button>
                    </div>
                </MDBRow>
            </div>
        </MDBCard>
    )
}

export default CheckoutForm