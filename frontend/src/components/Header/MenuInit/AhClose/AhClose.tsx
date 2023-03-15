import { ReactElement } from "react";
import { useAhCloseStyles } from "./useAhCloseStyles";

const AhClose = (): ReactElement => {
    const classes = useAhCloseStyles()

    return (
        <span className={classes.ahClose}>✕ Close</span>
    )
}

export default AhClose