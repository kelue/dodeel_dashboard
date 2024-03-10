import styled from "styled-components";
import Container from "./Container";
import Heading from "./Heading";

const StyledPrograms = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3.2rem;
  margin-bottom: 2.4rem;
  margin-top: 2.4rem;
`;

const ProgramBox = styled.div`
  border-radius: 11px;
  overflow: hidden;
  transition: all 0.4s;
  box-shadow: 0 2.4rem 4.8rem rgba(0, 0, 0, 0.075);
  display: grid;
  grid-template-rows: 30fr auto;
`;

const ProgramBoxImage = styled.img`
  width: 100%;
  max-height: 25rem;
`;

const ProgramContent = styled.div`
  font-size: 1.4rem;
  padding: 2rem 1.6rem;
`;

const ButtonText = styled.button`
  color: var(--color-grey-500);
  font-weight: 500;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  transition: all 0.3s;

  &:hover {
    color: var(--color-grey-900);
  }
`;

function Programs() {
  return (
    <Container>
      <Heading as="h4">Our Programs</Heading>
      <StyledPrograms>
        <ProgramBox>
          <ProgramBoxImage src="iuliu-illes-r95_fsX66sc-unsplash.jpg"></ProgramBoxImage>
          <ProgramContent>
            <h4>Business Onboarding on Google</h4>
            <p>
              This was aimed at enhancing the online visibility of neighbourhood
              enterprises through Google. Our CDS initiated an onboarding
              process to ensure that local businesses within our community were
              effectively listed on Google. It also involved guiding these
              business owners through the steps of optimizing Google My Business
              profiles.{" "}
            </p>
            <ButtonText>READ MORE</ButtonText>
          </ProgramContent>
        </ProgramBox>
        <ProgramBox>
          <ProgramBoxImage src="iuliu-illes-r95_fsX66sc-unsplash.jpg"></ProgramBoxImage>
          <ProgramContent>
            <h4>Business Onboarding on Google</h4>
            <p>
              This was aimed at enhancing the online visibility of neighbourhood
              enterprises through Google. Our CDS initiated an onboarding
              process to ensure that local businesses within our community were
              effectively listed on Google. It also involved guiding these
              business owners through the steps of optimizing Google My Business
              profiles.{" "}
            </p>
            <ButtonText>READ MORE</ButtonText>
          </ProgramContent>
        </ProgramBox>
        <ProgramBox>
          <ProgramBoxImage src="iuliu-illes-r95_fsX66sc-unsplash.jpg"></ProgramBoxImage>
          <ProgramContent>
            <h4>Business Onboarding on Google</h4>
            <p>
              This was aimed at enhancing the online visibility of neighbourhood
              enterprises through Google. Our CDS initiated an onboarding
              process to ensure that local businesses within our community were
              effectively listed on Google. It also involved guiding these
              business owners through the steps of optimizing Google My Business
              profiles.{" "}
            </p>
            <ButtonText>READ MORE</ButtonText>
          </ProgramContent>
        </ProgramBox>
      </StyledPrograms>
    </Container>
  );
}

export default Programs;

// Business Onboarding on Google
// Mentoring Project
// Business Onboarding on Google
// This was aimed at enhancing the online visibility of neighbourhood enterprises through Google. Our CDS initiated an onboarding process to ensure that local businesses within our community were effectively listed on Google. It also involved guiding these business owners through the steps of optimizing Google My Business profiles.
// We initiated a school adoption project to enhance digital literacy among students in local schools.  The members of the CDS facilitated trainings for students in different secondary schools on the importance of digital literacy. This project not only empowered students with basic digital skills but also established a foundation to prepare them for the digital era.
// This was aimed at enhancing the online visibility of neighbourhood enterprises through Google. Our CDS initiated an onboarding process to ensure that local businesses within our community were effectively listed on Google. It also involved guiding these business owners through the steps of optimizing Google My Business profiles.
// READ MORE
// READ MORE
// READ MORE

/* Frame 1000003018 */

/* Auto layout */
// display: flex;
// flex-direction: row;
// align-items: flex-end;
// padding: 0px;
// gap: 64px;

// position: absolute;
// width: 1313px;
// height: 516.45px;
// left: calc(50% - 1313px/2 + 0.5px);
// top: 3478px;
