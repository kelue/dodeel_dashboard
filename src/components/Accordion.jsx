import styled from "styled-components";
import Container from "./Container";
import Heading from "./Heading";
import { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa";

const StyledAccordionContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4.8rem;
  margin-top: 2.4rem;
`;

const ButtonText = styled.button`
  color: var(--color-grey-500);
  font-weight: 500;
  background: none;
  border: none;
  border-radius: var(--border-radius-sm);
  transition: all 0.3s;

  & span {
    color: orange;
    font-size: 1.6rem;
  }

  &:hover {
    color: var(--color-grey-900);
  }
`;

const FaqTextContainer = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

const StyledAccordion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 0 4.8rem;
`;

const AccordionItem = styled.div`
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  padding: 1.6rem 2rem;
  cursor: pointer;
  border-top: 4px solid #fff;
  border-bottom: 4px solid #fff;

  display: grid;
  grid-template-columns: 1fr auto;
  column-gap: 1.6rem;
  row-gap: 2.4rem;
  align-items: center;
  border-radius: 11px;
`;

const Title = styled.p`
  font-size: 1.6rem;
`;

const IconBox = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  border: 2.5px solid green;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s;

  &.active {
    background-color: #b9e0b9;
  }
`;

const Icon = styled.p`
  font-size: 1.6rem;
  font-size: 1rem;
  color: green;
`;

const ContentBox = styled.div`
  font-size: 1.6rem;
  grid-column: 1 / -1;
  padding-bottom: 1.2rem;
  line-height: 1.6;
`;

const faqs = [
  {
    title: "Is Do-Deel registration free?",
    text: "Yes! registreation as a corp member is free.",
  },
  {
    title: "How do I register?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Is DO-Deel for only corp members?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "How Do I start the required course to get started?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
  {
    title: "What states is DO-Deel present in?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function Accordion() {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <Container>
      <Heading as="h4">Frequently Asked Questions</Heading>
      <StyledAccordionContainer>
        <FaqTextContainer>
          <Heading as="h3">
            Got any Questions? <br></br> We got you!
          </Heading>
          <p>
            We have a curated list of most popular questions here.If none of
            your questions are here. Shoot us a quick email we&apos;ll be happy
            to help!{" "}
          </p>
          <div>
            <ButtonText>
              Send Email <span>&rarr;</span>
            </ButtonText>
          </div>
        </FaqTextContainer>
        <StyledAccordion>
          {faqs.map((el, i) => (
            <AccordionItems
              key={i}
              titles={el.title}
              curOpen={isOpen}
              onOpen={setIsOpen}
              num={i}
            >
              {el.text}
            </AccordionItems>
          ))}
        </StyledAccordion>
      </StyledAccordionContainer>
    </Container>
  );
}

function AccordionItems({ titles, curOpen, onOpen, children, num }) {
  const isOpen = num === curOpen;

  function handleToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <AccordionItem onClick={handleToggle}>
      <Title>{titles}</Title>
      <IconBox className={isOpen ? "active" : ""}>
        {" "}
        <Icon>{isOpen ? <FaMinus /> : <FaPlus />}</Icon>
      </IconBox>
      {isOpen && <ContentBox>{children}</ContentBox>}
    </AccordionItem>
  );
}

export default Accordion;
