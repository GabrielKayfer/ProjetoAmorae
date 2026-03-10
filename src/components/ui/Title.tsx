import styled, { css } from "styled-components";

type Level = "display" | "headingLg" | "headingMd" | "headingSm";

interface TitleProps {
  $level?: Level;
}

const Title = styled.h2<TitleProps>`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  line-height: ${({ theme }) => theme.typography.lineHeight.tight};

  ${({ theme, $level = "headingMd" }) => {
    const map = {
      display: theme.typography.scale.display,
      headingLg: theme.typography.scale.headingLg,
      headingMd: theme.typography.scale.headingMd,
      headingSm: theme.typography.scale.headingSm,
    };

    return css`
      font-size: ${map[$level]};
    `;
  }}
`;

export default Title;
