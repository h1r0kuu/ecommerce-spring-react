import { Container } from "@mui/material";
import { ReactElement } from "react";
import { Link, NavLink } from "react-router-dom";
import { CART, CHECKOUT, HOME, WISHLIST } from "../../../utils/pathConstants";
import DropdownMenu from "./DropdownMenu/DropdownMenu";
import MegaMenu from "./MegaMenu/MegaMenu";
import Menu from "./Menu/Menu";
import MenuItem from "./Menu/MenuItem/MenuItem";
import MiniCart from "./MiniCart/MiniCart";
import SubDropdownMenu from "./SubDropdownMenu/SubDropdownMenu";

const SecondaryNav = (): ReactElement => {
    return (
        <nav className="secondary-nav-wrapper">
            <Container>
                {/*====== Secondary Nav ======*/}
                <div className="secondary-nav">
                    {/*====== Dropdown Main plugin ======*/}
                    <div className="menu-init" id="navigation1">
                        <button
                            className="btn btn--icon toggle-mega-text toggle-button"
                            type="button"
                        >
                            M
                        </button>
                        {/*====== Menu ======*/}
                        <MegaMenu />
                        {/*====== End - Menu ======*/}
                    </div>
                    {/*====== End - Dropdown Main plugin ======*/}
                    {/*====== Dropdown Main plugin ======*/}
                    <Menu>
                        <MenuItem link={"dsa"} title={"NEW ARIVALS"} />
                        <DropdownMenu title={"PAGES"}>
                            <SubDropdownMenu title="Home">
                                <MenuItem title="Home1" link="#" />
                                <MenuItem title="Home1" link="#" />
                            </SubDropdownMenu>
                            <MenuItem title="Home1" link="#" />
                        </DropdownMenu>
                        <MenuItem link={"dsa"} title={"NEW ARIVALS"} />
                        <MenuItem link={"dsa"} title={"NEW ARIVALS"} />
                    </Menu>
                    {/*====== End - Dropdown Main plugin ======*/}
                    {/*====== Dropdown Main plugin ======*/}
                    <div className="menu-init" id="navigation3">
                        <button
                            className="btn btn--icon toggle-button toggle-button--secondary fas fa-shopping-bag toggle-button-shop"
                            type="button"
                        />
                        <span className="total-item-round">2</span>
                        {/*====== Menu ======*/}
                        <div className="ah-lg-mode">
                            <span className="ah-close">✕ Close</span>
                            {/*====== List ======*/}
                            <ul className="ah-list ah-list--design1 ah-list--link-color-secondary">
                                <li>
                                    <NavLink to={HOME} className={({ isActive }) => isActive ? "u-c-brand" : ""} >
                                        <i className="fas fa-home " />
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to={WISHLIST} className={({ isActive }) => isActive ? "u-c-brand" : ""} >
                                        <i className="far fa-heart" />
                                    </NavLink>
                                </li>
                                <li className="has-dropdown">
                                    <a className="mini-cart-shop-link">
                                        <i className="fas fa-shopping-bag" />
                                        <span className="total-item-round">2</span>
                                    </a>
                                    {/*====== Dropdown ======*/}
                                    <span className="js-menu-toggle" />
                                    <MiniCart />
                                    {/*====== End - Dropdown ======*/}
                                </li>
                            </ul>
                            {/*====== End - List ======*/}
                        </div>
                        {/*====== End - Menu ======*/}
                    </div>
                    {/*====== End - Dropdown Main plugin ======*/}
                </div>
                {/*====== End - Secondary Nav ======*/}
            </Container>
        </nav >
    )
}

export default SecondaryNav;