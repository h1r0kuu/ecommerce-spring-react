import { ReactElement } from "react";

const ProductListToolbar = (): ReactElement => {
    return (
        <div className="shop-p__toolbar u-s-m-b-30">
            <div className="shop-p__meta-wrap u-s-m-b-60">
                <span className="shop-p__meta-text-1">FOUND 18 RESULTS</span>
                <div className="shop-p__meta-text-2">
                    <span>Related Searches:</span>
                    <a className="gl-tag btn--e-brand-shadow" href="#">
                        men's clothing
                    </a>
                    <a className="gl-tag btn--e-brand-shadow" href="#">
                        mobiles &amp; tablets
                    </a>
                    <a className="gl-tag btn--e-brand-shadow" href="#">
                        books &amp; audible
                    </a>
                </div>
            </div>
            <div className="shop-p__tool-style">
                <div className="tool-style__group u-s-m-b-8">
                    <span className="js-shop-grid-target is-active">Grid</span>
                    <span className="js-shop-list-target">List</span>
                </div>
                <form>
                    <div className="tool-style__form-wrap">
                        <div className="u-s-m-b-8">
                            <select className="select-box select-box--transparent-b-2">
                                <option>Show: 8</option>
                                <option >Show: 12</option>
                                <option>Show: 16</option>
                                <option>Show: 28</option>
                            </select>
                        </div>
                        <div className="u-s-m-b-8">
                            <select className="select-box select-box--transparent-b-2">
                                <option>Sort By: Newest Items</option>
                                <option>Sort By: Latest Items</option>
                                <option>Sort By: Best Selling</option>
                                <option>Sort By: Best Rating</option>
                                <option>Sort By: Lowest Price</option>
                                <option>Sort By: Highest Price</option>
                            </select>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default ProductListToolbar;