import { ReactElement } from "react"

const CheckoutItem = (): ReactElement => {
    return (
        <div className="d-flex align-items-center mb-4">
            <div className="me-3 position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill badge-secondary">
                    1
                </span>
                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/7.webp" style={{ height: "96px", width: "96x" }} className="img-sm rounded border" />
            </div>
            <div>
                <a href="#" className="nav-link">
                    Gaming Headset with Mic <br />
                    Darkblue color
                </a>
                <div className="price text-muted">Total: $295.99</div>
            </div>
        </div>
    )
}

export default CheckoutItem