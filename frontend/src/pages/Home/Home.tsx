import { ReactElement } from "react";
import PageWrapper from "../../components/PageWrapper/PageWrapper"

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper';
import Brands from "../../components/Brands/Brands";
import ClientFeedback from "../../components/ClientFeedback/ClientFeedback";
import BlogLatest from "../../components/BlogLatest/BlogLatest";
import Cards from "../../components/Cards/Cards";
import Promotions from "../../components/Promotions/Promotions";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import GlobalOffer from "../../components/GlobalOffer/GlobalOffer";
import NewArrivals from "../../components/NewArrivals/NewArrivals";
import TopTrending from "../../components/TopTrending/TopTrending";

const Home = (): ReactElement => {

    return (
        <PageWrapper>
            <Swiper
                modules={[Pagination]}
                direction={'horizontal'}
                pagination={{ enabled: true, el: '.swiper-pagination', clickable: true }}
            >
                <SwiperSlide>
                    <div className="hero-slide hero-slide--1">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="slider-content slider-content--animation">

                                        <span className="content-span-1 u-c-secondary">Latest Update Stock</span>

                                        <span className="content-span-2 u-c-secondary">30% Off On Electronics</span>

                                        <span className="content-span-3 u-c-secondary">Find electronics on best prices, Also Discover most selling products of electronics</span>

                                        <span className="content-span-4 u-c-secondary">Starting At

                                            <span className="u-c-brand">$1050.00</span></span>

                                        <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero-slide hero-slide--1">
                        <div className="container">
                            <div className="row">
                                <div className="col-12">
                                    <div className="slider-content slider-content--animation">

                                        <span className="content-span-1 u-c-secondary">Latest Update Stock</span>

                                        <span className="content-span-2 u-c-secondary">30% Off On Electronics</span>

                                        <span className="content-span-3 u-c-secondary">Find electronics on best prices, Also Discover most selling products of electronics</span>

                                        <span className="content-span-4 u-c-secondary">Starting At

                                            <span className="u-c-brand">$1050.00</span></span>

                                        <a className="shop-now-link btn--e-brand" href="shop-side-version-2.html">SHOP NOW</a></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <div className="swiper-pagination"></div>
            </Swiper>
            <TopTrending />
            <NewArrivals />
            <GlobalOffer />
            <FeaturedProducts />
            <Promotions />
            <Cards />
            <BlogLatest />
            <ClientFeedback />
            <Brands />
        </PageWrapper >
    )
}

export default Home;