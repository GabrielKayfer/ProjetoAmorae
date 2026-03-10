import styled, { css } from "styled-components";

type Tone = "default" | "muted";
type Size = "body" | "bodySm" | "caption";

interface TextProps {
  $tone?: Tone;
  $size?: Size;
}

const Text = styled.p<TextProps>`
  ${({ theme, $size = "body" }) => css`
    font-size: ${theme.typography.scale[$size]};
  `}

  color: ${({ theme, $tone = "default" }) =>
    $tone === "muted" ? theme.colors.textMuted : theme.colors.text};
`;

export default Text;
