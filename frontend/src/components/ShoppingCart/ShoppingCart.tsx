import { Box, Container, Grid, Typography } from "@mui/material";
import { ReactElement } from "react";
import Section from "../Section/Section";
import SectionIntro from "../Section/SectionIntro/SectionIntro";
import ShoppingCartItem from "./ShoppingCartItem/ShoppingCartItem";
import ShoppingCartToolbar from "./ShoppingCartToolbar/ShoppingCartToolbar";

const ShoppingCart = (): ReactElement => {
    return (
        <Section headerText="SHOPPING CART">
            <Grid item mb={3.75} lg={12} md={12} sm={12}>
                <div className="table-responsive">
                    <table className="table-p">
                        <tbody>
                            <ShoppingCartItem />
                        </tbody>
                    </table>
                </div>
                <ShoppingCartToolbar />
            </Grid>
        </Section>
    )
}

export default ShoppingCart;