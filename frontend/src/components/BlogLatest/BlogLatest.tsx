import { Grid } from "@mui/material"
import { ReactElement } from "react"
import Section from "../Section/Section"
import BlogLatestItem from "./BlogLatestItem/BlogLatestItem"
// LATEST FROM BLOG
// START YOU DAY WITH FRESH AND LATEST NEWS

const BlogLatest = (): ReactElement => {
    return (
        <Section headerText="LATEST FROM BLOG">
            <Grid item lg={4} md={6} mb={3.75}>
                <BlogLatestItem />
            </Grid>
        </Section>
    )
}

export default BlogLatest;