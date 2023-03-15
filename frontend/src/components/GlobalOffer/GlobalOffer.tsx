import { ReactElement } from "react";

const GlobalOffer = (): ReactElement => {
    return (
        <div className="banner-bg">
            {/*====== Section Content ======*/}
            <div className="section__content">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="banner-bg__countdown">
                                <div
                                    className="countdown countdown--style-banner"
                                    data-countdown="2020/05/01"
                                >
                                    <div className="countdown__content">
                                        <div>
                                            <span className="countdown__value">00</span>
                                            <span className="countdown__key">Days</span>
                                        </div>
                                    </div>
                                    <div className="countdown__content">
                                        <div>
                                            <span className="countdown__value">00</span>
                                            <span className="countdown__key">Hours</span>
                                        </div>
                                    </div>
                                    <div className="countdown__content">
                                        <div>
                                            <span className="countdown__value">00</span>
                                            <span className="countdown__key">Mins</span>
                                        </div>
                                    </div>
                                    <div className="countdown__content">
                                        <div>
                                            <span className="countdown__value">00</span>
                                            <span className="countdown__key">Secs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="banner-bg__wrap">
                                <div className="banner-bg__text-1">
                                    <span className="u-c-white">Global</span>
                                    <span className="u-c-secondary">Offers</span>
                                </div>
                                <div className="banner-bg__text-2">
                                    <span className="u-c-secondary">Official Launch</span>
                                    <span className="u-c-white">Don't Miss!</span>
                                </div>
                                <span className="banner-bg__text-block banner-bg__text-3 u-c-secondary">
                                    Enjoy Free Shipping when you buy 2 items and above!
                                </span>
                                <a
                                    className="banner-bg__shop-now btn--e-secondary"
                                    href="shop-side-version-2.html"
                                >
                                    Shop Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*====== End - Section Content ======*/}
        </div>
    )
}

export default GlobalOffer;