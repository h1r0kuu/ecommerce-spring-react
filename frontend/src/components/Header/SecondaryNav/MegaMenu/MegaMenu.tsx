import { ReactElement, useState } from "react";
import MegaMenuContent from "./MegaMenuContent/MegaMenuContent";
import MegaMenuList from "./MegaMenuList/MegaMenuList";

const MegaMenu = (): ReactElement => {
    const [dropdownIndex, setDropdownIndex] = useState(0)
    const [menuOpen, setMenuOpen] = useState(false)

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const isMenuOpen = () => {
        return menuOpen === true ? "js-open" : ""
    }

    const openDropdown = (index: number) => {
        setDropdownIndex(index)
    }

    const isDropdownOpen = (index: number) => {
        return dropdownIndex === index ? "js-active" : ""
    }

    const menuItems = [
        {
            title: "Electronics",
            icon: "fas fa-tv u-s-m-r-6",
            href: "/ds",
            subMenu: [
                {
                    title: " 3D PRINTER SUPPLIES",
                    href: "/ds",
                    subMenu: [
                        {
                            title: "3d Printing Pen",
                            href: "/dasvcx",
                        },
                        {
                            title: "3d Printing Accessories",
                            href: "/czxczx"
                        }
                    ],
                },
                {
                    title: " 3D PRINTER SUPPLIES",
                    href: "/ds",
                    subMenu: [
                        {
                            title: "3d Printing Pen",
                            href: "/dasvcx",
                        },
                        {
                            title: "3d Printing Accessories",
                            href: "/czxczx"
                        }
                    ],
                },
                {
                    title: " 3D PRINTER SUPPLIES",
                    href: "/ds",
                    subMenu: [
                        {
                            title: "3d Printing Pen",
                            href: "/dasvcx",
                        },
                        {
                            title: "3d Printing Accessories",
                            href: "/czxczx"
                        }
                    ],
                },
                {
                    title: " 3D PRINTER SUPPLIES",
                    href: "/ds",
                    subMenu: [
                        {
                            title: "3d Printing Pen",
                            href: "/dasvcx",
                        },
                        {
                            title: "3d Printing Accessories",
                            href: "/czxczx"
                        }
                    ],
                },
                {
                    title: " 3D PRINTER SUPPLIES",
                    href: "/ds",
                    subMenu: [
                        {
                            title: "3d Printing Pen",
                            href: "/dasvcx",
                        },
                        {
                            title: "3d Printing Accessories",
                            href: "/czxczx"
                        }
                    ],
                },
                {
                    title: " 3D PRINTER SUPPLIES",
                    href: "/ds",
                    subMenu: [
                        {
                            title: "3d Printing Pen",
                            href: "/dasvcx",
                        },
                        {
                            title: "3d Printing Accessories",
                            href: "/czxczx"
                        }
                    ],
                },
                {
                    title: " HOME AUDIO &amp; VIDEO",
                    href: "/home",
                    submenu: [
                        {
                            title: " TC Receiver &amp; Accessories",
                            href: "/dasdsa",
                        },
                        {
                            title: " Display Dongle",
                            href: "/czxcxza",
                        }
                    ]
                }
            ],
            banners: [
                {
                    href: "",
                    src: "images/banners/banner-mega-7.jpg"
                }
            ]
        },
        {
            title: "Women clothis",
            icon: "fas fa-tv u-s-m-r-6",
            href: "/ds",
            subMenu: [],
            banners: []
        }
    ]

    return (
        <div className="ah-lg-mode">
            <span className="ah-close">✕ Close</span>
            {/*====== List ======*/}
            <ul className="ah-list">
                <li className="has-dropdown">
                    <span className={`mega-text ${isMenuOpen()}`} onClick={() => toggleMenu()}>M</span>
                    {/*====== Mega Menu ======*/}
                    <span className="js-menu-toggle" />
                    <div className="mega-menu">
                        <div className="mega-menu-wrap">
                            <MegaMenuList items={menuItems} isDropdownOpen={isDropdownOpen} openDropdown={openDropdown} />
                            {/*====== Electronics ======*/}
                            {menuItems.map((item, menuIndex) => (
                                <MegaMenuContent key={menuIndex} item={item} activeDropdownIndex={menuIndex} isDropdownOpen={isDropdownOpen} />
                            ))}
                        </div>
                    </div>
                    {/*====== End - Mega Menu ======*/}
                </li>
            </ul>
            {/*====== End - List ======*/}
        </div>
    )
}

export default MegaMenu;