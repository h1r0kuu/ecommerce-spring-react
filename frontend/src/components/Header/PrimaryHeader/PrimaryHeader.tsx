import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import Logo from "./Logo/Logo"
import Menu from "./Menu/Menu"
import Search from "./Search/Search"

const PrimaryHeader = (): ReactElement => {
    return (
        <div className="p-3 text-center bg-white border-bottom">
            <MDBContainer>
                <MDBRow className="gy-3">
                    <MDBCol lg={2} sm={4} xs={4}>
                        <Logo />
                    </MDBCol>
                    <MDBCol lg={5} md={12} xs={12}>
                        <Search />
                    </MDBCol>
                    <MDBCol lg={5} sm={8} xs={8}>
                        <Menu />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default PrimaryHeader