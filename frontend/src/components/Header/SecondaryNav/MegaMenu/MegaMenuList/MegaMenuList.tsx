import { FC, ReactElement } from "react";

interface MegaMenuListProps {
    items: any[],
    isDropdownOpen: (index: number) => string,
    openDropdown: (index: number) => void,

}

const MegaMenuList: FC<MegaMenuListProps> = (props): ReactElement => {
    return (
        <div className="mega-menu-list">
            <ul>
                {props.items.map((item, index) => (
                    <li key={index} className={props.isDropdownOpen(index)} onMouseEnter={() => props.openDropdown(index)}>
                        <a href="#">
                            <i className={item.icon} />
                            <span>{item.title}</span>
                        </a>
                        <span className="js-menu-toggle js-toggle-mark" />
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MegaMenuList;