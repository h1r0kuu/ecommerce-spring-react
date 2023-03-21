import { ReactElement } from "react";
import Categories from "../../components/Categories/Categories";
import Wrapper from "../../components/Wrapper/Wrapper";

const Home = (): ReactElement => {
    return (
        <Wrapper>
            <Categories />
        </Wrapper>
    )
}

export default Home