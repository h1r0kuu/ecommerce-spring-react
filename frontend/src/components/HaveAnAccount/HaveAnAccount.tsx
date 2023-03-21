import { MDBCard } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import { Button } from "react-bootstrap"

const HaveAnAccount = (): ReactElement => {
    return (

        <MDBCard className="mb-4 border shadow-0">
            <div className="p-4 d-flex justify-content-between">
                <div>
                    <h5>Have an account?</h5>
                    <p className="mb-0 text-wrap ">Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                </div>
                <div className="d-flex align-items-center justify-content-center flex-column flex-md-row">
                    <Button variant="outline-primary" as={"a"} className="me-0 me-md-2 mb-2 mb-md-0 w-100">Register</Button>
                    <Button variant="primary" as={"a"} className="shadow-0 text-nowrap w-100">Sign in</Button>
                </div>
            </div>
        </MDBCard>
    )
}

export default HaveAnAccount