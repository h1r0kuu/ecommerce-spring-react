import { MDBCol, MDBContainer, MDBInput, MDBRow } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import { Button, FormCheck, FormLabel } from "react-bootstrap"
import FormCheckInput from "react-bootstrap/esm/FormCheckInput"
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel"
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs"
import BreadcrumbsItem from "../../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem"
import Wrapper from "../../../components/Wrapper/Wrapper"

const Signup = (): ReactElement => {
    return (
        <Wrapper>
            <Breadcrumbs>
                <BreadcrumbsItem title={"Sign un"} />
            </Breadcrumbs>
            <MDBContainer className="my-lg-5" style={{ maxWidth: "62rem" }}>
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol xl={5} md={8}>
                        <form>
                            <div className="text-center mb-3">
                                <p>Sign up with:</p>
                                <Button variant="link" className="btn-floating mx-1">
                                    Facebook
                                </Button>
                            </div>

                            <p className="text-center">or:</p>

                            <div className="form-outline mb-4">
                                <MDBInput />
                                <FormLabel>Name</FormLabel>
                            </div>

                            <div className="form-outline mb-4">
                                <MDBInput />
                                <FormLabel>Username</FormLabel>
                            </div>

                            <div className="form-outline mb-4">
                                <MDBInput />
                                <FormLabel>Email</FormLabel>
                            </div>

                            <div className="form-outline mb-4">
                                <MDBInput />
                                <FormLabel>Password</FormLabel>
                            </div>

                            <div className="form-outline mb-4">
                                <MDBInput />
                                <FormLabel>Repeat password</FormLabel>
                            </div>

                            <FormCheck className="d-flex justify-content-center mb-4">
                                <FormCheckInput />
                                <FormCheckLabel>I have read and agree to the terms</FormCheckLabel>
                            </FormCheck>

                            <Button variant="primary" className="btn-block mb-3">Sign up</Button>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Wrapper>
    )
}

export default Signup