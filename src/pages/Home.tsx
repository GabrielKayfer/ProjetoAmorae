import { Link } from "react-router-dom";
import styled from "styled-components";

import { CategoryHighlights } from "../components/home/CategoryHighlights";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { Hero } from "../components/home/Hero";
import Button from "../components/ui/Button";
import Container from "../components/layout/Container";
import PageSection from "../components/layout/PageSection";
import Text from "../components/ui/Text";
import Title from "../components/ui/Title";
import { productsService } from "../services/products.service";
import { routes } from "../utils/routes";

const BenefitSection = styled(PageSection)`
  padding-top: 0;
`;

const SectionHeader = styled.div`
  max-width: 48rem;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
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

const BenefitGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: repeat(3, minmax(0, 1fr));

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.article`
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const BuilderSection = styled(PageSection)`
  padding-top: ${({ theme }) => theme.spacing.xl};
`;

const BuilderLayout = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const BuilderPanel = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.surface} 0%, ${({ theme }) => theme.colors.surfaceAlt} 100%);
  border: 1px solid ${({ theme }) => theme.colors.border};
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const BuilderStep = styled.div`
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  align-items: start;
  padding: ${({ theme }) => theme.spacing.md} 0;

  & + & {
    border-top: 1px solid rgba(2, 89, 81, 0.12);
  }
`;

const StepIndex = styled.span`
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.brandDark};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

const AboutSection = styled(PageSection)`
  background: rgba(242, 99, 99, 0.08);
`;

const AboutCard = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(18rem, 0.9fr);
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: center;
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: ${({ theme }) => theme.radius.lg};
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export function HomePage() {
  const featuredProducts = productsService.listFeatured();

  return (
    <>
      <Hero />
      <CategoryHighlights />
      <FeaturedProducts products={featuredProducts} />

      <BenefitSection id="beneficios">
        <Container>
          <SectionHeader>
            <Eyebrow>Confianca e praticidade</Eyebrow>
            <Title as="h2" $level="headingLg">
              Elementos que deixam a home com cara de loja e sustentam a proxima
              evolucao.
            </Title>
          </SectionHeader>

          <BenefitGrid>
            <BenefitCard>
              <Title as="h3" $level="headingSm">
                Pedidos guiados
              </Title>
              <Text $tone="muted">
                A navegacao agora prioriza descoberta, escolha e proximos passos
                de compra dentro da linguagem da Amorae.
              </Text>
            </BenefitCard>
            <BenefitCard>
              <Title as="h3" $level="headingSm">
                Base para integracao
              </Title>
              <Text $tone="muted">
                Cards, destaques e chamadas estao prontos para receber dados reais
                sem reestruturar a home React.
              </Text>
            </BenefitCard>
            <BenefitCard>
              <Title as="h3" $level="headingSm">
                Marca preservada
              </Title>
              <Text $tone="muted">
                Cores, atmosfera e respiro visual do legado foram migrados para o
                modelo componentizado da nova arquitetura.
              </Text>
            </BenefitCard>
          </BenefitGrid>
        </Container>
      </BenefitSection>

      <BuilderSection id="monte-seu-pedido">
        <BuilderLayout>
          <div>
            <Eyebrow>Proxima etapa natural</Eyebrow>
            <Title as="h2" $level="headingLg">
              Uma area simples para antecipar a experiencia de montar o pedido.
            </Title>
            <Text $tone="muted">
              Ainda e uma secao visual, mas ja prepara a interface para tamanho,
              base, frutas e adicionais sem misturar isso com backend agora.
            </Text>
            <ActionRow>
              <Link to={routes.catalog}>
                <Button as="span">Ver produtos</Button>
              </Link>
              <Link to={routes.cart}>
                <Button as="span" $variant="secondary">
                  Revisar sacola
                </Button>
              </Link>
            </ActionRow>
          </div>

          <BuilderPanel>
            <BuilderStep>
              <StepIndex>1</StepIndex>
              <div>
                <Title as="h3" $level="headingSm">
                  Escolha a base
                </Title>
                <Text $tone="muted">
                  Acai, salada pronta ou bebida natural em uma futura selecao por
                  variacoes.
                </Text>
              </div>
            </BuilderStep>
            <BuilderStep>
              <StepIndex>2</StepIndex>
              <div>
                <Title as="h3" $level="headingSm">
                  Adicione complementos
                </Title>
                <Text $tone="muted">
                  Frutas, granola, caldas e toppings entram depois como estados de
                  interface reais.
                </Text>
              </div>
            </BuilderStep>
            <BuilderStep>
              <StepIndex>3</StepIndex>
              <div>
                <Title as="h3" $level="headingSm">
                  Revise e envie
                </Title>
                <Text $tone="muted">
                  A composicao ja antecipa o caminho natural para carrinho e
                  checkout no proximo ciclo.
                </Text>
              </div>
            </BuilderStep>
          </BuilderPanel>
        </BuilderLayout>
      </BuilderSection>

      <AboutSection>
        <AboutCard>
          <div>
            <Eyebrow>Sobre a marca</Eyebrow>
            <Title as="h2" $level="headingLg">
              O institucional segue presente, mas agora em apoio a experiencia
              comercial da home.
            </Title>
          </div>
          <Text $tone="muted">
            A Amorae continua comunicando leveza, frescor e cuidado com os
            ingredientes. A diferenca e que esse discurso agora sustenta a
            navegacao da loja em vez de competir com ela.
          </Text>
        </AboutCard>
      </AboutSection>
    </>
  );
}
