import { faHeart, faMinus, faPlus, faShoppingBasket } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit"
import { ReactElement } from "react"
import { Button, FormControl, FormLabel, FormSelect, InputGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import Stars from "../../Stars/Stars"

const ProductDetails = (): ReactElement => {
    return (
        <section className="py-5">
            <MDBContainer>
                <MDBRow className="gx-5">
                    <MDBCol lg={6}>
                        <div className="border rounded-4 mb-3 d-flex justify-content-center">
                            <Link to={"#"} className="rounded-4">
                                <img style={{ maxWidth: "100%", maxHeight: "100vh", margin: "auto" }} className="rounded-4 fit" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big.webp" />
                            </Link>
                        </div>
                        <div className="d-flex justify-content-center mb-3">
                            <a className="border mx-1 rounded-2">
                                <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp" />
                            </a>
                            <a className="border mx-1 rounded-2">
                                <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp" />
                            </a>
                            <a className="border mx-1 rounded-2">
                                <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp" />
                            </a>
                            <a className="border mx-1 rounded-2">
                                <img width="60" height="60" className="rounded-2" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/detail1/big1.webp" />
                            </a>
                        </div>
                    </MDBCol>
                    <MDBCol lg={6}>
                        <div className="ps-lg-3">
                            <h4 className="title text-dark">
                                Quality Men's Hoodie for Winter, Men's Fashion <br />
                                Casual Hoodie
                            </h4>
                            <div className="d-flex flex-row my-3">
                                <div className="text-warning mb-1 me-2">
                                    <Stars stars={4.5} />
                                    <span className="ms-1">
                                        4.5
                                    </span>
                                </div>
                                <span className="text-muted"><i className="fas fa-shopping-basket fa-sm mx-1"></i>154 orders</span>
                                <span className="text-success ms-2">In stock</span>
                            </div>
                            <div className="mb-3">
                                <span className="h5">$75.00</span>
                                <span className="text-muted">/per box</span>
                            </div>
                            <p>
                                Modern look and quality demo item is a streetwear-inspired collection that continues to break away from the conventions of mainstream fashion. Made in Italy, these black and brown clothing low-top shirts for
                                men.
                            </p>
                            <MDBRow>
                                <MDBCol className="col-3">1</MDBCol>
                                <MDBCol className="col-9">A</MDBCol>
                                <MDBCol className="col-3">2</MDBCol>
                                <MDBCol className="col-9">B</MDBCol>
                            </MDBRow>
                            <hr />
                            <MDBRow className="mb-4">
                                <MDBCol className="col-6" md={4}>
                                    <FormLabel className="mb-2">Size</FormLabel>
                                    <FormSelect className="border border-secondary" style={{ height: "35px" }}>
                                        <option>Small</option>
                                        <option>Medium</option>
                                        <option>Large</option>
                                    </FormSelect>
                                </MDBCol>
                                <MDBCol className="col-6 mb-3" md={4}>
                                    <FormLabel className="mb-2 d-block">Quantity</FormLabel>
                                    <InputGroup className="mb-3" style={{ width: "170px" }}>
                                        <Button variant="white" className="border border-secondary px-3">
                                            <FontAwesomeIcon icon={faMinus} />
                                        </Button>
                                        <FormControl className="text-center border border-secondary" placeholder="14" />
                                        <Button variant="white" className="border border-secondary px-3">
                                            <FontAwesomeIcon icon={faPlus} />
                                        </Button>
                                    </InputGroup>
                                </MDBCol>
                            </MDBRow>
                            <Button variant="warning" className="shadow-0 me-1">Buy now</Button>
                            <Button variant="primary" className="shadow-0 me-1">
                                <FontAwesomeIcon icon={faShoppingBasket} className="me-1" />
                                Add to cart
                            </Button>
                            <Button variant="light" className="border border-secondary py-2 icon-hover px-3">
                                <FontAwesomeIcon icon={faHeart} />
                                Save
                            </Button>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default ProductDetails