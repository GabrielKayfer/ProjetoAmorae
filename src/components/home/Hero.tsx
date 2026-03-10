import { Link } from "react-router-dom";
import styled from "styled-components";

import { routes } from "../../utils/routes";
import Button from "../ui/Button";
import Container from "../layout/Container";
import PageSection from "../layout/PageSection";
import Text from "../ui/Text";
import Title from "../ui/Title";

const showcaseImageUrl = new URL("../../../Imagens/logo.png", import.meta.url).href;

const Wrapper = styled(PageSection)`
  padding-top: ${({ theme }) => theme.spacing["2xl"]};
  background: transparent;
`;

const Content = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(290px, 0.85fr);
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const Copy = styled.div`
  max-width: 42rem;
`;

const Eyebrow = styled(Text)`
  display: inline-flex;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.brand};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.scale.caption};
`;

const Description = styled(Text)`
  max-width: 36rem;
  margin-top: ${({ theme }) => theme.spacing.md};
`;

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
  margin: ${({ theme }) => `${theme.spacing.xl} 0`};
`;

const HighlightList = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const HighlightItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  color: ${({ theme }) => theme.colors.textMuted};

  &::before {
    content: "";
    position: absolute;
    top: 0.65rem;
    left: 0;
    width: 0.625rem;
    height: 0.625rem;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.accent};
  }
`;

const Showcase = styled.aside`
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.surface} 0%, ${({ theme }) => theme.colors.surfaceAlt} 100%);
  box-shadow: ${({ theme }) => theme.shadows.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  min-height: 31rem;
  display: grid;
  place-items: center;
`;

const ShowcaseImage = styled.img`
  width: min(100%, 20rem);
  max-height: 24rem;
  object-fit: contain;
`;

export function Hero() {
  return (
    <Wrapper>
      <Content>
        <Copy>
          <Eyebrow>Sua loja leve para o dia a dia</Eyebrow>
          <Title as="h1" $level="display">
            Monte pedidos frescos com frutas, acai e bebidas em poucos cliques.
          </Title>
          <Description $tone="muted">
            A Amorae agora recebe voce como loja: descubra categorias, veja
            combinacoes em destaque e escolha opcoes pensadas para rotina,
            energia e praticidade.
          </Description>
          <Actions>
            <Link to={routes.catalog}>
              <Button as="span">Ver catalogo</Button>
            </Link>
            <Link to={routes.home + "#categorias"}>
              <Button as="span" $variant="secondary">
                Explorar categorias
              </Button>
            </Link>
          </Actions>
          <HighlightList>
            <HighlightItem>Combinacoes prontas e personalizaveis</HighlightItem>
            <HighlightItem>Ingredientes frescos e preparo do dia</HighlightItem>
            <HighlightItem>Base preparada para catalogo, produto e carrinho</HighlightItem>
          </HighlightList>
        </Copy>

        <Showcase aria-label="Marca Amorae em destaque">
          <ShowcaseImage src={showcaseImageUrl} alt="Logo da Amorae" />
        </Showcase>
      </Content>
    </Wrapper>
  );
}
