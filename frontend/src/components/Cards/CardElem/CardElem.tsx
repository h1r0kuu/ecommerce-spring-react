import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@mui/material";
import { ReactElement, FC } from "react"
import { useGlobalStyles } from "../../../utils/useGlobalStyles";
import { useCardElemStyles } from "./useCardElemStyles";

interface CardElemProps {
    text: string,
    subtext: string,
    icon: IconProp
}

const CardElem: FC<CardElemProps> = ({ text, subtext, icon }): ReactElement => {
    const globalClasses = useGlobalStyles()
    const classes = useCardElemStyles()

    return (
        <Grid item lg={4} md={6} mb={3.75} pl={1.8}>
            <div className={`${classes.service} ${globalClasses.uh100}`}>
                <div className={classes.serviceIcon}>
                    <FontAwesomeIcon icon={icon} />
                </div>
                <div className="service__info-wrap">
                    <span className={classes.serviceInfoText1}>{text}</span>
                    <span className={classes.serviceInfoText2}>
                        {subtext}
                    </span>
                </div>
            </div>
        </Grid>
    )
}

export default CardElem;