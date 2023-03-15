import { FC, ReactElement, ReactNode } from "react";

interface MenuPros {
    children: ReactNode
}

const Menu: FC<MenuPros> = (props): ReactElement => {
    return (
        <div className="menu-init" id="navigation2">
            <button
                className="btn btn--icon toggle-button toggle-button--secondary fas fa-cog"
                type="button"
            />
            {/*====== Menu ======*/}
            <div className="ah-lg-mode">
                <span className="ah-close">✕ Close</span>
                {/*====== List ======*/}
                <ul className="ah-list ah-list--design2 ah-list--link-color-secondary">
                    {props.children}
                </ul>
                {/*====== End - List ======*/}
            </div>
            {/*====== End - Menu ======*/}
        </div>
    )
}

export default Menu;
