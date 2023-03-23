import { ReactElement } from "react"

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import ProductListPage from "./pages/Product/ProductListPage/ProductListPage";
import { ACCOUNT, CART, CHECKOUT, HOME, LOGIN, PRODUCT, PRODUCTS, REGISTRATION, WISHLIST } from "./utils/pathConstants";
import Cart from "./pages/Cart/Cart";
import ProductDetailsPage from "./pages/Product/ProductDetailsPage/ProductDetails";
import Checkout from "./pages/Checkout/Checkout";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Account from "./pages/Account/Account";
import Signin from "./pages/Auth/Signin/Signin";
import Signup from "./pages/Auth/Signup/Signup";
import Wishlist from "./pages/Account/Wishlist/Wishlist";

const App = (): ReactElement => {
    return (
        <Routes>
            <Route path={HOME} Component={Home} />
            <Route path={CART} Component={Cart} />
            <Route path={CHECKOUT} Component={Checkout} />

            <Route path={ACCOUNT} Component={Account} />
            <Route path={WISHLIST} Component={Wishlist} />

            <Route path={PRODUCTS} Component={ProductListPage} />
            <Route path={PRODUCT} Component={ProductDetailsPage} />

            <Route path={LOGIN} Component={Signin} />
            <Route path={REGISTRATION} Component={Signup} />
        </Routes>
    )
}

export default App