import { styled } from "styled-components";
import "swiper/css/bundle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
// import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper/modules";

const StyledSwiper = styled(Swiper)``;
// const StyledSwiperWrapper = styled(SwiperWrapper)``;
const StyledSwiperSlide = styled(SwiperSlide)`
  width: 16.875rem;
  height: 11.25rem;
  background-color: steelblue;
`;
const SwiperButton = styled(Navigation)`
  border: none;
  background: transparent;
`;

export function Carousel() {
  return (
    <>
      <Swiper
        slidesPerView={"auto"}
        centeredSlides={true}
        spaceBetween={16}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        className="swiper"
      >
        <StyledSwiperSlide>Slide 1</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 2</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 3</StyledSwiperSlide>
        {/* <StyledSwiperSlide>Slide 4</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 5</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 6</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 7</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 8</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 9</StyledSwiperSlide> */}
      </Swiper>
    </>
  );
}
