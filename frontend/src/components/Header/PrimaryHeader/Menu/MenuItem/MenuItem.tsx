import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";

interface MenuItemProps {
    link: string,
    icon: IconProp,
    text: string
}

const MenuItem: FC<MenuItemProps> = ({ link, icon, text }): ReactElement => {
    return (
        <Link to={link} className="me-1 border rounded py-1 px-3 nav-link d-flex align-items-center">
            <FontAwesomeIcon icon={icon} className="m-1 me-md-2" />
            <p className="d-none d-md-block mb-0">{text}</p>
        </Link >
    )
}

export default MenuItem