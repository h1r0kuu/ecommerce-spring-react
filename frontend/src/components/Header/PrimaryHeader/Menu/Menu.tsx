import { ReactElement } from "react";
import { faUserAlt, faShoppingCart, faUserCircle } from "@fortawesome/free-solid-svg-icons"
import MenuItem from "./MenuItem/MenuItem";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { ACCOUNT, CART, LOGIN, WISHLIST } from "../../../../utils/pathConstants";

const Menu = (): ReactElement => {
    return (
        <div className="d-flex float-end">
            <MenuItem link={ACCOUNT} icon={faUserCircle} text={"Account"} />
            <MenuItem link={LOGIN} icon={faUserAlt} text={"Sign in"} />
            <MenuItem link={WISHLIST} icon={faHeart} text={"Wishlist"} />
            <MenuItem link={CART} icon={faShoppingCart} text={"My Cart"} />
        </div>
    )
}

export default Menu