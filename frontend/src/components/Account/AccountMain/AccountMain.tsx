import { faMapMarkerAlt, faPen, faPlus } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MDBCard, MDBCol, MDBRow } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import { Button } from "react-bootstrap"
import OrderItem from "../OrderItem/OrderItem"

const AccountMain = (): ReactElement => {
    return (
        <MDBCard className="p-4 mb-0 shadow-0 border">
            <div className="content-body">
                <div className="d-flex align-items-center">
                    <div className="me-3">
                        <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/avatars/avatar.webp" className="rounded-circle" style={{ height: "60px", width: "60px" }} />
                    </div>
                    <div className="pt-2">
                        <h6 className="pt-2">Mr. Jackson Mike</h6>
                        <p>
                            Email: myusername@gmail.com, Phone: +1234567890988
                            <a href="#" className="px-2">
                                <FontAwesomeIcon icon={faPen} />
                            </a>
                        </p>
                    </div>
                </div>

                <hr />

                <MDBRow className="g-2 mb-3">
                    <MDBCol md={6}>
                        <div className="border p-3 rounded-3 bg-light">
                            <b className="mx-2 text-muted"><FontAwesomeIcon icon={faMapMarkerAlt} /></b>
                            United States, 3601 Old Capitol Trail, Unit A-7, Suite
                        </div>
                    </MDBCol>
                    <MDBCol md={6}>
                        <div className="border p-3 rounded-3 bg-light">
                            <b className="mx-2 text-muted"><FontAwesomeIcon icon={faMapMarkerAlt} /></b>
                            Moscow city, Street name, Building lenin, House 77
                        </div>
                    </MDBCol>
                </MDBRow>

                <Button variant="light" className="border">
                    <FontAwesomeIcon icon={faPlus} className="me-2" />Add new address
                </Button>

                <hr className="my-4" />

                <h5 className="mb-3">Your orders</h5>
                <OrderItem />
                <OrderItem />
                <OrderItem />
            </div>
        </MDBCard>
    )
}

export default AccountMain