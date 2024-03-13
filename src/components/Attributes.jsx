import styled from "styled-components";
import Container from "./Container";
import Heading from "./Heading";

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
  column-gap: 4.8rem;
`;

const Group1764TextContainer = styled.div`
  padding: 0 2.4rem;
  font-size: 1.4rem;
`;

const Group1764List = styled.ol`
  list-style: decimal;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const ImageContainer = styled.figure`
  max-height: 25rem;
  align-self: center;
  border-radius: 13px;
  overflow: hidden;
`;

const Image = styled.img`
  max-height: 25rem;
  width: 100%;
  transition: all 0.3s;
  display: block;

  &:hover {
    transform: scale(1.1);
  }
`;

const listArray = [
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus soluta, iure, molestias repellendus animi quibusdam ut aliquam porro minima numquam architecto repudiandae sit enim necessitatibus ratione alias sequi libero.",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus soluta, iure, molestias repellendus animi quibusdam ut aliquam porro minima numquam architecto repudiandae sit enim necessitatibus ratione alias sequi libero.",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus soluta, iure, molestias repellendus animi quibusdam ut aliquam porro minima numquam architecto repudiandae sit enim necessitatibus ratione alias sequi libero.",
  },
  {
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus temporibus soluta, iure, molestias repellendus animi quibusdam ut aliquam porro minima numquam architecto repudiandae sit enim necessitatibus ratione alias sequi libero.",
  },
];

function Attributes() {
  return (
    <Container>
      <StyledAttributes>
        <Heading as="h4">What We Stand For</Heading>
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
          <Heading className="text-7xl">
            The Best Digital Youth Platform
          </Heading>
          <p>
            Lorem ipsum is simply dummy text for the printing and typesetting
            industry
          </p>
          <Group1764List>
            {listArray.map((text, i) => (
              <li key={i}>{text.text}</li>
            ))}
          </Group1764List>
        </Group1764TextContainer>
        <ImageContainer>
          <Image src="iuliu-illes-r95_fsX66sc-unsplash.jpg"></Image>
        </ImageContainer>
      </Group1764>
    </Container>
  );
}

export default Attributes;
