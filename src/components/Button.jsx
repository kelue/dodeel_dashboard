import styled, { css } from "styled-components";

const sizes = {
  small: css`
    font-size: 1.4rem;
    padding: 0.8rem 1.6rem;
    border-radius: var(--border-radius-md);
  `,

  medium: css`
    padding: 1rem 2rem;
    border-radius: var(--border-radius-lg);
    font-size: 1.6rem;
  `,
};

const variation = {
  primary: css`
    border: none;
    background-color: green;
    color: white;
  `,
  secondary: css`
    border: 1px solid green;
    background-color: transparent;
    color: green;
  `,
};

const Button = styled.button`
  text-align: center;
  display: inline-block;

  ${(props) => sizes[props.$size]}
  ${(props) => variation[props.$variation]}
`;

Button.defaultProps = {
  $size: "small",
  $variation: "primary",
};

export default Button;
