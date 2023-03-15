import { ReactElement } from "react";
import SecondaryNav from "./SecondaryNav/SecondaryNav";
import PrimaryNav from "./PrimaryNav/PrimaryNav";
import { useHeaderStyles } from "./useHeaderStyles";

const Header = (): ReactElement => {
    const classes = useHeaderStyles()

    return (
        <header className={classes.header}>
            <PrimaryNav />
            <SecondaryNav />
        </header>
    )
}

export default Header