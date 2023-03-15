import { Container, Grid } from "@mui/material";
import { FC, ReactElement, ReactNode } from "react";

interface SectionContentProps {
    children: ReactNode,
    center?: boolean
}

const SectionContent: FC<SectionContentProps> = ({ children, center }): ReactElement => {
    return (
        <div className="section__content">
            <Container>
                <Grid container className={`${center && 'row--center'}`}>
                    {children}
                </Grid>
            </Container>
        </div >
    )
}

export default SectionContent;