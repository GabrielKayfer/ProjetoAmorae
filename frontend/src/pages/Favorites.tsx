import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import PageSection from "../components/layout/PageSection";
import { ProductList } from "../components/product/ProductList";
import Text from "../components/ui/Text";
import Title from "../components/ui/Title";
import Button from "../components/ui/Button";
import { useFavorites } from "../hooks/useFavorites";
import { productsService } from "../services/products.service";
import type { Product } from "../types/product";
import { routes } from "../utils/routes";

const Intro = styled.div`
  max-width: 46rem;
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

const EmptyState = styled.div`
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl} 0;
  background: rgba(2, 89, 81, 0.05);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

export function FavoritesPage() {
  const { favorites } = useFavorites();
  const [favoriteProducts, setFavoriteProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Busca todos os produtos e filtra pelos favoritos
    const allProducts = productsService.list();
    const filtered = allProducts.filter((p) => favorites.includes(p.id));
    setFavoriteProducts(filtered);
  }, [favorites]);

  return (
    <PageSection>
      <Container>
        <Intro>
          <Eyebrow>Seus Favoritos</Eyebrow>
          <Title as="h1" $level="headingLg">
            Seus itens salvos
          </Title>
          <Text $tone="muted">
            Aqui estão os produtos que você marcou como favoritos.
          </Text>
        </Intro>

        {favoriteProducts.length > 0 ? (
          <ProductList products={favoriteProducts} />
        ) : (
          <EmptyState>
            <Text>Você ainda não tem nenhum produto favorito.</Text>
            <Button as={Link} to={routes.catalog}>Ir para o Catálogo</Button>
          </EmptyState>
        )}
      </Container>
    </PageSection>
  );
}
