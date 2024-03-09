import styled from "styled-components";
import Button from "./Button";

const StyledHeader = styled.header`
  background-color: transparent;
  display: flex;
  margin: 0 auto;
  max-width: 130rem;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24rem;
`;

const StyledMenu = styled.ul`
  font-size: 1.6rem;
  display: flex;
  font-weight: 600;
  gap: 1.6rem;
`;
const List = styled.li`
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 1.6rem;
`;

const content = ["Home", "About", "Contact us", "FAQs"];

function Header() {
  return (
    <StyledHeader>
      <div>
        <p>DO-DEEL</p>
      </div>
      <StyledMenu>
        {content.map((str, i) => (
          <List key={i}>{str}</List>
        ))}
      </StyledMenu>
      <ButtonContainer>
        <Button $size="medium" $variation="secondary">
          My Account
        </Button>
        <Button $size="medium" $variation="primary">
          Sign up
        </Button>
      </ButtonContainer>
    </StyledHeader>
  );
}

export default Header;
