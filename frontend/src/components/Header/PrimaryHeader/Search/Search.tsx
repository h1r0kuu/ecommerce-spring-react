import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { ReactElement } from "react"
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import { MDBInputGroup } from "mdb-react-ui-kit";

const Search = (): ReactElement => {
    return (
        <MDBInputGroup className="float-center">
            <div className="form-outline">
                <Form.Control />
                <Form.Label>Search</Form.Label>
            </div>
            <Button variant="primary" className="shadow-0">
                <FontAwesomeIcon icon={faSearch} />
            </Button>
        </MDBInputGroup>
    )
}

export default Search