import { FC, ReactElement } from "react";
import { Link } from "react-router-dom";
import { useBreadcrumbStyles } from "./useBreadcrumStyles";

export interface BreadcrumbProps {
    isActive: boolean,
    link: string,
    label: string
}

const Breadcrumb: FC<BreadcrumbProps> = ({ isActive, link, label }): ReactElement => {
    const classes = useBreadcrumbStyles()

    const activeClass = isActive ? classes.isMarked : classes.hasSeparator

    return (
        <li className={activeClass}>
            <Link to={link} className={classes.breadCrumbText}>
                {label}
            </Link>
        </li>
    )
}

export default Breadcrumb;