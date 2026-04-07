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
  max-width: 40rem;
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ContactItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BoldText = styled(Text)`
  font-weight: ${({ theme }) => theme.typography.weight.bold};
`;

export function ContactPage() {
  return (
    <PageSection>
      <Container>
        <Intro>
          <Title as="h1" $level="headingLg">
            Fale Conosco
          </Title>
        </Intro>

        <ContentBox>
          <ContactItem>
            <BoldText>E-mail</BoldText>
            <Text>contato@amorae.com.br</Text>
          </ContactItem>
          <ContactItem>
            <BoldText>Telefone / WhatsApp</BoldText>
            <Text>(11) 99999-0000</Text>
          </ContactItem>
          <ContactItem>
            <BoldText>Endereço</BoldText>
            <Text>Rua dos Sabores, 123 - Doce Vida, SP</Text>
          </ContactItem>
        </ContentBox>
      </Container>
    </PageSection>
  );
}
