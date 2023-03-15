import { ReactElement } from "react";

const ReviewsPane = (): ReactElement => {
    return (
        <div className="tab-pane fade" id="pd-rev">
            <div className="pd-tab__rev">
                <div className="u-s-m-b-30">
                    <div className="pd-tab__rev-score">
                        <div className="u-s-m-b-8">
                            <h2>23 Reviews - 4.6 (Overall)</h2>
                        </div>
                        <div className="gl-rating-style-2 u-s-m-b-8">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star-half-alt" />
                        </div>
                        <div className="u-s-m-b-8">
                            <h4>We want to hear from you!</h4>
                        </div>
                        <span className="gl-text">
                            Tell us what you think about this item
                        </span>
                    </div>
                </div>
                <div className="u-s-m-b-30">
                    <form className="pd-tab__rev-f1">
                        <div className="rev-f1__group">
                            <div className="u-s-m-b-15">
                                <h2>
                                    23 Review(s) for Man Ruched Floral Applique Tee
                                </h2>
                            </div>
                            <div className="u-s-m-b-15">
                                <label htmlFor="sort-review" />
                                <select
                                    className="select-box select-box--primary-style"
                                    id="sort-review"
                                >
                                    <option >Sort by: Best Rating</option>
                                    <option>Sort by: Worst Rating</option>
                                </select>
                            </div>
                        </div>
                        <div className="rev-f1__review">
                            <div className="review-o u-s-m-b-15">
                                <div className="review-o__info u-s-m-b-8">
                                    <span className="review-o__name">John Doe</span>
                                    <span className="review-o__date">
                                        27 Feb 2018 10:57:43
                                    </span>
                                </div>
                                <div className="review-o__rating gl-rating-style u-s-m-b-8">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                    <span>(4)</span>
                                </div>
                                <p className="review-o__text">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <div className="review-o u-s-m-b-15">
                                <div className="review-o__info u-s-m-b-8">
                                    <span className="review-o__name">John Doe</span>
                                    <span className="review-o__date">
                                        27 Feb 2018 10:57:43
                                    </span>
                                </div>
                                <div className="review-o__rating gl-rating-style u-s-m-b-8">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                    <span>(4)</span>
                                </div>
                                <p className="review-o__text">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                </p>
                            </div>
                            <div className="review-o u-s-m-b-15">
                                <div className="review-o__info u-s-m-b-8">
                                    <span className="review-o__name">John Doe</span>
                                    <span className="review-o__date">
                                        27 Feb 2018 10:57:43
                                    </span>
                                </div>
                                <div className="review-o__rating gl-rating-style u-s-m-b-8">
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="fas fa-star" />
                                    <i className="far fa-star" />
                                    <span>(4)</span>
                                </div>
                                <p className="review-o__text">
                                    Lorem Ipsum is simply dummy text of the printing and
                                    typesetting industry. Lorem Ipsum has been the
                                    industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                </p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="u-s-m-b-30">
                    <form className="pd-tab__rev-f2">
                        <h2 className="u-s-m-b-15">Add a Review</h2>
                        <span className="gl-text u-s-m-b-15">
                            Your email address will not be published. Required
                            fields are marked *
                        </span>
                        <div className="u-s-m-b-30">
                            <div className="rev-f2__table-wrap gl-scroll">
                                <table className="rev-f2__table">
                                    <thead>
                                        <tr>
                                            <th>
                                                <div className="gl-rating-style-2">
                                                    <i className="fas fa-star" />
                                                    <span>(1)</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="gl-rating-style-2">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star-half-alt" />
                                                    <span>(1.5)</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="gl-rating-style-2">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <span>(2)</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="gl-rating-style-2">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star-half-alt" />
                                                    <span>(2.5)</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="gl-rating-style-2">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <span>(3)</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="gl-rating-style-2">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star-half-alt" />
                                                    <span>(3.5)</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="gl-rating-style-2">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <span>(4)</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="gl-rating-style-2">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star-half-alt" />
                                                    <span>(4.5)</span>
                                                </div>
                                            </th>
                                            <th>
                                                <div className="gl-rating-style-2">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <span>(5)</span>
                                                </div>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                {/*====== Radio Box ======*/}
                                                <div className="radio-box">
                                                    <input
                                                        type="radio"
                                                        id="star-1"
                                                        name="rating"
                                                    />
                                                    <div className="radio-box__state radio-box__state--primary">
                                                        <label
                                                            className="radio-box__label"
                                                            htmlFor="star-1"
                                                        />
                                                    </div>
                                                </div>
                                                {/*====== End - Radio Box ======*/}
                                            </td>
                                            <td>
                                                {/*====== Radio Box ======*/}
                                                <div className="radio-box">
                                                    <input
                                                        type="radio"
                                                        id="star-1.5"
                                                        name="rating"
                                                    />
                                                    <div className="radio-box__state radio-box__state--primary">
                                                        <label
                                                            className="radio-box__label"
                                                            htmlFor="star-1.5"
                                                        />
                                                    </div>
                                                </div>
                                                {/*====== End - Radio Box ======*/}
                                            </td>
                                            <td>
                                                {/*====== Radio Box ======*/}
                                                <div className="radio-box">
                                                    <input
                                                        type="radio"
                                                        id="star-2"
                                                        name="rating"
                                                    />
                                                    <div className="radio-box__state radio-box__state--primary">
                                                        <label
                                                            className="radio-box__label"
                                                            htmlFor="star-2"
                                                        />
                                                    </div>
                                                </div>
                                                {/*====== End - Radio Box ======*/}
                                            </td>
                                            <td>
                                                {/*====== Radio Box ======*/}
                                                <div className="radio-box">
                                                    <input
                                                        type="radio"
                                                        id="star-2.5"
                                                        name="rating"
                                                    />
                                                    <div className="radio-box__state radio-box__state--primary">
                                                        <label
                                                            className="radio-box__label"
                                                            htmlFor="star-2.5"
                                                        />
                                                    </div>
                                                </div>
                                                {/*====== End - Radio Box ======*/}
                                            </td>
                                            <td>
                                                {/*====== Radio Box ======*/}
                                                <div className="radio-box">
                                                    <input
                                                        type="radio"
                                                        id="star-3"
                                                        name="rating"
                                                    />
                                                    <div className="radio-box__state radio-box__state--primary">
                                                        <label
                                                            className="radio-box__label"
                                                            htmlFor="star-3"
                                                        />
                                                    </div>
                                                </div>
                                                {/*====== End - Radio Box ======*/}
                                            </td>
                                            <td>
                                                {/*====== Radio Box ======*/}
                                                <div className="radio-box">
                                                    <input
                                                        type="radio"
                                                        id="star-3.5"
                                                        name="rating"
                                                    />
                                                    <div className="radio-box__state radio-box__state--primary">
                                                        <label
                                                            className="radio-box__label"
                                                            htmlFor="star-3.5"
                                                        />
                                                    </div>
                                                </div>
                                                {/*====== End - Radio Box ======*/}
                                            </td>
                                            <td>
                                                {/*====== Radio Box ======*/}
                                                <div className="radio-box">
                                                    <input
                                                        type="radio"
                                                        id="star-4"
                                                        name="rating"
                                                    />
                                                    <div className="radio-box__state radio-box__state--primary">
                                                        <label
                                                            className="radio-box__label"
                                                            htmlFor="star-4"
                                                        />
                                                    </div>
                                                </div>
                                                {/*====== End - Radio Box ======*/}
                                            </td>
                                            <td>
                                                {/*====== Radio Box ======*/}
                                                <div className="radio-box">
                                                    <input
                                                        type="radio"
                                                        id="star-4.5"
                                                        name="rating"
                                                    />
                                                    <div className="radio-box__state radio-box__state--primary">
                                                        <label
                                                            className="radio-box__label"
                                                            htmlFor="star-4.5"
                                                        />
                                                    </div>
                                                </div>
                                                {/*====== End - Radio Box ======*/}
                                            </td>
                                            <td>
                                                {/*====== Radio Box ======*/}
                                                <div className="radio-box">
                                                    <input
                                                        type="radio"
                                                        id="star-5"
                                                        name="rating"
                                                    />
                                                    <div className="radio-box__state radio-box__state--primary">
                                                        <label
                                                            className="radio-box__label"
                                                            htmlFor="star-5"
                                                        />
                                                    </div>
                                                </div>
                                                {/*====== End - Radio Box ======*/}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="rev-f2__group">
                            <div className="u-s-m-b-15">
                                <label className="gl-label" htmlFor="reviewer-text">
                                    YOUR REVIEW *
                                </label>
                                <textarea
                                    className="text-area text-area--primary-style"
                                    id="reviewer-text"
                                    defaultValue={""}
                                />
                            </div>
                            <div>
                                <p className="u-s-m-b-30">
                                    <label className="gl-label" htmlFor="reviewer-name">
                                        NAME *
                                    </label>
                                    <input
                                        className="input-text input-text--primary-style"
                                        type="text"
                                        id="reviewer-name"
                                    />
                                </p>
                                <p className="u-s-m-b-30">
                                    <label
                                        className="gl-label"
                                        htmlFor="reviewer-email"
                                    >
                                        EMAIL *
                                    </label>
                                    <input
                                        className="input-text input-text--primary-style"
                                        type="text"
                                        id="reviewer-email"
                                    />
                                </p>
                            </div>
                        </div>
                        <div>
                            <button
                                className="btn btn--e-brand-shadow"
                                type="submit"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ReviewsPane;
