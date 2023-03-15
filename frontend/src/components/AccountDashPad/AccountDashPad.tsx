import { ReactElement } from "react";
import { NavLink } from "react-router-dom";
import { ACCOUNT, ADDRESS_BOOK, ORDERS, PROFILE, TRACK_ORDER } from "../../utils/pathConstants";
import { useGlobalStyles } from "../../utils/useGlobalStyles";
import { useAccountDashPadStyles } from "./useAccountDashPadStyles";

const AccountDashPad = (): ReactElement => {
    const globalClasses = useGlobalStyles()
    const classes = useAccountDashPadStyles()

    const activeClassName = classes.dashActive

    return (
        <div className={`${classes.dashBoxBgWhite} ${classes.dashBoxShadow} ${globalClasses.usmb30}`}>
            <div className={classes.dashPad}>
                <span className={`${classes.dashText} ${globalClasses.usmb16}`}>Hello, John Doe</span>
                <ul className={classes.dashList}>
                    <li className={classes.dashListItem}>
                        <NavLink to={ACCOUNT} className={({ isActive }) => isActive ? `${classes.dashListItemText} ${activeClassName}` : classes.dashListItemText}>
                            Manage My Account
                        </NavLink>
                    </li>
                    <li className={classes.dashListItem}>
                        <NavLink to={PROFILE} className={({ isActive }) => isActive ? `${classes.dashListItemText} ${activeClassName}` : classes.dashListItemText}>
                            My Profile
                        </NavLink>
                    </li>
                    <li className={classes.dashListItem}>
                        <NavLink to={ADDRESS_BOOK} className={({ isActive }) => isActive ? `${classes.dashListItemText} ${activeClassName}` : classes.dashListItemText}>
                            Address Book
                        </NavLink>
                    </li>
                    <li className={classes.dashListItem}>
                        <NavLink to={TRACK_ORDER} className={({ isActive }) => isActive ? `${classes.dashListItemText} ${activeClassName}` : classes.dashListItemText}>
                            Track Order
                        </NavLink>
                    </li>
                    <li className={classes.dashListItem}>
                        <NavLink to={ORDERS} className={({ isActive }) => isActive ? `${classes.dashListItemText} ${activeClassName}` : classes.dashListItemText}>
                            My Orders
                        </NavLink>
                    </li>
                    <li className={classes.dashListItem}>
                        <NavLink to={ORDERS} className={({ isActive }) => isActive ? `${classes.dashListItemText} ${activeClassName}` : classes.dashListItemText}>
                            My Payment Options
                        </NavLink>
                    </li>
                    <li className={classes.dashListItem}>
                        <NavLink to={ORDERS} className={({ isActive }) => isActive ? `${classes.dashListItemText} ${activeClassName}` : classes.dashListItemText}>
                            My Returns &amp; Cancellations
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default AccountDashPad;