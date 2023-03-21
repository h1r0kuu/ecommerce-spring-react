import { MDBContainer, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import DropdownItem from "react-bootstrap/esm/DropdownItem"

const Footer = (): ReactElement => {
    return (
        <footer className="text-center text-lg-start text-muted bg-primary mt-3">
            <MDBContainer className="text-center text-md-start pt-4 pb-4">

            </MDBContainer>
            <MDBContainer>
                <div className="d-flex justify-content-between py-4 border-top">
                    <div className="socials"></div>
                    <MDBDropdown>
                        <MDBDropdownToggle>dasdas</MDBDropdownToggle>
                        <MDBDropdownMenu>
                            <li>
                                <DropdownItem>das</DropdownItem>
                            </li>
                            <li>
                                <DropdownItem>das</DropdownItem>
                            </li>
                        </MDBDropdownMenu>
                    </MDBDropdown>
                </div>
            </MDBContainer>
        </footer>
    )
}

export default Footer