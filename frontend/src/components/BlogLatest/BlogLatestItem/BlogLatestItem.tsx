import React from "react";
import { ReactElement } from "react";

const BlogLatestItem = (): ReactElement => {
    return (
        <div className="bp-mini bp-mini--img u-h-100">
            <div className="bp-mini__thumbnail">
                {/*====== Image Code ======*/}
                <a
                    className="aspect aspect--bg-grey aspect--1366-768 u-d-block"
                    href="blog-detail.html"
                >
                    <img
                        className="aspect__img"
                        src="images/blog/post-2.jpg"
                        alt=""
                    />
                </a>
                {/*====== End - Image Code ======*/}
            </div>
            <div className="bp-mini__content">
                <div className="bp-mini__stat">
                    <span className="bp-mini__stat-wrap">
                        <span className="bp-mini__publish-date">
                            <a>
                                <span>25 February 2018</span>
                            </a>
                        </span>
                    </span>
                    <span className="bp-mini__stat-wrap">
                        <span className="bp-mini__preposition">By</span>
                        <span className="bp-mini__author">
                            <a href="#">Dayle</a>
                        </span>
                    </span>
                    <span className="bp-mini__stat">
                        <span className="bp-mini__comment">
                            <a href="blog-detail.html">
                                <i className="far fa-comments u-s-m-r-4" />
                                <span>8</span>
                            </a>
                        </span>
                    </span>
                </div>
                <div className="bp-mini__category">
                    <a>Learning</a>
                    <a>News</a>
                    <a>Health</a>
                </div>
                <span className="bp-mini__h1">
                    <a href="blog-detail.html">
                        Life is an extraordinary Adventure
                    </a>
                </span>
                <p className="bp-mini__p">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry.
                </p>
                <div className="blog-t-w">
                    <a className="gl-tag btn--e-transparent-hover-brand-b-2">
                        Travel
                    </a>
                    <a className="gl-tag btn--e-transparent-hover-brand-b-2">
                        Culture
                    </a>
                    <a className="gl-tag btn--e-transparent-hover-brand-b-2">
                        Place
                    </a>
                </div>
            </div>
        </div>
    )
}

export default BlogLatestItem