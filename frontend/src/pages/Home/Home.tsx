import { MDBCard, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { ReactElement } from "react";
import { Button } from "react-bootstrap";
import Categories from "../../components/Categories/Categories";
import NewProducts from "../../components/Product/NewProducts/NewProducts";
import Wrapper from "../../components/Wrapper/Wrapper";

const Home = (): ReactElement => {
    return (
        <Wrapper>
            <section className="mt-3">
                <MDBContainer>
                    <MDBCard className="p-3 shadow-2-strong">
                        <MDBRow>
                            <MDBCol lg={3}>
                                <Categories />
                            </MDBCol>
                            <MDBCol lg={9}>
                                <div className="card-banner h-auto p-5 bg-primary rounded-5" style={{ height: "350px" }}>
                                    <div>
                                        <h2 className="text-white">
                                            Great products with <br />
                                            best deals
                                        </h2>
                                        <p className="text-white">No matter how far along you are in your sophistication as an amateur astronomer, there is always one.</p>
                                        <Button as="a" variant="light" className="shadow-0 text-primary">View more</Button>
                                    </div>
                                </div>
                            </MDBCol>
                        </MDBRow>
                    </MDBCard>
                </MDBContainer>
            </section>
            <NewProducts />
        </Wrapper>
    )
}

export default Home