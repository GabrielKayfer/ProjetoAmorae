import { Link } from "react-router-dom";

import Container from "../components/layout/Container";
import PageSection from "../components/layout/PageSection";
import Button from "../components/ui/Button";
import Text from "../components/ui/Text";
import Title from "../components/ui/Title";
import { routes } from "../utils/routes";

export function NotFoundPage() {
  return (
    <PageSection>
      <Container>
        <Title as="h1" $level="headingLg">Pagina nao encontrada</Title>
        <Text $tone="muted">
          A rota solicitada nao existe nesta fase inicial do projeto.
        </Text>
        <Link to={routes.home}>
          <Button as="span">Voltar para a home</Button>
        </Link>
      </Container>
    </PageSection>
  );
}
