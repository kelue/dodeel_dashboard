import styled from "styled-components";
import Container from "./Container";
import Heading from "./Heading";

const StyledPartOfUs = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Hug = styled.div`
  grid-column: 2 / -1;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 0 4.8rem 0 0;
`;

const Steps = styled.div`
  background-color: white;
  box-shadow: 0 3.2rem 6.4rem rgba(0, 0, 0, 0.06);
  padding: 2rem;
  border-radius: 20px;
  max-width: 75%;
`;

function PartOfUs() {
  return (
    <Container>
      <StyledPartOfUs>
        <Hug>
          <p>Become a part of us</p>
          <Heading>Register for DO-Deel group in 3 easy steps</Heading>
          <p>
            Voluptatibus sed dicta dignissimos enim ipsam et deserunt doloribus
            sequi illo, quam, consequuntur vel, eveniet at consequatur minima
            est. Dicta, autem nulla?
          </p>

          <StepsContainer>
            <Steps>
              {" "}
              Voluptatibus sed dicta dignissimos enim ipsam et deserunt
              doloribus
            </Steps>
            <Steps>
              {" "}
              Voluptatibus sed dicta dignissimos enim ipsam et deserunt
              doloribus
            </Steps>
            <Steps>
              {" "}
              Voluptatibus sed dicta dignissimos enim ipsam et deserunt
              doloribus
            </Steps>
          </StepsContainer>
        </Hug>
      </StyledPartOfUs>
    </Container>
  );
}

export default PartOfUs;
