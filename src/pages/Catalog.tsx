import Container from "../components/layout/Container";
import PageSection from "../components/layout/PageSection";
import { ProductList } from "../components/product/ProductList";
import Title from "../components/ui/Title";
import { productsService } from "../services/products.service";

export function CatalogPage() {
  const products = productsService.list();

  return (
    <PageSection>
      <Container>
        <Title as="h1" $level="headingLg">Catalogo</Title>
        <ProductList products={products} />
      </Container>
    </PageSection>
  );
}
