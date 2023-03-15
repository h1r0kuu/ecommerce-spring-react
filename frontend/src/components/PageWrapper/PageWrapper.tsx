import { FC, ReactElement, ReactNode } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

interface PageWrapperProps {
    children: ReactNode
}

const PageWrapper: FC<PageWrapperProps> = ({ children }): ReactElement => {
    return (
        <>
            <div className="preloader"></div>
            <div id="app">
                <Header />
                <div className="app-content">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default PageWrapper;