import styled from "styled-components";
import Button from "./Button";



const SliderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  align-items: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.2rem;
  margin-top: 1.2rem;
`;

function SliderContent() {
  return (
      <SliderTextContainer>
        <h2 className="text-7xl text-stone-300">
          The Best Digital CDS <span className="text-lime-800">Platform</span>
        </h2>
        <p>Hosting communities with the Digital Economy</p>
        <ButtonContainer>
          <Button $size="small" $variation="secondary">
            Who We Are
          </Button>
          <Button $size="small" $variation="primary">
            Join Us
          </Button>
        </ButtonContainer>
      </SliderTextContainer>
  );
}



export default SliderContent;
