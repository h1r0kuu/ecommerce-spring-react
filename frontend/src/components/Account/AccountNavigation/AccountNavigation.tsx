import { MDBNavbar, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav } from "mdb-react-ui-kit"
import { ReactElement } from "react"

const AccountNavigation = (): ReactElement => {
    return (
        <MDBNavbarNav className="flex-lg-column w-100 d-flex nav-pills mb-4">
            <MDBNavbarLink active>
                <p className="pb-0 mb-0" style={{ width: "100px" }}>Account main</p>
            </MDBNavbarLink>
            <MDBNavbarLink>
                <p className="pb-0 mb-0" style={{ width: "100px" }}>New orders</p>
            </MDBNavbarLink>
            <MDBNavbarLink>
                <p className="pb-0 mb-0" style={{ width: "100px" }}>Orders History</p>
            </MDBNavbarLink>
            <MDBNavbarLink>
                <p className="pb-0 mb-0" style={{ width: "100px" }}>My Wishlist</p>
            </MDBNavbarLink>
            <MDBNavbarLink>
                <p className="pb-0 mb-0" style={{ width: "100px" }}>Transactions</p>
            </MDBNavbarLink>
            <MDBNavbarLink>
                <p className="pb-0 mb-0" style={{ width: "100px" }}>Profile settings</p>
            </MDBNavbarLink>
            <MDBNavbarLink>
                <p className="pb-0 mb-0" style={{ width: "100px" }}>Log out</p>
            </MDBNavbarLink>
        </MDBNavbarNav>
    )
}

export default AccountNavigation