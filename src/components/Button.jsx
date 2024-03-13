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

  large: css`
    border-radius: var(--border-radius-md);
    font-size: 1.6rem;
    padding: 1rem 2rem;
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
  alternate: css`
    background-color: green;
    color: white;
    text-align: center;
  `,
};

const Button = styled.button`
  text-align: center;
  display: inline-block;

  ${(props) => sizes[props.$size]}
  ${(props) => variation[props.$variation]}

  ${(props) =>
    props.$user &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.8rem;
      padding: 1rem 1.6rem;
    `}
`;

Button.defaultProps = {
  $size: "small",
  $variation: "primary",
};

export default Button;
