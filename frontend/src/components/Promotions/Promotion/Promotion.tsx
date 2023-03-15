import { Grid } from "@mui/material";
import { ReactElement } from "react";

const Promotion = (): ReactElement => {
    return (
        <Grid item lg={4} md={4} sm={6} mb={3.75}>
            <a className="promotion" href="shop-side-version-2.html">
                <div className="aspect aspect--bg-grey aspect--square">
                    <img
                        className="aspect__img promotion__img"
                        src="images/promo/promo-img-1.jpg"
                        alt=""
                    />
                </div>
                <div className="promotion__content">
                    <div className="promotion__text-wrap">
                        <div className="promotion__text-1">
                            <span className="u-c-secondary">
                                ACCESSORIES FOR YOUR EVERYDAY
                            </span>
                        </div>
                        <div className="promotion__text-2">
                            <span className="u-c-secondary">GET IN</span>
                            <span className="u-c-brand">TOUCH</span>
                        </div>
                    </div>
                </div>
            </a>
        </Grid>
    )
}

export default Promotion;