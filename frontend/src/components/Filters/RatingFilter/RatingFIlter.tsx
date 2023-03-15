import { ReactElement } from "react"

const RatingFilter = (): ReactElement => {
    return (
        <div className="u-s-m-b-30">
            <div className="shop-w shop-w--style">
                <div className="shop-w__intro-wrap">
                    <h1 className="shop-w__h">RATING</h1>
                    <span
                        className="fas fa-minus shop-w__toggle"
                        data-target="#s-rating"
                        data-toggle="collapse"
                    />
                </div>
                <div className="shop-w__wrap collapse show" id="s-rating">
                    <ul className="shop-w__list gl-scroll">
                        <li>
                            <div className="rating__check">
                                <input type="checkbox" />
                                <div className="rating__check-star-wrap">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                </div>
                            </div>
                            <span className="shop-w__total-text">(2)</span>
                        </li>
                        <li>
                            <div className="rating__check">
                                <input type="checkbox" />
                                <div className="rating__check-star-wrap">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                    <span>&amp; Up</span>
                                </div>
                            </div>
                            <span className="shop-w__total-text">(8)</span>
                        </li>
                        <li>
                            <div className="rating__check">
                                <input type="checkbox" />
                                <div className="rating__check-star-wrap">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <span>&amp; Up</span>
                                </div>
                            </div>
                            <span className="shop-w__total-text">(10)</span>
                        </li>
                        <li>
                            <div className="rating__check">
                                <input type="checkbox" />
                                <div className="rating__check-star-wrap">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <span>&amp; Up</span>
                                </div>
                            </div>
                            <span className="shop-w__total-text">(12)</span>
                        </li>
                        <li>
                            <div className="rating__check">
                                <input type="checkbox" />
                                <div className="rating__check-star-wrap">
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <i className="far fa-star" />
                                    <span>&amp; Up</span>
                                </div>
                            </div>
                            <span className="shop-w__total-text">(1)</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RatingFilter