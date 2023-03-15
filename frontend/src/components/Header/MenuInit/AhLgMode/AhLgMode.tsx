import { FC, ReactElement, ReactNode } from "react";
import { useAhLgMode } from "./useAhLgMode";

interface AhLgModeProps {
    children: ReactNode
}

const AhLgMode: FC<AhLgModeProps> = ({ children }): ReactElement => {
    const classes = useAhLgMode()
    return (
        <div className={classes.ahLgMode}>
            {children}
        </div>
    )
}

export default AhLgMode