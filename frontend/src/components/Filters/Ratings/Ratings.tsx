import { ReactElement } from "react"
import { FormCheck } from "react-bootstrap"
import Stars from "../../Stars/Stars"
import FiltersWrapper from "../FiltersWrapper/FiltersWrapper"

const Ratings = (): ReactElement => {
    return (
        <FiltersWrapper title="Ratings">
            <FormCheck>
                <FormCheck.Input />
                <FormCheck.Label>
                    <Stars stars={5} />
                </FormCheck.Label>
            </FormCheck>
            <FormCheck>
                <FormCheck.Input />
                <FormCheck.Label>
                    <Stars stars={4} />
                </FormCheck.Label>
            </FormCheck>
            <FormCheck>
                <FormCheck.Input />
                <FormCheck.Label>
                    <Stars stars={3} />
                </FormCheck.Label>
            </FormCheck>
            <FormCheck>
                <FormCheck.Input />
                <FormCheck.Label>
                    <Stars stars={2} />
                </FormCheck.Label>
            </FormCheck>
            <FormCheck>
                <FormCheck.Input />
                <FormCheck.Label>
                    <Stars stars={1} />
                </FormCheck.Label>
            </FormCheck>
        </FiltersWrapper>
    )
}

export default Ratings