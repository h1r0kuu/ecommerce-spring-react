import { ReactElement } from "react";

const CancelOrdersDash = (): ReactElement => {
    return (
        <li>
            <div className="dash__w-wrap">
                <span className="dash__w-icon dash__w-icon-style-2">
                    <i className="fas fa-times" />
                </span>
                <span className="dash__w-text">0</span>
                <span className="dash__w-name">Cancel Orders</span>
            </div>
        </li>
    )
}

export default CancelOrdersDash