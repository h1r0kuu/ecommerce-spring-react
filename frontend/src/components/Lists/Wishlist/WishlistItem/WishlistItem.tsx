import { Box } from "@mui/material";
import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { useGlobalStyles } from "../../../../utils/useGlobalStyles";
import { useWishlistItemStyles } from "./useWishlistItemStyles";

const WishlistItem = (): ReactElement => {
    const globalClasses = useGlobalStyles()
    const classes = useWishlistItemStyles()

    return (
        <div className={`${globalClasses.usmb30} ${classes.wr}`}>
            <div className={classes.wrContainer}>
                <div className={classes.wrap1}>
                    <div className={classes.imgWrap}>
                        <img
                            className={classes.imgFluid}
                            src="images/product/women/product8.jpg"
                            alt=""
                        />
                    </div>
                    <div className={classes.wrInfo}>
                        <span className={classes.wrName}>
                            <Link to={"#"}>
                                New Dress D Nice Elegant
                            </Link>
                        </span>
                        <span className={classes.wrCategory}>
                            <Link to={"#"}>
                                Women Clothing
                            </Link>
                        </span>
                        <span className={classes.wrPrice}>
                            $125.00
                            <span className={classes.wrDiscount}>$160.00</span>
                        </span>
                    </div>
                </div>
                <div className={classes.wrap2}>
                    <a className={`${classes.wrLink} ${globalClasses.orangeBtn}`}>
                        ADD TO CART
                    </a>
                    <a className={`${classes.wrLink} ${globalClasses.platinumBtn}`}>
                        VIEW
                    </a>
                    <a className={`${classes.wrLink} ${globalClasses.platinumBtn}`}>
                        REMOVE
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WishlistItem;