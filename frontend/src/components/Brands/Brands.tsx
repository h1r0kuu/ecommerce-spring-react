import { Box } from "@mui/material";
import { ReactElement } from "react";
import SectionContent from "../Section/SectionContent/SectionContent";

const Brands = (): ReactElement => {
    return (
        <Box pb={7.5}>
            <SectionContent>
                <div>
                    <div
                        className="owl-carousel owl-loaded owl-drag"
                        id="brand-slider"
                        data-item={5}
                    >
                        <div className="owl-stage-outer">
                            <div
                                className="owl-stage"
                                style={{
                                    transform: "translate3d(0px, 0px, 0px)",
                                    transition: "all 0.25s ease 0s",
                                    width: 1332
                                }}
                            >
                                <div className="owl-item active" style={{ width: 222 }}>
                                    <div className="brand-slide">
                                        <a href="shop-side-version-2.html">
                                            <img src="images/brand/b1.png" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="owl-nav">
                            <div className="b-prev">
                                <i className="fas fa-angle-left" />
                            </div>
                            <div className="b-next">
                                <i className="fas fa-angle-right" />
                            </div>
                        </div>
                        <div className="owl-dots disabled" />
                    </div>
                </div>
                {/*====== End - Brand Slider ======*/}
            </SectionContent>
            {/*====== End - Section Content ======*/}
        </Box>
    )
}

export default Brands;