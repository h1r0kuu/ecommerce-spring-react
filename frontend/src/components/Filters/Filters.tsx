import { faFilter } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { ReactElement } from "react"
import { useGlobalStyles } from "../../utils/useGlobalStyles"
import CategoryFilter from "./CategoryFilter/CategoryFilter"
import PriceFilter from "./PriceFilter/PriceFilter"
import RatingFilter from "./RatingFilter/RatingFIlter"
import ShippingFilter from "./ShippingFilter/ShippingFilter"
import { useFiltersStyles } from "./useFiltersStyles"

const Filters = (): ReactElement => {
    const globalClasses = useGlobalStyles()
    const classes = useFiltersStyles()

    return (
        <div className="shop-w-master">
            <div className={`${classes.filterHeading} ${globalClasses.usmb30}`}>
                <FontAwesomeIcon icon={faFilter} className={globalClasses.usmr8} />
                <span>FILTERS</span>
            </div>
            <div className="shop-w-master__sidebar">
                <CategoryFilter />
                <RatingFilter />
                <ShippingFilter />
                <PriceFilter />
            </div>
        </div >
    )
}

export default Filters