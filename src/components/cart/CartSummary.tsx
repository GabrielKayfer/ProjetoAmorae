import styled from "styled-components";

import type { CartItem } from "../../types/cart";
import { formatCurrency } from "../../utils/currency";
import Text from "../ui/Text";
import Title from "../ui/Title";

const Panel = styled.aside`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.lg};
`;

interface CartSummaryProps {
  items: CartItem[];
}

export function CartSummary({ items }: CartSummaryProps) {
  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );

  return (
    <Panel>
      <Title as="h2" $level="headingSm">Resumo</Title>
      <Text $tone="muted">{items.length} item(ns) distintos</Text>
      <Text>Total: {formatCurrency(total)}</Text>
    </Panel>
  );
}
