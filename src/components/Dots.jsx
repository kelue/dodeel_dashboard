import styled from "styled-components";

const StyledDots = styled.div`
  display: flex;
  gap: 1.6rem;
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
`;

const Dot = styled.div`
  border: 1px solid #ea580c;
  height: 1rem;
  width: 1rem;
  background-color: transparent;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s;
  opacity: 0.6;

  &.active {
    background-color: #ef681f;
    opacity: 0.8;
  }
`;

function Dots({ activeIndex, onClick, imageSlider }) {
  return (
    <StyledDots>
      {/* {sliderImage.map((slide, index) => (
        <span
          key={index}
          className={`${activeIndex === index ? "dot active-dot" : "dot"}`}
          onClick={() => onclick(index)}
        ></span>
      ))} */}
      {imageSlider.map((slide, i) => (
        <Dot
          key={i}
          onClick={() => onClick(i)}
          className={i === activeIndex ? "active" : ""}
        />
      ))}
    </StyledDots>
  );
}

export default Dots;
