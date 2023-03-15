import { Box, Container } from "@mui/material";
import React, { FC, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import SectionContent from "../Section/SectionContent/SectionContent";
import Breadcrumb from "./Breadcrumb/Breadcrumb";
import { useBreadCrumbsStyles } from "./useBreadCrumbsStyles";

interface BreadcrumbsProps {
    children: ReactNode
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ children }): ReactElement => {
    const classes = useBreadCrumbsStyles()

    const breadcrumbArray = React.Children.toArray(children);
    const isValid = breadcrumbArray.every(
        (child) => React.isValidElement(child) && child.type === Breadcrumb
    );

    if (!isValid) {
        throw new Error('Breadcrumbs component only accepts children of type Breadcrumb');
    }

    return (
        <Box py={7.5} >
            <Container>
                <div className={classes.breadcrumbWrap}>
                    <ul className={classes.breadcrumbList}>
                        {children}
                    </ul>
                </div>
            </Container>
        </Box>

    )
}

export default Breadcrumbs;