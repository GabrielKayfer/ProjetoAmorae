import { useParams } from "react-router-dom";
import styled from "styled-components";

import Container from "../components/layout/Container";
import PageSection from "../components/layout/PageSection";
import { ProductGallery } from "../components/product/ProductGallery";
import { ProductInfo } from "../components/product/ProductInfo";
import Text from "../components/ui/Text";
import Title from "../components/ui/Title";
import { productsService } from "../services/products.service";

const Layout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) minmax(320px, 420px);
    align-items: start;
  }
`;

export function ProductPage() {
  const { slug } = useParams();
  const product = slug ? productsService.findBySlug(slug) : undefined;

  if (!product) {
    return (
      <PageSection>
        <Container>
          <Title as="h1" $level="headingLg">Produto não encontrado</Title>
          <Text $tone="muted">
            Esse sabor ainda não entrou na nossa vitrine.
          </Text>
        </Container>
      </PageSection>
    );
  }

  return (
    <PageSection>
      <Container>
        <Layout>
          <ProductGallery imageUrl={product.imageUrl} name={product.name} />
          <ProductInfo product={product} />
        </Layout>
      </Container>
    </PageSection>
  );
}
