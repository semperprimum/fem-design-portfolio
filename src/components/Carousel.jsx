import { ReactComponent as IconPrev } from "../assets/icon-arrow-left.svg";
import { ReactComponent as IconNext } from "../assets/icon-arrow-right.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

export function Carousel({ slides }) {
  return (
    <>
      <Swiper
        navigation={{
          prevEl: ".carousel__button--prev",
          nextEl: ".carousel__button--next",
        }}
        loop={true}
        slidesPerView={"auto"}
        modules={[Navigation]}
        loopedSlides={2}
        spaceBetween={16}
        centeredSlides={true}
        className="carousel"
        breakpoints={{
          600: {
            spaceBetween: 30,
          },
        }}
      >
        {slides?.map((slide) => (
          <SwiperSlide
            key={slide}
            className="carousel__slide"
            style={{ backgroundImage: `url("${slide}")` }}
          />
        ))}
        <div className="carousel__buttons">
          <button className="carousel__button carousel__button--prev">
            {<IconPrev aria-hidden="true" />}
            <p className="visually-hidden">Previous slide</p>
          </button>
          <button className="carousel__button carousel__button--next">
            <IconNext aria-hidden="true" />
            <p className="visually-hidden">Next slide</p>
          </button>
        </div>
      </Swiper>
    </>
  );
}
