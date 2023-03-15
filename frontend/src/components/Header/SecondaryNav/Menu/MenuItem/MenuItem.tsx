import { NavLink } from "react-router-dom";
import { FC, ReactElement } from "react";

interface MenuItemProps {
    link: string,
    title: string
}

const MenuItem: FC<MenuItemProps> = (props): ReactElement => {
    return (
        <li>
            <NavLink to={props.link}>{props.title}</NavLink>
        </li>
    )
}

export default MenuItem;