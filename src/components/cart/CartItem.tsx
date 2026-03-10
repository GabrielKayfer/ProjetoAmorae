import styled from "styled-components";

import type { CartItem as CartItemType } from "../../types/cart";
import Button from "../ui/Button";
import Text from "../ui/Text";
import Title from "../ui/Title";
import { formatCurrency } from "../../utils/currency";

const Row = styled.article`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.md};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.radius.md};
`;

const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  align-items: center;
`;

interface CartItemProps {
  item: CartItemType;
  onAdd: () => void;
  onDecrease: () => void;
  onRemove: () => void;
}

export function CartItem({ item, onAdd, onDecrease, onRemove }: CartItemProps) {
  return (
    <Row>
      <div>
        <Title as="h3" $level="headingSm">{item.product.name}</Title>
        <Text $tone="muted">
          {item.quantity} x {formatCurrency(item.product.price)}
        </Text>
      </div>
      <Actions>
        <Button onClick={onDecrease} $variant="secondary">-</Button>
        <Button onClick={onAdd} $variant="secondary">+</Button>
        <Button onClick={onRemove}>Remover</Button>
      </Actions>
    </Row>
  );
}
