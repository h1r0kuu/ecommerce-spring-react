import { FC, ReactElement } from "react";

interface SubMegaMenuContentProps {
    title: string,
    subMenu: any
}

const SubMegaMenuContent: FC<SubMegaMenuContentProps> = (props): ReactElement => {
    return (
        <div className="col-lg-3">
            <ul>
                <li className="mega-list-title">
                    <a href="#">
                        {props.title}
                    </a>
                </li>
                {props.subMenu?.map((subsubitem: any, index: number) => (
                    <li key={index}>
                        <a href="#">{subsubitem.title}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SubMegaMenuContent;