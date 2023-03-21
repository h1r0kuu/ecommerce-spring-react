import { faBars, faTh } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactElement } from "react"
import { Button, ButtonGroup, FormSelect } from "react-bootstrap"
import ProductListItem from "./ProductListItem/ProductListItem"

const ProductList = (): ReactElement => {
    return (
        <>
            <header className="d-sm-flex align-items-center border-bottom mb-4 pb-3">
                <strong className="d-block py-2">32 Items found </strong>
                <div className="ms-auto">
                    <FormSelect className="d-inline-block w-auto border pt-1">
                        <option value="0">Best match</option>
                        <option value="1">Recommended</option>
                        <option value="2">High rated</option>
                        <option value="3">Randomly</option>
                    </FormSelect>
                    <ButtonGroup className="shadow-0 border">
                        <Button variant="light" title="List view">
                            <FontAwesomeIcon icon={faBars} />
                        </Button>
                        <Button variant="light" title="Grid view">
                            <FontAwesomeIcon icon={faTh} />
                        </Button>
                    </ButtonGroup>
                </div>
            </header>
            <ProductListItem />
        </>
    )
}

export default ProductList