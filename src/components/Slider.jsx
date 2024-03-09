import styled from "styled-components";
import imageSlider from "../utils/ImageSlider";
import SliderContent from "./SliderContent";

import { useEffect, useState } from "react";
import Dots from "./Dots";
import Header from "./Header";

const StyledSlider = styled.div`
  width: 100%;
  height: 90dvh;
  background-image: linear-gradient(
      rgba(100, 202, 114, 0.6),
      rgba(171, 230, 176, 0.6)
    ),
    url(${({ $background }) => $background});
  background-size: cover;
  background-position: center;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in;
  padding-top: 1.6rem;
`;

const Arrow = styled.div`
  cursor: pointer;
  background-color: #f0a80e;
  color: var(--color-grey-0);
  width: 4.5rem;
  height: 4.5rem;
  text-align: center;
  position: absolute;
  top: 50%;
  font-size: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-lg);

  &.slider-left {
    left: 15%;
    transform: translate(50%, -50%);
  }

  &.slider-right {
    right: 15%;
    transform: translate(50%, -50%);
  }
`;

const maxSlide = imageSlider.length - 1;

function Slider() {
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSlideCount(slideCount === maxSlide ? 0 : slideCount + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [slideCount]);

  function goToPrev() {
    if (slideCount === 0) {
      setSlideCount(maxSlide);
    } else {
      setSlideCount((slideCount) => slideCount - 1);
    }
  }

  function goToNext() {
    if (slideCount === maxSlide) {
      setSlideCount(0);
    } else {
      setSlideCount((slideCount) => slideCount + 1);
    }
  }

  return (
    <StyledSlider $background={imageSlider[slideCount].url}>
      <Header />
      <SliderContent />
      <Arrow onClick={goToPrev} className="slider-left">
        &#10094;
      </Arrow>
      <Arrow onClick={goToNext} className="slider-right">
        &#10095;
      </Arrow>
      <Dots
        imageSlider={imageSlider}
        onClick={setSlideCount}
        activeIndex={slideCount}
      />
    </StyledSlider>
  );
}

export default Slider;
