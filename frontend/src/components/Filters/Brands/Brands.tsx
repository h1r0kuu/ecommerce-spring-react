import { ReactElement } from "react"
import { Badge, FormCheck } from "react-bootstrap"
import FiltersWrapper from "../FiltersWrapper/FiltersWrapper"

const Brands = (): ReactElement => {
    return (
        <FiltersWrapper title="Brands">
            <div>
                <FormCheck>
                    <FormCheck.Input />
                    <FormCheck.Label>Mercedes</FormCheck.Label>
                    <Badge bg="secondary float-end" >56</Badge>
                </FormCheck>
            </div>
        </FiltersWrapper>
    )
}

export default Brands