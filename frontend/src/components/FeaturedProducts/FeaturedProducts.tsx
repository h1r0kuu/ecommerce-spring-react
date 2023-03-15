import { ReactElement } from "react";
import Section from "../Section/Section";
import FeatureProductItem from "./FeatureProductItem/FeatureProductItem";

const FeaturedProducts = (): ReactElement => {
    return (
        <Section headerText="FEATURED PRODUCTS">
            <FeatureProductItem />
        </Section>


    )
}

export default FeaturedProducts;