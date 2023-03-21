import { MDBContainer } from "mdb-react-ui-kit"
import React from "react";
import { FC, ReactElement, ReactNode } from "react"
import BreadcrumbsItem, { BreadcrumbsItemProps } from "./BreadcrumbsItem/BreadcrumbsItem";

interface BreadcrumbsProps {
    title?: string,
    children: ReactNode
}

const Breadcrumbs: FC<BreadcrumbsProps> = ({ title, children }): ReactElement => {

    const breadcrumbArray = React.Children.toArray(children);
    const isValid = breadcrumbArray.every(
        (child) => React.isValidElement(child) && child.type === BreadcrumbsItem
    );

    if (!isValid) {
        throw new Error('Breadcrumbs component only accepts children of type BreadcrumbsItem');
    }

    const breadcrumbItems = breadcrumbArray.map((child, index) => {
        const isLastItem = index === breadcrumbArray.length - 1;
        return React.cloneElement(child as ReactElement<BreadcrumbsItemProps>, {
            active: isLastItem
        });
    });

    return (
        <div className="bg-primary mb-4">
            <MDBContainer className="py-4">
                {title &&
                    <h2 className="text-white mt-2">{title}</h2>
                }
                <nav className="d-flex">
                    <h6 className="mb-0">
                        {breadcrumbItems}
                    </h6>
                </nav>
            </MDBContainer>
        </div>
    )
}

export default Breadcrumbs