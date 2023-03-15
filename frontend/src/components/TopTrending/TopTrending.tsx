import { Box, Grid } from "@mui/material";
import { ReactElement } from "react";
import Section from "../Section/Section";
import TopTrendingCategories from "./TopTrendingCategories/TopTrendingCategories";
import TopTrendingItem from "./TopTrendingItem/TopTrendingItem";

const TopTrending = (): ReactElement => {
    return (
        <Box pt={7.5}>
            <Section headerText="TOP TRENDING">
                <Grid item lg={12}>
                    <TopTrendingCategories />
                    <div className="filter__grid-wrapper u-s-m-t-30" style={{ position: "relative" }}>
                        <Grid container>
                            <TopTrendingItem />
                        </Grid>
                    </div>
                </Grid>
                <Grid item lg={12}>
                    <div className="load-more">
                        <button className="btn btn--e-brand" type="button">
                            Load More
                        </button>
                    </div>
                </Grid>
            </Section>
        </Box>
    )
}

export default TopTrending;