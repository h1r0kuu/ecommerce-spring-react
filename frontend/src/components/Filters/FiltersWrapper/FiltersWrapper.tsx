import { FC, ReactElement, ReactNode } from "react"
import { AccordionButton, AccordionCollapse, Badge, FormCheck } from "react-bootstrap"
import AccordionBody from "react-bootstrap/esm/AccordionBody"
import AccordionHeader from "react-bootstrap/esm/AccordionHeader"
import AccordionItem from "react-bootstrap/esm/AccordionItem"

interface FiltersWrapperProps {
    title: string,
    children: ReactNode
}

const FiltersWrapper: FC<FiltersWrapperProps> = ({ title, children }): ReactElement => {
    return (
        <AccordionItem eventKey={""}>
            <AccordionHeader as={"h2"}>
                {title}
            </AccordionHeader>

            <AccordionCollapse eventKey={""} >
                <AccordionBody className="accordion-body">
                    {children}
                </AccordionBody>
            </AccordionCollapse>

        </AccordionItem>
    )
}

export default FiltersWrapper