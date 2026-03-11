import styled from "styled-components";

import { useCart } from "../../hooks/useCart";
import type { Product } from "../../types/product";
import { formatCurrency } from "../../utils/currency";
import Button from "../ui/Button";
import Text from "../ui/Text";
import Title from "../ui/Title";

const Panel = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

const CategoryLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.scale.caption};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const Badge = styled.span`
  display: inline-flex;
  width: fit-content;
  min-height: 2rem;
  align-items: center;
  padding: 0 ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(242, 166, 73, 0.14);
  color: ${({ theme }) => theme.colors.brandDark};
  font-size: ${({ theme }) => theme.typography.scale.bodySm};
`;

const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  flex-wrap: wrap;
`;

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { addItem } = useCart();

  return (
    <Panel>
      <CategoryLabel>{product.categoryLabel}</CategoryLabel>
      <Title as="h1" $level="headingLg">{product.name}</Title>
      <Text $tone="muted">{product.description}</Text>
      <PriceRow>
        <Text>{formatCurrency(product.price)}</Text>
        {product.sizeLabel ? <Badge>{product.sizeLabel}</Badge> : null}
      </PriceRow>
      <Button onClick={() => addItem(product)}>Levar para a sacola</Button>
    </Panel>
  );
}
