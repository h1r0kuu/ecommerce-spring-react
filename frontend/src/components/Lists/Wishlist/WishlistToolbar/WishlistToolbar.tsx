import { faLongArrowAltLeft, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import { ReactElement } from "react";
import { useWishlistToolbarStyles } from "./useWishlistToolbarStyles";

const WishlistToolbar = (): ReactElement => {
    const classes = useWishlistToolbarStyles()

    return (
        <Grid item lg={12}>
            <div className={classes.routeBox}>
                <div className="route-box__g">
                    <a className={classes.routeBoxLink}>
                        <FontAwesomeIcon icon={faLongArrowAltLeft} />
                        <span> CONTINUE SHOPPING</span>
                    </a>
                </div>
                <div className="route-box__g">
                    <a className={classes.routeBoxLink}>
                        <FontAwesomeIcon icon={faTrash} />
                        <span> CLEAR WISHLIST</span>
                    </a>
                </div>
            </div>
        </Grid>
    )
}

export default WishlistToolbar;