import { FC, ReactElement, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface WrapperProps {
    children: ReactNode
}

const Wrapper: FC<WrapperProps> = ({ children }): ReactElement => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    )
}

export default Wrapper