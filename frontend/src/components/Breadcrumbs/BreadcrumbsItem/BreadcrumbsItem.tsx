import { FC, ReactElement } from "react"
import { Link } from "react-router-dom"

export interface BreadcrumbsItemProps {
    active?: boolean,
    title: string
}

const BreadcrumbsItem: FC<BreadcrumbsItemProps> = ({ active, title }): ReactElement => {
    return (
        <>
            {active ?
                <Link to={"#"} className="text-white">{title}</Link>
                :
                <>
                    <Link to={"#"} className="text-white-50">{title}</Link>
                    <span className="text-white-50 mx-2"> &gt; </span>
                </>
            }
        </>
    )
}

export default BreadcrumbsItem