import { MDBCard, MDBCardBody, MDBCol, MDBRow } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import { Button, Row } from "react-bootstrap"
import OrderItemProduct from "./OrderItemProduct/OrderItemProduct"

const OrderItem = (): ReactElement => {
    return (
        <MDBCard className="border border-primary mb-4 shadow-0">
            <MDBCardBody className="pb-0">
                <header className="d-lg-flex">
                    <div className="flex-grow-1">
                        <h6 className="mb-0">Order ID: 8924 <i className="dot"></i>
                            <span className="text-success"> Shipped</span>
                        </h6>
                        <span className="text-muted">Date: 16 December 2022</span>
                    </div>
                    <div>
                        <Button size="sm" variant="outline-danger">Cancel order</Button>
                        <Button size="sm" variant="primary" className="shadow-0">Track order</Button>
                    </div>
                </header>
                <hr />
                <MDBRow>
                    <MDBCol lg={4}>
                        <p className="mb-0 text-muted">Contact</p>
                        <p className="m-0">
                            Mike Johnatan <br />
                            Phone: 371-295-9131 <br />
                            Email: info@mywebsite.com
                        </p>
                    </MDBCol>
                    <MDBCol lg={4} className="border-start">
                        <p className="mb-0 text-muted">Shipping address</p>
                        <p className="m-0">
                            United States <br />
                            3601 Old Capitol Trail, Unit A-7, Suite 170777, Wilmington, DE 19808
                        </p>
                    </MDBCol>
                    <MDBCol lg={4} className="border-start">
                        <p className="mb-0 text-muted">Payment</p>
                        <p className="m-0">
                            <span className="text-success"> Visa **** 4216 </span> <br />
                            Shipping fee: $56 <br />
                            Total paid: $456
                        </p>
                    </MDBCol>
                </MDBRow>
                <hr />
                <Row as={"ul"} className="list-unstyled">
                    <OrderItemProduct />
                </Row>
            </MDBCardBody>
        </MDBCard>
    )
}

export default OrderItem