import { Link } from "react-router-dom";
import styled from "styled-components";

import { routes } from "../../utils/routes";
import Container from "./Container";

const instagramUrl = new URL("../../../Imagens/instagram.png", import.meta.url).href;
const facebookUrl = new URL("../../../Imagens/facebook.png", import.meta.url).href;
const youtubeUrl = new URL("../../../Imagens/youtube.png", import.meta.url).href;

const Wrapper = styled.footer`
  margin-top: auto;
  padding-top: ${({ theme }) => theme.spacing.xl};
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.brandDark} 0%, ${({ theme }) => theme.colors.brand} 100%);
  color: ${({ theme }) => theme.colors.white};
`;

const Content = styled(Container)`
  display: grid;
  grid-template-columns: minmax(0, 1.2fr) repeat(3, minmax(140px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  align-items: start;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const Brand = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

const BrandMark = styled(Link)`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.scale.headingLg};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.01em;
`;

const Description = styled.p`
  max-width: 28rem;
  color: rgba(242, 235, 223, 0.88);
`;

const Column = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Heading = styled.h3`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.scale.headingSm};
`;

const FooterLinks = styled.ul`
  display: grid;
  gap: ${({ theme }) => theme.spacing.sm};

  a,
  li {
    color: rgba(242, 235, 223, 0.9);
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 2.625rem;
  height: 2.625rem;
  border-radius: 50%;
  background: rgba(242, 235, 223, 0.14);
`;

const SocialIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;

const Bottom = styled(Container)`
  margin-top: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => `${theme.spacing.md} 0 ${theme.spacing.xl}`};
  border-top: 1px solid rgba(242, 235, 223, 0.18);
  color: rgba(242, 235, 223, 0.82);
  font-size: ${({ theme }) => theme.typography.scale.bodySm};
`;

export function Footer() {
  return (
    <Wrapper>
      <Content>
        <Brand>
          <BrandMark to={routes.home}>Amorae</BrandMark>
          <Description>
            Frutas, bowls e bebidas com identidade leve e uma base React pronta
            para evoluir em catalogo, pagina de produto e carrinho.
          </Description>
        </Brand>

        <Column>
          <Heading>Loja</Heading>
          <FooterLinks>
            <li>
              <Link to={routes.catalog}>Catalogo</Link>
            </li>
            <li>
              <Link to={routes.home + "#categorias"}>Categorias</Link>
            </li>
            <li>
              <Link to={routes.home + "#destaques"}>Destaques</Link>
            </li>
          </FooterLinks>
        </Column>

        <Column id="footer-contact">
          <Heading>Contato</Heading>
          <FooterLinks>
            <li>
              <a href="tel:+5527999999999">(27) 99999-9999</a>
            </li>
            <li>
              <a href="mailto:contato@amorae.com.br">contato@amorae.com.br</a>
            </li>
            <li>Rua dos Lyrios, 51 - Centro - Vitoria/ES</li>
          </FooterLinks>
        </Column>

        <Column>
          <Heading>Redes</Heading>
          <SocialLinks>
            <li>
              <SocialLink href="#" aria-label="Instagram da Amorae">
                <SocialIcon src={instagramUrl} alt="Instagram" />
              </SocialLink>
            </li>
            <li>
              <SocialLink href="#" aria-label="Facebook da Amorae">
                <SocialIcon src={facebookUrl} alt="Facebook" />
              </SocialLink>
            </li>
            <li>
              <SocialLink href="#" aria-label="Youtube da Amorae">
                <SocialIcon src={youtubeUrl} alt="Youtube" />
              </SocialLink>
            </li>
          </SocialLinks>
        </Column>
      </Content>

      <Bottom>&copy; 2026 Amorae. Todos os direitos reservados.</Bottom>
    </Wrapper>
  );
}
