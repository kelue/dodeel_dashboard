import styled, { css } from "styled-components";
import Container from "./Container";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import Button from "./Button";

const StyledFooter = styled.footer`
  background-color: #022c22;
  padding: 4rem 0;
  color: white;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-rows: 1fr auto;
  row-gap: 2.4rem;
`;

const FooterTextContainer = styled.div`
  border-bottom: 1px solid #7d7b7b;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  column-gap: 6.4rem;
  padding: 2.4rem 0;
`;

const FooterHeading = styled.p`
  font-size: 1.8rem;
  font-weight: 500;
  margin-bottom: 2.4rem;
`;

const FooterNav = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 2.4rem;
  margin-top: 2.4rem;
`;

const StyledFormRow = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.2rem 0;

  & input {
    padding: 0.8rem;
    border-radius: 7px;
  }
`;

const FormNav = styled.nav`
  padding: 0 4.8rem;
`;

const IconBox = styled.div`
  height: 2.4rem;
  width: 2.4rem;
  border-radius: 50%;
  background-color: #2d3e4e;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.6rem;
`;

function Footer() {
  return (
    <StyledFooter>
      <Container>
        <FooterContent>
          <FooterTextContainer>
            <div className="logo-col">
              <a href="#">
                <FooterHeading>DO-DEEL</FooterHeading>
              </a>

              <p>
                Hosting communities to connect with the Digital Economy.Hosting
                communities to connect with the Digital Economy.
              </p>

              <SocialLinks>
                <li>
                  <a>
                    <IconBox>
                      <FaXTwitter />
                    </IconBox>
                  </a>
                </li>
                <li>
                  <a>
                    <IconBox>
                      <FaFacebookF />
                    </IconBox>
                  </a>
                </li>
                <li>
                  <a>
                    <IconBox>
                      {" "}
                      <FaInstagram />
                    </IconBox>
                  </a>
                </li>
                <li>
                  <a>
                    <IconBox>
                      {" "}
                      <FaLinkedin />
                    </IconBox>
                  </a>
                </li>
              </SocialLinks>
            </div>

            <nav className="nav-col">
              <FooterHeading>Organization</FooterHeading>
              <FooterNav>
                <li>
                  <a>About us</a>
                </li>
                <li>
                  <a>Contact us</a>
                </li>
                <li>
                  <a>Our Team</a>
                </li>
                <li>
                  <a>Register</a>
                </li>
              </FooterNav>
            </nav>

            <nav className="nav-col">
              <FooterHeading>Projects</FooterHeading>
              <FooterNav>
                <li>
                  <a>Events</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>Mind the Gap</a>
                </li>
                <li>
                  <a>FAQs</a>
                </li>
              </FooterNav>
            </nav>

            <FormNav>
              <FooterHeading>Donate Today</FooterHeading>
              <p>
                Help us make a digital difference in our host communities.Donate
                here
              </p>
              <StyledFormRow>
                <input type="text" placeholder="Name"></input>
                <input type="email" placeholder="Email address"></input>
                <Button $size="large" $variation="alternate">
                  Donate
                </Button>
              </StyledFormRow>
            </FormNav>
          </FooterTextContainer>
          <p className="copyright">
            Copyright &copy;{" "}
            <span className="year">{new Date().getFullYear()}.</span>
            All rights reserved by Do-Deel CDS Group.
          </p>
        </FooterContent>
      </Container>
    </StyledFooter>
  );
}

export default Footer;
