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
  background: rgba(242, 166, 73, 0.08);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Copy = styled.div`
  max-width: 44rem;
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
            <Eyebrow>Vitrine inicial</Eyebrow>
            <Title as="h2" $level="headingLg">
              Produtos em destaque com card reutilizavel para evoluir em
              catalogo.
            </Title>
            <SupportingText $tone="muted">
              A linguagem visual do legado agora vive em uma vitrine pronta para
              receber dados reais sem reescrever a home.
            </SupportingText>
          </Copy>
          <InlineLink href="#categorias">Ver todas as categorias</InlineLink>
        </Header>
        <ProductList products={products} />
      </Container>
    </Wrapper>
  );
}
