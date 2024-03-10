import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 120rem;
  padding: 0 3.2rem;
  margin: 0 auto;
  margin-bottom: 2.4rem;
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
