import { ReactElement, useState } from "react";
import { Route, Routes } from 'react-router-dom';
import { HOME, PRODUCT_DETAILS, CART, CHECKOUT, WISHLIST, SIGNIN, SIGNUP, FORGOT_PASSWORD, ACCOUNT, PROFILE, EDIT_PROFILE, ADDRESS_BOOK, EDIT_ADDRESS, ADD_ADDRESS, PRODUCT_LIST, ORDERS, TRACK_ORDER } from "./utils/pathConstants";
import Home from "./pages/Home/Home"
import ProductDetails from "./pages/Product/ProductDetails/ProductDetails";
import Cart from "./pages/Customer/Cart/Cart";
import Checkout from "./pages/Checkout/Checkout";
import WishlistPage from "./pages/Customer/WishlistPage/WishlistPage";
import Signin from "./pages/Auth/Signin/Signin";
import Signup from "./pages/Auth/Signup/Signup";
import ForgotPassword from "./pages/Auth/ForgotPassword/ForgotPassword";
import ManageAccount from "./pages/Account/ManageAccount/ManageAccount";
import MyProfile from "./pages/Account/MyProfile/MyProfile";
import EditProfile from "./pages/Account/EditProfile/EditProfile";
import EditAddressBook from "./pages/Account/AddressBook/EditAddressBook/EditAddressBook";
import AddNewAddress from "./pages/Account/AddressBook/AddNewAddress/AddNewAddress";
import ProductListPage from "./pages/Product/ProductListPage";
import MyOrders from "./pages/Account/MyOrders/MyOrders";
import TrackOrder from "./pages/Account/TrackOrder/TrackOrder";
import { Theme, ThemeProvider } from "@mui/material";
import defaultTheme from "./theme";

const App = (): ReactElement => {

  const [theme, setTheme] = useState<Theme>(defaultTheme)

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path={HOME} element={<Home />} />

        <Route path={"/1"} element={<ProductListPage />} />

        <Route path={PRODUCT_DETAILS} element={<ProductDetails />} />
        <Route path={PRODUCT_LIST} element={<ProductListPage />} />

        <Route path={CART} element={<Cart />} />
        <Route path={CHECKOUT} element={<Checkout />} />
        <Route path={WISHLIST} element={<WishlistPage />} />

        <Route path={ACCOUNT} element={<ManageAccount />} />
        <Route path={PROFILE} element={<MyProfile />} />
        <Route path={EDIT_PROFILE} element={<EditProfile />} />

        <Route path={ORDERS} element={<MyOrders />} />
        <Route path={TRACK_ORDER} element={<TrackOrder />} />

        <Route path={EDIT_ADDRESS} element={<EditAddressBook />} />
        <Route path={ADD_ADDRESS} element={<AddNewAddress />} />

        <Route path={SIGNIN} element={<Signin />} />
        <Route path={SIGNUP} element={<Signup />} />
        <Route path={FORGOT_PASSWORD} element={<ForgotPassword />} />
      </Routes>
    </ThemeProvider>
  )
}

export default App;
