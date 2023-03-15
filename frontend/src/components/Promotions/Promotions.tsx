import { Box } from "@mui/material";
import { ReactElement } from "react";
import SectionContent from "../Section/SectionContent/SectionContent";
import Promotion from "./Promotion/Promotion";

const Promotions = (): ReactElement => {
    return (
        <Box pb={7.5}>
            <SectionContent>
                <Promotion />
            </ SectionContent>
        </Box>

    )
}

export default Promotions;