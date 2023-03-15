import { Grid } from "@mui/material";
import { ReactElement } from "react";
const ShoppingCartToolbar = (): ReactElement => {
    return (
        <Grid item lg={12}>
            <div className="route-box">
                <div className="route-box__g1">
                    <a className="route-box__link" href="shop-side-version-2.html">
                        <i className="fas fa-long-arrow-alt-left" />
                        <span>CONTINUE SHOPPING</span>
                    </a>
                </div>
                <div className="route-box__g2">
                    <a className="route-box__link" href="cart.html">
                        <i className="fas fa-trash" />
                        <span>CLEAR CART</span>
                    </a>
                    <a className="route-box__link" href="cart.html">
                        <i className="fas fa-sync" />
                        <span>UPDATE CART</span>
                    </a>
                </div>
            </div>
        </Grid>
    )
}

export default ShoppingCartToolbar;