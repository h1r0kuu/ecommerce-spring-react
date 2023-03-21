import { ReactElement } from "react";
import Navigation from "./Navigation/Navigation";
import PrimaryHeader from "./PrimaryHeader/PrimaryHeader";

const Header = (): ReactElement => {
    return (
        <header>
            <PrimaryHeader />
            <Navigation />
        </header>
    )
}

export default Header