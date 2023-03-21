import { MDBCard, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem"
import ShoppingCartSummary from "./ShoppingCartSummary/ShoppingCartSummary"

const ShoppingCart = (): ReactElement => {
    return (
        <section className="bg-light my-5">
            <MDBContainer>
                <MDBRow>
                    <MDBCol lg={9}>
                        <MDBCard className="border shadow-0">
                            <div className="m-4">
                                <h4 className="card-title mb-4">Your shopping cart</h4>
                                <ShoppingCartItem />
                                <ShoppingCartItem />
                                <ShoppingCartItem />
                            </div>
                            <div className="border-top pt-4 mx-4 mb-4">
                                <p className="text-muted">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                    aliquip
                                </p>
                            </div>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg={3}>
                        <ShoppingCartSummary />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default ShoppingCart