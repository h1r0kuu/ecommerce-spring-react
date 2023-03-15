import { ReactElement } from "react"
import Section from "../Section/Section"
const ClientFeedback = (): ReactElement => {
    return (
        <Section headerText="CLIENT FEEDBACKS">
            <div>
                <div
                    className="owl-carousel owl-loaded owl-drag"
                    id="testimonial-slider"
                >
                    <div className="owl-stage-outer">
                        <div
                            className="owl-stage"
                            style={{
                                transform: "translate3d(0px, 0px, 0px)",
                                transition: "all 0s ease 0s",
                                width: 4440
                            }}
                        >
                            <div className="owl-item active" style={{ width: 1110 }}>
                                <div className="testimonial">
                                    <div className="testimonial__img-wrap">
                                        <img
                                            className="testimonial__img"
                                            src="images/about/test-1.jpg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="testimonial__content-wrap">
                                        <span className="testimonial__double-quote">
                                            <i className="fas fa-quote-right" />
                                        </span>
                                        <blockquote className="testimonial__block-quote">
                                            <p>
                                                "Far far away, behind the word mountains, far from the
                                                countries Vokalia and Consonantia, there live the blind
                                                texts. Separated they live in Bookmarksgrove right at
                                                the coast of the Semantics, a large language ocean."
                                            </p>
                                        </blockquote>
                                        <span className="testimonial__author">
                                            John D. / DVNTR Inc.
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-nav disabled">
                        <button type="button" className="owl-prev">
                            <span aria-label="Previous">‹</span>
                        </button>
                        <button type="button" className="owl-next">
                            <span aria-label="Next">›</span>
                        </button>
                    </div>
                    <div className="owl-dots">
                        <button className="owl-dot active">
                            <span />
                        </button>
                        <button className="owl-dot">
                            <span />
                        </button>
                        <button className="owl-dot">
                            <span />
                        </button>
                        <button className="owl-dot">
                            <span />
                        </button>
                    </div>
                </div>
            </div>
            {/*====== End - Testimonial Slider ======*/}
        </Section>

    )
}

export default ClientFeedback;