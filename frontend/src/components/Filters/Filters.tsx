import { ReactElement } from "react";

import { MDBCard } from "mdb-react-ui-kit";
import { Accordion } from "react-bootstrap";
import Price from "./Price/Price";
import RelatedItems from "./RelatedItems/RelatedItems";
import Brands from "./Brands/Brands";
import Ratings from "./Ratings/Ratings";


const Filters = (): ReactElement => {
    return (
        <MDBCard className="collapse d-lg-block mb-5">
            <Accordion>
                <RelatedItems />
                <Brands />
                <Price />
                {/* Size */}
                <Ratings />
            </Accordion>
        </MDBCard>
    )
}

export default Filters