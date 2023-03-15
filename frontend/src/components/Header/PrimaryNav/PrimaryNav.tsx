import { faEnvelope, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faLock, faLockOpen, faPhoneVolume, faUserPlus, faUserCircle as solidUserCircle, faUserCog, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@mui/material";
import { ReactElement } from "react";
import AhList from "../MenuInit/AhList/AhList";
import { useAhListStyles } from "../MenuInit/AhList/useAhListStyles";
import Dropdown from "../MenuInit/Dropdown/Dropdown";
import DropdownItem from "../MenuInit/Dropdown/DropdownItem/DropdownItem";
import { useDropdownStyles } from "../MenuInit/Dropdown/useDropdownStyles";
import MenuInit from "../MenuInit/MenuInit";
import Logo from "./Logo/Logo";
import SearchForm from "./SearchForm/SearchForm";
import { useTopHeaderStyles } from "./useTopHeaderStyles";

const PrimaryNav = (): ReactElement => {
    const classes = useTopHeaderStyles()
    const ahListClasses = useAhListStyles()
    const dropdownClasses = useDropdownStyles()

    return (
        <nav className={`${classes.primaryNav} ${classes.primatyNavBorder}`}>
            <Container>
                <div className={classes.primaryNav}>
                    <Logo />
                    <SearchForm />
                    <MenuInit>
                        <AhList className={`${ahListClasses.ahList} ${ahListClasses.ahListDesignFirst} ${ahListClasses.ahListColorSecondary}`}>
                            <Dropdown title="Account" icon={faUserCircle} className={dropdownClasses.hasDropdown} tooltip>
                                <DropdownItem title="Account" position="right" icon={solidUserCircle} />
                                <DropdownItem title="Signin" position="right" icon={faUserPlus} />
                                <DropdownItem title="Signup" position="right" icon={faLock} />
                                <DropdownItem title="Signout" position="right" icon={faLockOpen} />
                            </Dropdown>
                            <Dropdown title="Settings" icon={faUserCog} className={dropdownClasses.hasDropdown} tooltip>
                                <Dropdown icon={faAngleDown} title="Language" right className={`${dropdownClasses.hasDropdown} ${dropdownClasses.hasDropdownRight}`}>
                                    <DropdownItem title="ENGLISH" />
                                    <DropdownItem title="ARABIC" />
                                    <DropdownItem title="FRANCAIS" />
                                    <DropdownItem title="ESPANOL" />
                                </Dropdown>
                                <Dropdown icon={faAngleDown} title="Currency" right width="225px" className={`${dropdownClasses.hasDropdown} ${dropdownClasses.hasDropdownRight}`}>
                                    <DropdownItem title="$ - US DOLLAR" />
                                    <DropdownItem title="£ - BRITISH POUND STERLING" />
                                    <DropdownItem title="€ - EURO" />
                                </Dropdown>
                            </Dropdown>
                            <DropdownItem title="Phone" icon={faPhoneVolume} tooltip />
                            <DropdownItem title="Email" icon={faEnvelope} tooltip />
                        </AhList>
                    </MenuInit>
                </div>
            </Container>
        </nav >
    )
}

export default PrimaryNav;