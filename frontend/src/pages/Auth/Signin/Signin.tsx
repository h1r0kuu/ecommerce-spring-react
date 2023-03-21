import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MDBCol, MDBContainer, MDBInput, MDBRow } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import { Button, FormCheck, FormLabel, Row } from "react-bootstrap"
import FormCheckInput from "react-bootstrap/esm/FormCheckInput"
import FormCheckLabel from "react-bootstrap/esm/FormCheckLabel"
import { Link } from "react-router-dom"
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs"
import BreadcrumbsItem from "../../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem"
import Wrapper from "../../../components/Wrapper/Wrapper"
import { REGISTRATION } from "../../../utils/pathConstants"

const Signin = (): ReactElement => {
    return (
        <Wrapper>
            <Breadcrumbs>
                <BreadcrumbsItem title={"Sign In"} />
            </Breadcrumbs>
            <MDBContainer className="my-lg-5" style={{ maxWidth: "62rem" }}>
                <MDBRow className="d-flex justify-content-center">
                    <MDBCol xl={5} md={8}>
                        <form>
                            <div className="form-outline mb-4">
                                <MDBInput />
                                <FormLabel>Email address</FormLabel>
                            </div>

                            <div className="form-outline mb-4">
                                <MDBInput />
                                <FormLabel>Password</FormLabel>
                            </div>

                            <MDBRow className="mb-4">
                                <div className="d-flex justify-content-center">
                                    <FormCheck>
                                        <FormCheckInput />
                                        <FormCheckLabel>Remember me</FormCheckLabel>
                                    </FormCheck>
                                </div>
                                <div>
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </MDBRow>

                            <Button variant="primary" className="btn-block mb-4">Sign in</Button>
                            <div className="text-center">
                                <p>Not a member? <Link to={REGISTRATION}>Register</Link></p>
                                <p>or sign up with:</p>
                                <Button variant="link" className="btn-floating mx-1">
                                    Facebook
                                </Button>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </Wrapper>
    )
}

export default Signin