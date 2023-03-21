import { ReactElement } from "react"
import ProductDetails from "../../../components/Product/ProductDetails/ProductDetails"
import ProductInfo from "../../../components/Product/ProductInfo/ProductInfo"
import Wrapper from "../../../components/Wrapper/Wrapper"

const ProductDetailsPage = (): ReactElement => {
    return (
        <Wrapper>
            <ProductDetails />
            <ProductInfo />
        </Wrapper>
    )
}

export default ProductDetailsPage