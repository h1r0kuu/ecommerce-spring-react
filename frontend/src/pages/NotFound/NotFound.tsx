import { ReactElement } from "react";
import Header from "../../components/Header/Header";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const NotFound = (): ReactElement => {
    return (
        <PageWrapper>
            <div className="u-s-p-y-60">
                {/*====== Section Content ======*/}
                <div className="section__content">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 u-s-m-b-30">
                                <div className="empty">
                                    <div className="empty__wrap">
                                        <span className="empty__big-text">404</span>
                                        <span className="empty__text-1">
                                            Looks like you're in wrong place.
                                        </span>
                                        <a
                                            className="empty__redirect-link btn--e-brand"
                                            href="index.html"
                                        >
                                            GO TO HOME
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*====== End - Section Content ======*/}
            </div>
            {/*====== End - Section 1 ======*/}
        </PageWrapper>
    )
}

export default NotFound