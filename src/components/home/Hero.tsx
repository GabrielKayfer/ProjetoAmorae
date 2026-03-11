import { Link } from "react-router-dom";
import styled from "styled-components";

import { routes } from "../../utils/routes";
import Button from "../ui/Button";
import Container from "../layout/Container";
import PageSection from "../layout/PageSection";
import Text from "../ui/Text";
import Title from "../ui/Title";

const heroImageUrl = new URL("../../../output/imagegen/new-products/carta-de-verao.png", import.meta.url).href;

const Wrapper = styled(PageSection)`
  padding-top: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};
`;

const Shell = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.02fr) minmax(320px, 0.98fr);
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: stretch;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const CopyPanel = styled.div`
  display: grid;
  align-content: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: clamp(1.75rem, 3vw, 3rem);
  border-radius: 2rem;
  background: linear-gradient(180deg, rgba(242, 235, 223, 0.72) 0%, rgba(255, 255, 255, 0.28) 100%);
  border: 1px solid rgba(2, 89, 81, 0.08);
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const VisualPanel = styled.aside`
  position: relative;
  min-height: 34rem;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 2rem;
  background: radial-gradient(circle at top, rgba(242, 235, 223, 0.18) 0%, transparent 36%),
    linear-gradient(160deg, ${({ theme }) => theme.colors.brandDark} 0%, rgba(2, 89, 81, 0.88) 58%, ${({ theme }) => theme.colors.brand} 100%);
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-height: 30rem;
  }
`;

const Eyebrow = styled(Text)`
  display: inline-flex;
  width: fit-content;
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(242, 153, 133, 0.22);
  color: ${({ theme }) => theme.colors.brandDark};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.scale.caption};
`;

const Headline = styled(Title)`
  max-width: 11ch;
`;

const Description = styled(Text)`
  max-width: 34rem;
  font-size: 1.05rem;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

const HighlightRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const HighlightChip = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 2.4rem;
  padding: 0 ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(2, 89, 81, 0.06);
  color: ${({ theme }) => theme.colors.brandDark};
  font-size: ${({ theme }) => theme.typography.scale.bodySm};
`;

const VisualImage = styled.img`
  position: absolute;
  inset: auto 1rem -0.2rem auto;
  width: min(100%, 31rem);
  max-height: 27rem;
  object-fit: contain;
  filter: drop-shadow(0 24px 28px rgba(2, 89, 81, 0.2));

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: min(500%, 130rem);
  }
`;

const FloatingCard = styled.div`
  position: relative;
  z-index: 1;
  width: min(16rem, 76%);
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: 1.4rem;
  background: rgba(242, 235, 223, 0.94);
  color: ${({ theme }) => theme.colors.brandDark};
  box-shadow: 0 18px 34px rgba(2, 89, 81, 0.18);
`;

const FloatingLabel = styled.span`
  display: inline-flex;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.brand};
  font-size: ${({ theme }) => theme.typography.scale.caption};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const FloatingText = styled(Text)`
  color: rgba(2, 89, 81, 0.76);
`;

const AccentBubble = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  background: rgba(242, 166, 73, 0.9);
  mix-blend-mode: screen;
`;

const SecondaryBubble = styled.div`
  position: absolute;
  left: 1.5rem;
  bottom: 1.75rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: rgba(242, 153, 133, 0.5);
`;

export function Hero() {
  return (
    <Wrapper>
      <Shell>
        <CopyPanel>
          <Eyebrow>Gelateria retrô, charmosa e feita para desejar</Eyebrow>
          <Headline as="h1" $level="display">
            A pausa mais gostosa do seu dia começa aqui.
          </Headline>
          <Description $tone="muted">
            Gelatos, taças, milkshakes e clássicos da casa servidos com beleza,
            cremosidade e aquele clima bom de fim de tarde sem pressa.
          </Description>
          <Actions>
            <Link to={routes.catalog}>
              <Button as="span">Ver cardápio</Button>
            </Link>
            <Link to={routes.home + "#monte-seu-pedido"}>
              <Button as="span" $variant="secondary">
                Montar minha taça
              </Button>
            </Link>
          </Actions>
          <HighlightRow>
            <HighlightChip>Taças autorais</HighlightChip>
            <HighlightChip>Clássicos da casa</HighlightChip>
            <HighlightChip>Milkshakes cremosos</HighlightChip>
          </HighlightRow>
        </CopyPanel>

        <VisualPanel aria-label="Vitrine principal da Amoraê">
          <AccentBubble />
          <SecondaryBubble />
          <FloatingCard>
            <FloatingLabel>Destaque da vitrine</FloatingLabel>
            <Title as="h2" $level="headingSm">
              Camadas bonitas, cobertura caprichada e sabor de pedido que vale repetir.
            </Title>
            <FloatingText>
              Uma seleção pensada para abrir o apetite no primeiro olhar.
            </FloatingText>
          </FloatingCard>
          <VisualImage src={heroImageUrl} alt="Seleção de produtos Amoraê" />
        </VisualPanel>
      </Shell>
    </Wrapper>
  );
}
