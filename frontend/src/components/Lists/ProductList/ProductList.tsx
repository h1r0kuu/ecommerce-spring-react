import { ReactElement } from "react"
import ProductItem from "./ProductItem/ProductItem"

const ProductList = (): ReactElement => {
    return (
        <div className="shop-p__collection">
            <div className="row is-grid-active">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
            </div>
        </div>
    )
}

export default ProductList