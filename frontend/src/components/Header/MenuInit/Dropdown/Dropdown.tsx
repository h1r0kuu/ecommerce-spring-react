import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import { Children, FC, ReactElement, ReactNode } from "react";
import { Link } from "react-router-dom";
import { useGlobalStyles } from "../../../../utils/useGlobalStyles";

interface DropdownProps {
    title?: string,
    icon?: IconProp,
    children: ReactNode,
    right?: boolean,
    width?: string,
    className?: string,
    tooltip?: boolean
}

const Dropdown: FC<DropdownProps> = ({ title, icon, children, right, width, className, tooltip }): ReactElement => {
    const globalClasses = useGlobalStyles()
    const renderContent = () => {
        return (
            <>
                {
                    icon &&
                    <Link to={'#'}>
                        {(title && !tooltip) &&
                            <span className={globalClasses.usmr8}>{title}</span>
                        }
                        <FontAwesomeIcon icon={icon} />
                    </Link>
                }
                {
                    Children.count(children) > 0 &&
                    <ul style={{
                        width: width || '120px'
                    }}>
                        {children}
                    </ul>
                }
            </>
        )
    }
    return (
        <>
            {(tooltip && title) ?
                <Tooltip title={title} placement={"left"} arrow={true}>
                    <li className={className}>
                        {renderContent()}
                    </li>
                </Tooltip>
                :
                <li className={className}>
                    {renderContent()}
                </li>
            }
        </>
    )
}

export default Dropdown