import { Box } from "@mui/material";
import { FC, ReactElement, ReactNode } from "react";
import AhClose from "./AhClose/AhClose";
import AhLgMode from "./AhLgMode/AhLgMode";
import { useMenuInitStyles } from "./useMenuInitStyles";

interface MenuInitProps {
    children: ReactNode
}

const MenuInit: FC<MenuInitProps> = ({ children }): ReactElement => {
    const classes = useMenuInitStyles()

    return (
        <div>
            <button className="btn btn--icon toggle-button toggle-button--secondary fas fa-cogs" type="button" />
            <AhLgMode>
                <AhClose />
                {children}
            </AhLgMode>
        </div>
    )
}

export default MenuInit