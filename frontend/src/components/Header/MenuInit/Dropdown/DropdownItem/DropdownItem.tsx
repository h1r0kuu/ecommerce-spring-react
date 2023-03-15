import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Tooltip } from "@mui/material";
import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useGlobalStyles } from "../../../../../utils/useGlobalStyles";

interface DropdownItemProps {
    title?: string,
    href?: string,
    icon?: IconProp,
    position?: 'left' | 'right',
    tooltip?: boolean
}

const DropdownItem: FC<DropdownItemProps> = ({ title, href, icon, position, tooltip }): ReactElement => {
    const globalClasses = useGlobalStyles()

    const renderContent = () => {
        return (
            <Link to={href || '#'}>
                {position === 'left' &&
                    <span className={globalClasses.usmr8}>{title}</span>
                }

                {(!icon && title) &&
                    <Link to={'#'}>{title}</Link>
                }

                {icon &&
                    <FontAwesomeIcon icon={icon} />
                }
                {position === 'right' &&
                    <span className={globalClasses.usml6}>{title}</span>
                }
            </Link>
        )
    }

    return (
        <>
            {(tooltip && title) ?
                <Tooltip title={title} placement={"left"} arrow={true}>
                    <li>
                        {renderContent()}
                    </li>
                </Tooltip>
                :
                <li>
                    {renderContent()}
                </li>
            }
        </>
    )
}

export default DropdownItem