import { Link } from "react-router-dom";
import styled from "styled-components";

import { categories } from "../../data/categories";
import { routes } from "../../utils/routes";
import Container from "../layout/Container";
import PageSection from "../layout/PageSection";
import Text from "../ui/Text";
import Title from "../ui/Title";

const Wrapper = styled(PageSection)`
  padding-top: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};
`;

const SectionHeader = styled.div`
  max-width: 42rem;
  margin-bottom: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};
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

const Grid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Link)`
  overflow: hidden;
  background: linear-gradient(180deg, rgba(242, 235, 223, 0.9) 0%, rgba(255, 255, 255, 0.22) 100%);
  border: 1px solid rgba(2, 89, 81, 0.1);
  border-radius: 1.7rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease;

  &:hover {
    transform: translateY(-6px);
    border-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 24px 42px rgba(2, 89, 81, 0.14);
  }
`;

const ImageWrap = styled.div`
  position: relative;
  padding: 1.25rem 1.25rem 0;
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 5 / 4;
  object-fit: cover;
  border-radius: 1.35rem;
  background: ${({ theme }) => theme.colors.background};
`;

const HighlightLabel = styled.span`
  position: absolute;
  left: 2rem;
  bottom: 1rem;
  display: inline-flex;
  padding: 0.5rem 0.9rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(242, 235, 223, 0.92);
  color: ${({ theme }) => theme.colors.brandDark};
  font-size: ${({ theme }) => theme.typography.scale.caption};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.05em;
  text-transform: uppercase;
`;

const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const CardDescription = styled(Text)`
  max-width: 22ch;
`;

const CardLink = styled.span`
  display: inline-flex;
  margin-top: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.brand};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export function CategoryHighlights() {
  return (
    <Wrapper id="categorias">
      <Container>
        <SectionHeader>
          <Eyebrow>Escolha seu favorito</Eyebrow>
          <Title as="h2" $level="headingLg">
            Da taça autoral ao clássico para dividir, cada categoria tem um jeito
            próprio de viver a Amoraê.
          </Title>
        </SectionHeader>

        <Grid>
          {categories.map((category) => (
            <Card key={category.id} to={routes.catalog}>
              <ImageWrap>
                <CardImage src={category.imageUrl} alt={category.name} />
                <HighlightLabel>{category.highlightLabel}</HighlightLabel>
              </ImageWrap>
              <CardBody>
                <Title as="h3" $level="headingSm">
                  {category.name}
                </Title>
                <CardDescription $tone="muted">
                  {category.description}
                </CardDescription>
                <CardLink>{category.ctaLabel}</CardLink>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
