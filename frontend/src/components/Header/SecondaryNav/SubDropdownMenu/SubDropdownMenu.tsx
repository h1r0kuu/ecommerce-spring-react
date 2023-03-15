import { FC, ReactElement, ReactNode } from "react";

interface SubDropdownMenuProps {
    title: string,
    children: ReactNode
}

const SubDropdownMenu: FC<SubDropdownMenuProps> = (props): ReactElement => {
    return (
        <li className="has-dropdown has-dropdown--ul-left-100">
            <a>
                {props.title}
                <i className="fas fa-angle-down i-state-right u-s-m-l-6" />
            </a>
            {/*====== Dropdown ======*/}
            <span className="js-menu-toggle" />
            <ul style={{ width: 118 }}>
                {props.children}
            </ul>
            {/*====== End - Dropdown ======*/}
        </li>
    )
}

export default SubDropdownMenu;