import { ReactElement } from "react"
import { Link } from "react-router-dom"

const SimilarItem = (): ReactElement => {
    return (
        <div className="d-flex mb-3">
            <a href="#" className="me-3">
                <img src="https://bootstrap-ecommerce.com/bootstrap5-ecommerce/images/items/8.webp" style={{ minWidth: "96px", height: "96px" }} className="img-md img-thumbnail" />
            </a>
            <div className="info">
                <a href="#" className="nav-link mb-1">
                    Rucksack Backpack Large <br />
                    Line Mounts
                </a>
                <strong className="text-dark"> $38.90</strong>
            </div>
        </div>
    )
}

export default SimilarItem