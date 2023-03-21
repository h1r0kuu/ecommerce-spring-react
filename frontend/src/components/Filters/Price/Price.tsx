import { MDBCol, MDBRow } from "mdb-react-ui-kit";
import { ReactElement } from "react";
import { Badge, Form, FormCheck, InputGroup } from "react-bootstrap";
import FiltersWrapper from "../FiltersWrapper/FiltersWrapper";

const Price = (): ReactElement => {
    return (
        <FiltersWrapper title={"Price"}>
            <div className="range">
                <Form.Range />
            </div>
            <MDBRow className="mb-3">
                <MDBCol className="col-6">
                    <p className="mb-0">Min</p>
                    <div className="form-outline">
                        <Form.Control />
                        <Form.Label>$0</Form.Label>
                    </div>
                </MDBCol>
                <MDBCol className="col-6">
                    <p className="mb-0">Max</p>
                    <div className="form-outline">
                        <Form.Control />
                        <Form.Label>$1,000</Form.Label>
                    </div>
                </MDBCol>
            </MDBRow>
        </FiltersWrapper>
    )
}

export default Price