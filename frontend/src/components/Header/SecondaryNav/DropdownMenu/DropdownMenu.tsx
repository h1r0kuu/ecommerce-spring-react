import { FC, ReactElement, ReactNode } from "react";

interface DropdownMenuProps {
    title: string,
    children: ReactNode
}

const DropdownMenu: FC<DropdownMenuProps> = (props): ReactElement => {
    return (
        <li className="has-dropdown">
            <a>
                {props.title}
                <i className="fas fa-angle-down u-s-m-l-6" />
            </a>
            {/*====== Dropdown ======*/}
            <span className="js-menu-toggle" />
            <ul style={{ width: 170 }}>
                {props.children}
            </ul>
        </li>
    )
}

export default DropdownMenu;