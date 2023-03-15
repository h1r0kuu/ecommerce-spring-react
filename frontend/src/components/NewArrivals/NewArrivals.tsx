import { faLongArrowLeft, faLongArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement } from "react";
import { Navigation, Pagination } from "swiper";
import { Swiper } from "swiper/react";
import { SwiperSlide } from "swiper/react";
import Section from "../Section/Section";
import NewArrivalsItem from "./NewArrivalsItem/NewArrivalsItem";

const NewArrivals = (): ReactElement => {
    return (
        <Section headerText="NEW ARRIVALS">
            {/* <div
                className="owl-carousel product-slider owl-loaded owl-drag"
                data-item={4}
            >
                <div className="owl-stage-outer">
                    <div
                        className="owl-stage"
                        style={{
                            transform: "translate3d(0px, 0px, 0px)",
                            transition: "all 0s ease 0s",
                            width: 1665
                        }}
                    > */}
            <Swiper
                slidesPerView={4}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev"
                }}
                modules={[Navigation]}
            >
                <SwiperSlide>
                    <NewArrivalsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <NewArrivalsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <NewArrivalsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <NewArrivalsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <NewArrivalsItem />
                </SwiperSlide>
                <SwiperSlide>
                    <NewArrivalsItem />
                </SwiperSlide>
            </Swiper>
            <div className="swiper-button-next">
                <FontAwesomeIcon icon={faLongArrowRight} />
            </div>
            <div className="swiper-button-prev">
                <FontAwesomeIcon icon={faLongArrowLeft} />
            </div>
            {/* </div>
                </div>
                <div className="owl-nav">
                    <div className="p-prev">
                        <i className="fas fa-long-arrow-alt-left" />
                    </div>
                    <div className="p-next">
                        <i className="fas fa-long-arrow-alt-right" />
                    </div>
                </div>
                <div className="owl-dots disabled" />
            </div> */}
        </Section>

    )
}

export default NewArrivals;