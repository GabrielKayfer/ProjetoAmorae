import { Link } from "react-router-dom";
import styled from "styled-components";

import type { Product } from "../../types/product";
import { formatCurrency } from "../../utils/currency";
import { routes } from "../../utils/routes";
import Button from "../ui/Button";
import Text from "../ui/Text";
import Title from "../ui/Title";

const Card = styled.article`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.surfaceAlt};
  }
`;

const Thumb = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  background: ${({ theme }) => theme.colors.surfaceAlt};
`;

const Body = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0 ${({ theme }) => theme.spacing.lg} ${({ theme }) => theme.spacing.lg};
`;

const Tag = styled.span`
  display: inline-flex;
  color: ${({ theme }) => theme.colors.brandDark};
  font-size: ${({ theme }) => theme.typography.scale.caption};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Price = styled.strong`
  color: ${({ theme }) => theme.colors.brand};
  font-size: 1.1rem;
`;

const ProductLink = styled(Link)`
  display: inline-flex;
  width: fit-content;
`;

const categoryLabels: Record<string, string> = {
  "saladas-de-frutas": "Pronto para pedir",
  "acai-e-bowls": "Personalizavel",
  "sucos-e-bebidas": "Acompanha bem",
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <Thumb src={product.imageUrl} alt={product.name} />
      <Body>
        <Tag>{categoryLabels[product.category] ?? "Destaque"}</Tag>
        <div>
          <Title as="h3" $level="headingSm">
            {product.name}
          </Title>
          <Text $tone="muted">{product.shortDescription}</Text>
        </div>
        <Meta>
          <Price>{formatCurrency(product.price)}</Price>
          <span>350 ml</span>
        </Meta>
        <ProductLink to={routes.product(product.slug)}>
          <Button as="span" $variant="secondary">
            Ver produto
          </Button>
        </ProductLink>
      </Body>
    </Card>
  );
}
