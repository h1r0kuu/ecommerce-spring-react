import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { ReactElement } from "react";
import Breadcrumbs from "../../../components/Breadcrumbs/Breadcrumbs";
import BreadcrumbsItem from "../../../components/Breadcrumbs/BreadcrumbsItem/BreadcrumbsItem";
import Filters from "../../../components/Filters/Filters";
import ProductList from "../../../components/Lists/ProductList";
import Pagination from "../../../components/Pagination/Pagination";
import Wrapper from "../../../components/Wrapper/Wrapper";

const ProductListPage = (): ReactElement => {
    return (
        <Wrapper>
            <Breadcrumbs title="dsa">
                <BreadcrumbsItem title="dsa" />
                <BreadcrumbsItem title="dsa" />
                <BreadcrumbsItem title="dsa" />
                <BreadcrumbsItem title="dsa" />
            </Breadcrumbs>
            <section>
                <MDBContainer>
                    <MDBRow>
                        <MDBCol lg={3}>
                            <Filters />
                        </MDBCol>
                        <MDBCol lg={9}>
                            <ProductList />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                <Pagination />
            </section>
        </Wrapper>
    )
}

export default ProductListPage