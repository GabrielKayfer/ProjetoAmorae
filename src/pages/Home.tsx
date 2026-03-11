import { Link } from "react-router-dom";
import styled from "styled-components";

import { CategoryHighlights } from "../components/home/CategoryHighlights";
import { FeaturedProducts } from "../components/home/FeaturedProducts";
import { Hero } from "../components/home/Hero";
import Container from "../components/layout/Container";
import PageSection from "../components/layout/PageSection";
import { ProductList } from "../components/product/ProductList";
import Button from "../components/ui/Button";
import Text from "../components/ui/Text";
import Title from "../components/ui/Title";
import { productsService } from "../services/products.service";
import { routes } from "../utils/routes";

const SectionHeader = styled.div`
  max-width: 44rem;
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

const BenefitSection = styled(PageSection)`
  padding-top: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};
`;

const BenefitGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  grid-template-columns: 1.2fr 1fr 1fr;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.article`
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 1.75rem;
  background: linear-gradient(180deg, rgba(242, 235, 223, 0.88) 0%, rgba(255, 255, 255, 0.2) 100%);
  border: 1px solid rgba(2, 89, 81, 0.08);
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const BenefitQuote = styled(Text)`
  margin-top: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.brandDark};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: 1.2rem;
  line-height: 1.5;
`;

const BuilderSection = styled(PageSection)`
  padding-top: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};
`;

const BuilderLayout = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 0.86fr) minmax(0, 1.14fr);
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
  }
`;

const BuilderCopy = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  padding-top: ${({ theme }) => theme.spacing.md};
`;

const BuilderPanel = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 1.85rem;
  background: linear-gradient(180deg, rgba(242, 235, 223, 0.92) 0%, rgba(242, 153, 133, 0.22) 100%);
  border: 1px solid rgba(2, 89, 81, 0.08);
  box-shadow: ${({ theme }) => theme.shadows.md};
`;

const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const ChoiceChip = styled.span`
  display: inline-flex;
  align-items: center;
  min-height: 2.35rem;
  padding: 0 ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(242, 235, 223, 0.72);
  color: ${({ theme }) => theme.colors.brandDark};
  font-size: ${({ theme }) => theme.typography.scale.bodySm};
`;

const StepGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
`;

const BuilderStep = styled.div`
  display: grid;
  grid-template-columns: 3rem minmax(0, 1fr);
  gap: ${({ theme }) => theme.spacing.md};
  align-items: start;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: 1.2rem;
  background: rgba(242, 235, 223, 0.58);
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

const ExtensionSection = styled(PageSection)`
  padding-top: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};
  background: linear-gradient(180deg, rgba(242, 153, 133, 0.06) 0%, rgba(242, 235, 223, 0) 100%);
`;

const EditorialSection = styled(PageSection)`
  padding-top: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const HeaderCopy = styled.div`
  max-width: 42rem;
`;

const AboutSection = styled(PageSection)`
  padding-top: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};
  background: linear-gradient(180deg, rgba(242, 99, 99, 0.08) 0%, rgba(242, 153, 133, 0.05) 100%);
`;

const AboutCard = styled(Container)`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
  max-width: 56rem;
  padding: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};
  border-radius: 2rem;
  background: rgba(242, 235, 223, 0.82);
  border: 1px solid rgba(2, 89, 81, 0.08);
  box-shadow: ${({ theme }) => theme.shadows.md};
  text-align: center;
`;

const AboutManifesto = styled(Text)`
  max-width: 38rem;
  margin: 0 auto;
  font-size: 1.05rem;
  line-height: ${({ theme }) => theme.typography.lineHeight.relaxed};
`;

const ActionRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

const InlineLink = styled.a`
  color: ${({ theme }) => theme.colors.brandDark};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export function HomePage() {
  const featuredProducts = productsService.listFeatured();
  const brandExtensionProducts = productsService.listByLine("brand-extension");
  const editorialProducts = productsService.listByLine("editorial");

  return (
    <>
      <Hero />
      <CategoryHighlights />
      <FeaturedProducts products={featuredProducts} />

      <BenefitSection id="beneficios">
        <Container>
          <SectionHeader>
            <Eyebrow>O jeito Amoraê</Eyebrow>
            <Title as="h2" $level="headingLg">
              A Amoraê mistura charme retrô, sabores afetivos e uma beleza leve
              que faz qualquer pausa parecer mais especial.
            </Title>
          </SectionHeader>

          <BenefitGrid>
            <BenefitCard>
              <Title as="h3" $level="headingSm">
                Feito para dar vontade
              </Title>
              <BenefitQuote>
                Taças, gelatos e clássicos da casa pensados para abrir o apetite
                no primeiro olhar e confirmar na primeira colherada.
              </BenefitQuote>
            </BenefitCard>
            <BenefitCard>
              <Title as="h3" $level="headingSm">
                Doce na medida
              </Title>
              <Text $tone="muted">
                Receitas cremosas, familiares e bem resolvidas, com cara de casa
                e acabamento de vitrine bonita.
              </Text>
            </BenefitCard>
            <BenefitCard>
              <Title as="h3" $level="headingSm">
                Para voltar sempre
              </Title>
              <Text $tone="muted">
                Uma experiência pensada para quem gosta de passar, escolher sem
                pressa e ter um lugar favorito para repetir.
              </Text>
            </BenefitCard>
          </BenefitGrid>
        </Container>
      </BenefitSection>

      <BuilderSection id="monte-seu-pedido">
        <BuilderLayout>
          <BuilderCopy>
            <div>
              <Eyebrow>Monte seu pedido</Eyebrow>
              <Title as="h2" $level="headingLg">
                Da taça autoral ao milkshake do fim de tarde, sempre tem um jeito de pedir a sua Amoraê.
              </Title>
            </div>
            <Text $tone="muted">
              Uma prévia leve para combinar sabores, coberturas e pequenos detalhes antes de escolher no cardápio.
            </Text>
            <ChipRow>
              <ChoiceChip>Camadas cremosas</ChoiceChip>
              <ChoiceChip>Clássicos para dividir</ChoiceChip>
              <ChoiceChip>Milkshakes delicados</ChoiceChip>
              <ChoiceChip>Coberturas autorais</ChoiceChip>
            </ChipRow>
            <ActionRow>
              <Link to={routes.catalog}>
                <Button as="span">Ver cardápio</Button>
              </Link>
              <Link to={routes.cart}>
                <Button as="span" $variant="secondary">
                  Revisar sacola
                </Button>
              </Link>
            </ActionRow>
          </BuilderCopy>

          <BuilderPanel>
            <Title as="h3" $level="headingSm">
              Como começar
            </Title>
            <StepGrid>
              <BuilderStep>
                <StepIndex>1</StepIndex>
                <div>
                  <Title as="h3" $level="headingSm">
                    Escolha o clima do pedido
                  </Title>
                  <Text $tone="muted">
                    Uma taça da vitrine, um clássico para dividir ou uma bebida gelada para acompanhar o passeio.
                  </Text>
                </div>
              </BuilderStep>
              <BuilderStep>
                <StepIndex>2</StepIndex>
                <div>
                  <Title as="h3" $level="headingSm">
                    Combine detalhes e camadas
                  </Title>
                  <Text $tone="muted">
                    Coberturas, contrastes e texturas que deixam o pedido ainda mais bonito e gostoso.
                  </Text>
                </div>
              </BuilderStep>
              <BuilderStep>
                <StepIndex>3</StepIndex>
                <div>
                  <Title as="h3" $level="headingSm">
                    Acrescente um mimo
                  </Title>
                  <Text $tone="muted">
                    Um jeito simples de levar a experiência um pouco além da sobremesa.
                  </Text>
                </div>
              </BuilderStep>
            </StepGrid>
          </BuilderPanel>
        </BuilderLayout>
      </BuilderSection>

      <ExtensionSection>
        <Container>
          <HeaderRow>
            <HeaderCopy>
              <Eyebrow>Leve a Amoraê com você</Eyebrow>
              <Title as="h2" $level="headingLg">
                Lembranças da marca para continuar a pausa bonita fora da loja.
              </Title>
              <Text $tone="muted">
                Ecobag, caneca e copo reutilizável pensados para o dia a dia, com o mesmo charme da casa.
              </Text>
            </HeaderCopy>
            <InlineLink href={routes.catalog}>Ver cardápio completo</InlineLink>
          </HeaderRow>
          <ProductList products={brandExtensionProducts} />
        </Container>
      </ExtensionSection>

      <EditorialSection>
        <Container>
          <HeaderRow>
            <HeaderCopy>
              <Eyebrow>Presentes & peças especiais</Eyebrow>
              <Title as="h2" $level="headingLg">
                Detalhes para presentear, colecionar ou guardar a atmosfera da casa.
              </Title>
              <Text $tone="muted">
                Itens de tiragem especial que ampliam o universo da Amoraê sem disputar espaço com o cardápio principal.
              </Text>
            </HeaderCopy>
          </HeaderRow>
          <ProductList products={editorialProducts} />
        </Container>
      </EditorialSection>

      <AboutSection>
        <AboutCard>
          <Eyebrow>Manifesto Amoraê</Eyebrow>
          <Title as="h2" $level="headingLg">
            A Amoraê nasceu para servir pausas doces com charme, memória afetiva e vontade de voltar.
          </Title>
          <AboutManifesto $tone="muted">
            Entre taças, gelatos, clássicos da casa e lembranças da marca, cada detalhe foi pensado para fazer do simples um momento especial.
          </AboutManifesto>
        </AboutCard>
      </AboutSection>
    </>
  );
}
