import { ReactElement } from "react"
import FiltersWrapper from "../FiltersWrapper/FiltersWrapper"

const RelatedItems = (): ReactElement => {
    return (
        <FiltersWrapper title={"Related items"}>
            <ul className="list-unstyled">
                <li><a href="#" className="text-dark">Electronics </a></li>
                <li><a href="#" className="text-dark">Home items </a></li>
                <li><a href="#" className="text-dark">Books, Magazines </a></li>
                <li><a href="#" className="text-dark">Men's clothing </a></li>
                <li><a href="#" className="text-dark">Interiors items </a></li>
                <li><a href="#" className="text-dark">Underwears </a></li>
                <li><a href="#" className="text-dark">Shoes for men </a></li>
                <li><a href="#" className="text-dark">Accessories </a></li>
            </ul>
        </FiltersWrapper>
    )
}

export default RelatedItems