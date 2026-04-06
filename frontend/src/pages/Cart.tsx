import styled from "styled-components";

import { CartItem } from "../components/cart/CartItem";
import { CartSummary } from "../components/cart/CartSummary";
import Container from "../components/layout/Container";
import PageSection from "../components/layout/PageSection";
import Text from "../components/ui/Text";
import Title from "../components/ui/Title";
import { useCart } from "../hooks/useCart";

const Layout = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: minmax(0, 1fr) 320px;
    align-items: start;
  }
`;

const Items = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

export function CartPage() {
  const { state, addItem, decreaseItem, removeItem } = useCart();

  return (
    <PageSection>
      <Container>
        <Title as="h1" $level="headingLg">Sua sacola</Title>
        {state.items.length === 0 ? (
          <Text $tone="muted">Sua sacola ainda está vazia.</Text>
        ) : (
          <Layout>
            <Items>
              {state.items.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onAdd={() => addItem(item.product)}
                  onDecrease={() => decreaseItem(item.product.id)}
                  onRemove={() => removeItem(item.product.id)}
                />
              ))}
            </Items>
            <CartSummary items={state.items} />
          </Layout>
        )}
      </Container>
    </PageSection>
  );
}
