import { styled } from "styled-components";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation } from "swiper/modules";

const StyledSwiper = styled(Swiper)`
  margin-block: 2rem;
`;
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
      <StyledSwiper
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
        <StyledSwiperSlide>Slide 4</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 5</StyledSwiperSlide>
        {/* <StyledSwiperSlide>Slide 6</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 7</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 8</StyledSwiperSlide>
        <StyledSwiperSlide>Slide 9</StyledSwiperSlide> */}
      </StyledSwiper>
    </>
  );
}
