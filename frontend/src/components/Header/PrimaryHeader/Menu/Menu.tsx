import { ReactElement } from "react";
import { faUserAlt, faShoppingCart } from "@fortawesome/free-solid-svg-icons"
import MenuItem from "./MenuItem/MenuItem";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { CART, LOGIN } from "../../../../utils/pathConstants";

const Menu = (): ReactElement => {
    return (
        <div className="d-flex float-end">
            <MenuItem link={LOGIN} icon={faUserAlt} text={"Sign in"} />
            <MenuItem link={""} icon={faHeart} text={"Wishlist"} />
            <MenuItem link={CART} icon={faShoppingCart} text={"My Cart"} />
        </div>
    )
}

export default Menu