import { Box, Container, Grid } from "@mui/material";
import { FC, ReactElement } from "react";

interface SectionIntroProps {
    headerText: string,
    subHeaderText?: string
}

const SectionIntro: FC<SectionIntroProps> = (props): ReactElement => {
    return (
        <Box pb={7.5} className="section__intro">
            <Container>
                <Grid container>
                    <Grid item lg={12}>
                        <div className="section__text-wrap">
                            <h1 className="section__heading u-c-secondary">{props.headerText}</h1>
                            {props.subHeaderText &&
                                <span className="section__span u-c-silver">
                                    {props.subHeaderText}
                                </span>
                            }
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default SectionIntro;
