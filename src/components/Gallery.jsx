import styled from "styled-components";
import Container from "./Container";
import Heading from "./Heading";

const StyledGallery = styled.div`
  margin-top: 2.4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.6rem;
  row-gap: 3.2rem;
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

function Gallery() {
  return (
    <Container>
      <Heading as="h2">Gallery</Heading>
      <StyledGallery>
        <ImageContainer>
          <Image src="iuliu-illes-r95_fsX66sc-unsplash.jpg"></Image>
        </ImageContainer>
        <ImageContainer>
          <Image src="iuliu-illes-r95_fsX66sc-unsplash.jpg"></Image>
        </ImageContainer>
        <ImageContainer>
          <Image src="iuliu-illes-r95_fsX66sc-unsplash.jpg"></Image>
        </ImageContainer>
        <ImageContainer>
          <Image src="iuliu-illes-r95_fsX66sc-unsplash.jpg"></Image>
        </ImageContainer>
        <ImageContainer>
          <Image src="iuliu-illes-r95_fsX66sc-unsplash.jpg"></Image>
        </ImageContainer>
        <ImageContainer>
          <Image src="iuliu-illes-r95_fsX66sc-unsplash.jpg"></Image>
        </ImageContainer>
      </StyledGallery>
    </Container>
  );
}

export default Gallery;
