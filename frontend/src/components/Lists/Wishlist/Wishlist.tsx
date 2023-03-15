import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";
import Section from "../../Section/Section";
import SectionIntro from "../../Section/SectionIntro/SectionIntro";
import WishlistItem from "./WishlistItem/WishlistItem";
import WishlistToolbar from "./WishlistToolbar/WishlistToolbar";

const Wishlist = (): ReactElement => {
    return (
        <Section headerText="Wishlist">
            <Grid item lg={12} md={12} sm={12}>
                <WishlistItem />
            </Grid>
            <WishlistToolbar />
        </Section>
    )
}

export default Wishlist;