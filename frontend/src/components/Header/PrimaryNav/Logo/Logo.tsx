import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { HOME } from "../../../../utils/pathConstants";
import { useLogoStyles } from "./useLogoStyles";

const Logo = (): ReactElement => {
    const classes = useLogoStyles()

    return (
        <Link to={HOME} className={classes.logo}>
            <img src="images/logo/logo-1.png" alt="" />
        </Link>
    )
}

export default Logo