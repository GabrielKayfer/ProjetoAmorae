import styled from "styled-components";

import type { Product } from "../../types/product";
import Container from "../layout/Container";
import PageSection from "../layout/PageSection";
import { ProductList } from "../product/ProductList";
import Text from "../ui/Text";
import Title from "../ui/Title";

interface FeaturedProductsProps {
  products: Product[];
}

const Wrapper = styled(PageSection)`
  margin-top: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(180deg, rgba(242, 166, 73, 0.08) 0%, rgba(242, 153, 133, 0.04) 100%);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
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

const SupportingText = styled(Text)`
  max-width: 38rem;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const InlineLink = styled.a`
  color: ${({ theme }) => theme.colors.brandDark};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export function FeaturedProducts({ products }: FeaturedProductsProps) {
  return (
    <Wrapper id="destaques">
      <Container>
        <Header>
          <Copy>
            <Eyebrow>Favoritos da casa</Eyebrow>
            <Title as="h2" $level="headingLg">
              Os pedidos que melhor apresentam a Amoraê logo no primeiro olhar.
            </Title>
            <SupportingText $tone="muted">
              Taças, clássicos e escolhas certeiras para quem quer começar pelo
              que a vitrine tem de mais querido.
            </SupportingText>
          </Copy>
          <InlineLink href="#categorias">Ver categorias</InlineLink>
        </Header>
        <ProductList products={products} />
      </Container>
    </Wrapper>
  );
}
