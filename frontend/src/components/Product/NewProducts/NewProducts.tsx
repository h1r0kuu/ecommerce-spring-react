import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { ReactElement } from "react";
import GridProductItem from "../GridProductItem/GridProductItem";

const NewProducts = (): ReactElement => {
    return (
        <section>
            <MDBContainer className="my-5">
                <div className="mb-4">
                    <h3>New Products</h3>
                </div>
                <MDBRow>
                    <GridProductItem />
                    <GridProductItem />
                    <GridProductItem />
                    <GridProductItem />
                    <GridProductItem />
                </MDBRow>
            </MDBContainer>
        </section>
    )
}

export default NewProducts