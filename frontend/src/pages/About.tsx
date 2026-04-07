import styled from "styled-components";
import Container from "../components/layout/Container";
import PageSection from "../components/layout/PageSection";
import Text from "../components/ui/Text";
import Title from "../components/ui/Title";

const Intro = styled.div`
  max-width: 46rem;
  margin: 0 auto;
  text-align: center;
  margin-bottom: ${({ theme }) => `calc(${theme.spacing.xl} + 0.5rem)`};
`;

const ContentBox = styled.div`
  background: rgba(2, 89, 81, 0.05);
  padding: ${({ theme }) => theme.spacing.xl};
  border-radius: 8px;
  max-width: 60rem;
  margin: 0 auto;
  text-align: center;
`;

export function AboutPage() {
  return (
    <PageSection>
      <Container>
        <Intro>
          <Title as="h1" $level="headingLg">
            A Marca Amoraê
          </Title>
        </Intro>

        <ContentBox>
          <Text>
            Bem-vindo à Amoraê, onde o frescor encontra a doçura! Nossa paixão
            é criar gelatos e sobremesas inesquecíveis, com ingredientes de alta
            qualidade e receitas que aquecem o coração. Venha descobrir nossos
            sabores exclusivos e coleções especiais feitas sob medida para você.
          </Text>
        </ContentBox>
      </Container>
    </PageSection>
  );
}
