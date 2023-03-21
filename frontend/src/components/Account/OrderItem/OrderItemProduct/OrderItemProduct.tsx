import { ReactElement } from "react"
import { Col } from "react-bootstrap"

const OrderItemProduct = (): ReactElement => {
    return (
        <Col as={"li"} xl={4} lg={6}>
            <div className="d-flex mb-3 mb-xl-0">
                <div className="me-3">
                    <img width="72" height="72" src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/10.webp" className="img-sm rounded border" />
                </div>
                <div>
                    <p className="mb-0">T-shirts with multiple colors</p>
                    <strong> 2x = $25.98 </strong>
                </div>
            </div>
        </Col>
    )
}

export default OrderItemProduct