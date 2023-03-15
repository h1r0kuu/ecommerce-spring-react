import { ReactElement } from "react";
import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Filters from "../../components/Filters/Filters";
import Header from "../../components/Header/Header";
import ProductList from "../../components/Lists/ProductList/ProductList";
import ProductListToolbar from "../../components/Lists/ProductList/ProductListToolbar/ProductListToolbar";
import PageWrapper from "../../components/PageWrapper/PageWrapper";

const ProductListPage = (): ReactElement => {
    return (
        <PageWrapper>
            <div className="u-s-p-y-90">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-12">
                            <Filters />
                        </div>
                        <div className="col-lg-9 col-md-12">
                            <div className="shop-p">
                                <ProductListToolbar />
                                <ProductList />
                                <div className="u-s-p-y-60">
                                    <div className="shop-p__pagination">

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    )
}

export default ProductListPage;