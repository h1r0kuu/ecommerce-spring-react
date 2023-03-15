import { FC, ReactElement, ReactNode } from "react";
import SectionIntro from "../../components/Section/SectionIntro/SectionIntro";

interface AuthProps {
    children: ReactNode,
    formTitle: string,
}

const Auth: FC<AuthProps> = ({ children, formTitle }): ReactElement => {
    return (

        <div className="u-s-p-b-60">
            <SectionIntro headerText="FORGOT PASSWORD?" />

            <div className="section__content">
                <div className="container">
                    <div className="row row--center">
                        <div className="col-lg-6 col-md-8 u-s-m-b-30">
                            <div className="l-f-o">
                                <div className="l-f-o__pad-box">
                                    <h1 className="gl-h1">formTitle</h1>
                                    {children}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*====== End - Section Content ======*/}
        </div>
    )
}

export default Auth;