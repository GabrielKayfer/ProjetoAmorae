import styled, { css } from "styled-components";

type Variant = "primary" | "secondary";

interface ButtonProps {
  $variant?: Variant;
}

const Button = styled.button<ButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 3rem;
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  border-radius: ${({ theme }) => theme.radius.pill};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease,
    box-shadow 0.2s ease;

  ${({ theme, $variant = "primary" }) =>
    $variant === "primary"
      ? css`
          background: ${theme.colors.brand};
          color: ${theme.colors.white};
          box-shadow: ${theme.shadows.sm};
        `
      : css`
          background: ${theme.colors.surface};
          color: ${theme.colors.brandDark};
          border: 1px solid ${theme.colors.border};
        `}

  &:hover {
    transform: translateY(-1px);
    box-shadow: ${({ theme }) => theme.shadows.md};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brandDark};
    outline-offset: 3px;
  }
`;

export default Button;
