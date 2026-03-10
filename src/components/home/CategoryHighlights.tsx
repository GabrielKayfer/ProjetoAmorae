import { Link } from "react-router-dom";
import styled from "styled-components";

import { categories } from "../../data/categories";
import { routes } from "../../utils/routes";
import Container from "../layout/Container";
import PageSection from "../layout/PageSection";
import Text from "../ui/Text";
import Title from "../ui/Title";

const Wrapper = styled(PageSection)`
  padding-top: 0;
`;

const SectionHeader = styled.div`
  max-width: 48rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
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
  gap: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(Link)`
  overflow: hidden;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.surfaceAlt};
  }
`;

const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
`;

const CardBody = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const HighlightLabel = styled.span`
  color: ${({ theme }) => theme.colors.brandDark};
  font-size: ${({ theme }) => theme.typography.scale.caption};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
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
          <Eyebrow>Categorias para comecar</Eyebrow>
          <Title as="h2" $level="headingLg">
            Escolha por tipo de produto e avance rapido para o que quer pedir.
          </Title>
        </SectionHeader>

        <Grid>
          {categories.map((category) => (
            <Card key={category.id} to={routes.catalog}>
              <CardImage src={category.imageUrl} alt={category.name} />
              <CardBody>
                <HighlightLabel>{category.highlightLabel}</HighlightLabel>
                <Title as="h3" $level="headingSm">
                  {category.name}
                </Title>
                <Text $tone="muted">{category.description}</Text>
                <CardLink>{category.ctaLabel}</CardLink>
              </CardBody>
            </Card>
          ))}
        </Grid>
      </Container>
    </Wrapper>
  );
}
