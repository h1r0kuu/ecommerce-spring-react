import { MDBPagination, MDBPaginationItem, MDBPaginationLink } from "mdb-react-ui-kit"
import { ReactElement } from "react"

const Pagination = (): ReactElement => {
    return (
        <div className="d-flex justify-content-center mt-3">
            <MDBPagination>
                <MDBPaginationItem disabled>
                    <MDBPaginationLink>
                        <span aria-hidden="true">«</span>
                    </MDBPaginationLink>
                </MDBPaginationItem>

                <MDBPaginationItem active>
                    <MDBPaginationLink>2</MDBPaginationLink>
                </MDBPaginationItem>

                <MDBPaginationItem>
                    <MDBPaginationLink>
                        <span aria-hidden="true">»</span>
                    </MDBPaginationLink>
                </MDBPaginationItem>
            </MDBPagination>
        </div>
    )
}

export default Pagination