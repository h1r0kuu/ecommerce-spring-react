import { ReactElement } from "react";

const TopTrendingCategories = (): ReactElement => {
    return (
        <div className="filter-category-container">
            <div className="filter__category-wrapper">
                <button
                    className="btn filter__btn filter__btn--style-1 js-checked"
                    type="button"
                    data-filter="*"
                >
                    ALL
                </button>
            </div>
            <div className="filter__category-wrapper">
                <button
                    className="btn filter__btn filter__btn--style-1"
                    type="button"
                    data-filter=".headphone"
                >
                    HEADPHONES
                </button>
            </div>
            <div className="filter__category-wrapper">
                <button
                    className="btn filter__btn filter__btn--style-1"
                    type="button"
                    data-filter=".smartphone"
                >
                    SMARTPHONES
                </button>
            </div>
            <div className="filter__category-wrapper">
                <button
                    className="btn filter__btn filter__btn--style-1"
                    type="button"
                    data-filter=".sportgadget"
                >
                    SPORT GADGETS
                </button>
            </div>
            <div className="filter__category-wrapper">
                <button
                    className="btn filter__btn filter__btn--style-1"
                    type="button"
                    data-filter=".dslr"
                >
                    DSLR
                </button>
            </div>
        </div>
    )
}

export default TopTrendingCategories;