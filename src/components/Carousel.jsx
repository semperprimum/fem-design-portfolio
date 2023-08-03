import slide4 from "../assets/image-slide-1.jpg";
import slide5 from "../assets/image-slide-2.jpg";
import slide1 from "../assets/image-slide-3.jpg";
import slide2 from "../assets/image-slide-4.jpg";
import slide3 from "../assets/image-slide-5.jpg";
import { ReactComponent as IconPrev } from "../assets/icon-arrow-left.svg";
import { ReactComponent as IconNext } from "../assets/icon-arrow-right.svg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

const slides = [slide1, slide2, slide3, slide4, slide5];

export function Carousel() {
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
        spaceBetween={32}
        centeredSlides={true}
        className="carousel"
      >
        {slides.map((slide) => (
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
