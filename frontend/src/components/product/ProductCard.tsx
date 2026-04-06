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
  background: linear-gradient(180deg, rgba(242, 235, 223, 0.92) 0%, rgba(255, 255, 255, 0.28) 100%);
  border: 1px solid rgba(2, 89, 81, 0.1);
  border-radius: 1.65rem;
  box-shadow: ${({ theme }) => theme.shadows.md};
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.background};
    box-shadow: 0 24px 42px rgba(2, 89, 81, 0.14);
  }
`;

const Media = styled.div`
  position: relative;
  padding: 1rem 1rem 0;
`;

const Thumb = styled.img`
  width: 100%;
  aspect-ratio: 4 / 3;
  object-fit: cover;
  border-radius: 1.3rem;
  background: ${({ theme }) => theme.colors.background};
`;

const Tag = styled.span`
  position: absolute;
  left: 1.75rem;
  bottom: 1rem;
  display: inline-flex;
  padding: 0.45rem 0.85rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(242, 235, 223, 0.94);
  color: ${({ theme }) => theme.colors.brandDark};
  font-size: ${({ theme }) => theme.typography.scale.caption};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const Body = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
`;

const MetaTop = styled.div`
  display: grid;
  gap: 0.25rem;
`;

const CategoryLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.scale.caption};
  text-transform: uppercase;
  letter-spacing: 0.08em;
`;

const ProductName = styled(Title)`
  margin-bottom: 0.15rem;
`;

const Description = styled(Text)`
  max-width: 26ch;
`;

const Meta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const PriceGroup = styled.div`
  display: grid;
  gap: 0.15rem;
`;

const PriceLabel = styled.span`
  color: ${({ theme }) => theme.colors.textMuted};
  font-size: ${({ theme }) => theme.typography.scale.caption};
  text-transform: uppercase;
  letter-spacing: 0.06em;
`;

const Price = styled.strong`
  color: ${({ theme }) => theme.colors.brandDark};
  font-size: 1.35rem;
  line-height: 1;
`;

const Volume = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 2rem;
  padding: 0 0.75rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(242, 166, 73, 0.14);
  color: ${({ theme }) => theme.colors.brandDark};
  font-size: ${({ theme }) => theme.typography.scale.bodySm};
`;

const ProductLink = styled(Link)`
  display: flex;
`;

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card>
      <Media>
        <Thumb src={product.imageUrl} alt={product.name} />
        <Tag>{product.badge}</Tag>
      </Media>

      <Body>
        <MetaTop>
          <CategoryLabel>{product.categoryLabel}</CategoryLabel>
          <div>
            <ProductName as="h3" $level="headingSm">
              {product.name}
            </ProductName>
            <Description $tone="muted">{product.shortDescription}</Description>
          </div>
        </MetaTop>

        <Meta>
          <PriceGroup>
            <PriceLabel>A partir de</PriceLabel>
            <Price>{formatCurrency(product.price)}</Price>
          </PriceGroup>
          {product.sizeLabel ? <Volume>{product.sizeLabel}</Volume> : null}
        </Meta>

        <ProductLink to={routes.product(product.slug)}>
          <Button as="span">Ver detalhes</Button>
        </ProductLink>
      </Body>
    </Card>
  );
}
