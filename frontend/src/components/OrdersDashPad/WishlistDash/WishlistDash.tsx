import { ReactElement } from "react";

const WishlistDash = (): ReactElement => {
    return (
        <li>
            <div className="dash__w-wrap">
                <span className="dash__w-icon dash__w-icon-style-3">
                    <i className="far fa-heart" />
                </span>
                <span className="dash__w-text">0</span>
                <span className="dash__w-name">Wishlist</span>
            </div>
        </li>
    )
}

export default WishlistDash