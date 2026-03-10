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

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const { addItem } = useCart();

  return (
    <Panel>
      <Title as="h1" $level="headingLg">{product.name}</Title>
      <Text $tone="muted">{product.description}</Text>
      <Text>{formatCurrency(product.price)}</Text>
      <Button onClick={() => addItem(product)}>Adicionar ao carrinho</Button>
    </Panel>
  );
}
