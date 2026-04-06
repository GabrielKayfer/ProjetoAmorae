import { useState, useEffect } from "react";
import styled from "styled-components";

import Container from "../components/layout/Container";
import PageSection from "../components/layout/PageSection";
import { ProductList } from "../components/product/ProductList";
import Text from "../components/ui/Text";
import Title from "../components/ui/Title";
import { productsService } from "../services/products.service";
import type { Product } from "../types/product";

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

const SectionBlock = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};

  & + & {
    margin-top: ${({ theme }) => `calc(${theme.spacing.xl} + 1rem)`};
  }
`;

const SectionHead = styled.div`
  max-width: 42rem;
`;

const Divider = styled.div`
  height: 1px;
  margin: ${({ theme }) => `${theme.spacing.xl} 0`};
  background: rgba(2, 89, 81, 0.1);
`;

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 4px solid rgba(2, 89, 81, 0.2);
  border-left-color: ${({ theme }) => theme.colors.brand};
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

export function CatalogPage() {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    let isMounted = true;

    // Simular chamada assíncrona
    const fetchProducts = () => {
      setTimeout(() => {
        if (isMounted) {
          setProducts(productsService.list());
          setLoading(false);
        }
      }, 1500); // tempo de loading de 1.5s
    };

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  if (loading) {
    return (
      <PageSection>
        <Container>
          <Intro>
            <Eyebrow>Cardápio Amoraê</Eyebrow>
            <Title as="h1" $level="headingLg">
              Taças, clássicos da casa, bebidas e lembranças para levar um pouco da marca com você.
            </Title>
          </Intro>
          <SpinnerContainer>
            <Spinner />
          </SpinnerContainer>
        </Container>
      </PageSection>
    );
  }

  const brandExtensionProducts = products.filter((product) => product.line === "brand-extension");
  const editorialProducts = products.filter((product) => product.line === "editorial");
  const tacas = products.filter((product) => product.category === "tacas-especiais");
  const compartilhar = products.filter((product) => product.category === "para-compartilhar");
  const bebidas = products.filter((product) => product.category === "milkshakes-e-bebidas");

  return (
    <PageSection>
      <Container>
        <Intro>
          <Eyebrow>Cardápio Amoraê</Eyebrow>
          <Title as="h1" $level="headingLg">
            Taças, clássicos da casa, bebidas e lembranças para levar um pouco da marca com você.
          </Title>
          <Text $tone="muted">
            Os pedidos mais queridos da vitrine convivem com peças especiais da casa, tudo no mesmo clima delicado e retrô da Amoraê.
          </Text>
        </Intro>

        <SectionBlock>
          <SectionHead>
            <Title as="h2" $level="headingLg">Taças especiais</Title>
            <Text $tone="muted">
              Assinaturas da casa com camadas generosas, acabamento bonito e sabor de sobremesa especial.
            </Text>
          </SectionHead>
          <ProductList products={tacas} />
        </SectionBlock>

        <Divider />

        <SectionBlock>
          <SectionHead>
            <Title as="h2" $level="headingLg">Para compartilhar</Title>
            <Text $tone="muted">
              Clássicos de colher para dividir a mesa, a conversa e o melhor da pausa.
            </Text>
          </SectionHead>
          <ProductList products={compartilhar} />
        </SectionBlock>

        <Divider />

        <SectionBlock>
          <SectionHead>
            <Title as="h2" $level="headingLg">Milkshakes & bebidas</Title>
            <Text $tone="muted">
              Bebidas cremosas e refrescantes para acompanhar o passeio, o encontro ou o fim de tarde.
            </Text>
          </SectionHead>
          <ProductList products={bebidas} />
        </SectionBlock>

        <Divider />

        <SectionBlock>
          <SectionHead>
            <Title as="h2" $level="headingLg">Lembranças da marca</Title>
            <Text $tone="muted">
              Objetos do dia a dia com o repertório visual da casa, feitos para presentear ou levar para perto.
            </Text>
          </SectionHead>
          <ProductList products={brandExtensionProducts} />
        </SectionBlock>

        <Divider />

        <SectionBlock>
          <SectionHead>
            <Title as="h2" $level="headingLg">Peças especiais</Title>
            <Text $tone="muted">
              Edições e itens ilustrados para quem gosta de guardar a atmosfera da Amoraê em detalhes.
            </Text>
          </SectionHead>
          <ProductList products={editorialProducts} />
        </SectionBlock>
      </Container>
    </PageSection>
  );
}
