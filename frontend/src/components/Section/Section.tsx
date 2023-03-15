import { Box } from "@mui/material";
import { FC, ReactElement, ReactNode } from "react";
import SectionContent from "./SectionContent/SectionContent";
import SectionIntro from "./SectionIntro/SectionIntro";

interface SectionProps {
    children: ReactNode,
    headerText?: string,
    center?: boolean
}

const Section: FC<SectionProps> = ({ children, headerText, center }): ReactElement => {
    return (
        <Box pb={7.5}>
            {headerText &&
                <SectionIntro headerText={headerText} />
            }
            <SectionContent center={center}>
                {children}
            </SectionContent>
        </Box>
    )
}

export default Section