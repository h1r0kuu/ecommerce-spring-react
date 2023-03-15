import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FC, ReactElement, ReactNode } from "react"
import { useGlobalStyles } from "../../../utils/useGlobalStyles";
import { useFilterOptionWrapperStyles } from "./useFilterOptionWrapperStyles";

interface FilterOptionWrapperProps {
    title: string,
    children: ReactNode
}

const FilterOptionWrapper: FC<FilterOptionWrapperProps> = ({ title, children }): ReactElement => {
    const globalStyles = useGlobalStyles()
    const classes = useFilterOptionWrapperStyles()

    return (
        <div className={globalStyles.usmb30}>
            <div className={classes.filterStyle}>
                <div className="shop-w__intro-wrap">
                    <h1 className={classes.filterHeader}>{title}</h1>
                    <FontAwesomeIcon icon={faMinus} className={classes.toggleBtn} />
                </div>
                <div className={`${classes.wrapper} collapse show`}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default FilterOptionWrapper;