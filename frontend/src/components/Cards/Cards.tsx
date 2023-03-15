import { faHeadphonesAlt, faRedo, faTruck } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
import { ReactElement } from "react";
import SectionContent from "../Section/SectionContent/SectionContent";
import CardElem from "./CardElem/CardElem";

const Cards = (): ReactElement => {
    return (
        <Box pb={7.5}>
            <div className="u-s-p-b-60">
                <SectionContent>
                    {/* fas fa-truck */}
                    {/* Free Shipping */}
                    {/* Free shipping on all US order or order above $200 */}
                    <CardElem text={"Free Shipping"} subtext={"Free shipping on all US order or order above $200"} icon={faTruck} />
                    <CardElem text={"Shop with Confidence"} subtext={"Our Protection covers your purchase from click to delivery"} icon={faRedo} />
                    <CardElem text={"24/7 Help Center"} subtext={"Round-the-clock assistance for a smooth shopping experience"} icon={faHeadphonesAlt} />
                </SectionContent>
            </div>
        </Box>
    )
}

export default Cards;