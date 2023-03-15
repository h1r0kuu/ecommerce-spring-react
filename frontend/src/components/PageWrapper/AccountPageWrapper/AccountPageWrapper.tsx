import { Box, Container, Grid } from "@mui/material";
import { FC, ReactElement, ReactNode } from "react";
import AccountDashPad from "../../AccountDashPad/AccountDashPad";
import Breadcrumb from "../../Breadcrumbs/Breadcrumb/Breadcrumb";
import Breadcrumbs from "../../Breadcrumbs/Breadcrumbs";
import OrdersDashPad from "../../OrdersDashPad/OrdersDashPad";
import SectionContent from "../../Section/SectionContent/SectionContent";
import PageWrapper from "../PageWrapper";

interface AccountPageWrapperProps {
    children: ReactNode
}

const AccountPageWrapper: FC<AccountPageWrapperProps> = ({ children }): ReactElement => {
    return (
        <PageWrapper>
            <Breadcrumbs>
                <Breadcrumb isActive={false} link={"/"} label={"Home"} />
                <Breadcrumb isActive={true} link={"#"} label={"My Account"} />
            </Breadcrumbs>
            {/*====== End - Section 1 ======*/}
            {/*====== Section 2 ======*/}
            <Box pb={7.5}>
                <SectionContent>
                    <Grid item lg={3} md={12}>
                        <AccountDashPad />
                        <OrdersDashPad />
                    </Grid>
                    <Grid item lg={9} md={12}>
                        {children}
                    </Grid>
                </SectionContent>
            </Box>
        </PageWrapper>
    )
}

export default AccountPageWrapper;