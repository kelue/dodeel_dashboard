import styled from "styled-components";
import Container from "./Container";

const StyledAttributes = styled.section`
  text-align: center;
  padding: 3rem;
  margin-bottom: 4.8rem;
`;

const AttributeRow = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 2rem;
`;

const Feature = styled.div`
  text-align: center;
  padding: 2rem;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
`;

const Group1764 = styled.div`
  display: grid;
  grid-template-columns: 60fr 40fr;
`;

const Group1764TextContainer = styled.div``;

const Group1764List = styled.ol``;

function Attributes() {
  return (
    <Container>
      <StyledAttributes>
        <h2>What We Stand For</h2>
        <p>
          Our CDS group, proudly backed by Mind the Gap has several initiatives
          for social impact
        </p>
        <AttributeRow>
          <Feature>
            <h4>Our Mision</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Feature>
          <Feature>
            <h4>Our Vision</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Feature>
          <Feature>
            <h4>Our Story</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
              ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </Feature>
        </AttributeRow>
      </StyledAttributes>
      <Group1764>
        <Group1764TextContainer>
          <h3>The Best Digital Youth Platform</h3>
          <Group1764List></Group1764List>
        </Group1764TextContainer>
      </Group1764>
    </Container>
  );
}

export default Attributes;
