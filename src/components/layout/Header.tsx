import { Link } from "react-router-dom";
import styled from "styled-components";

import { useCart } from "../../hooks/useCart";
import { routes } from "../../utils/routes";
import Container from "./Container";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(12px);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.brandDark};
    z-index: -2;
  }
`;

const MainRow = styled(Container)`
  display: grid;
  grid-template-columns: auto minmax(260px, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => `${theme.spacing.lg} 0`};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: ${({ theme }) => theme.typography.scale.headingLg};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  letter-spacing: 0.01em;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

const SearchField = styled.input`
  width: 100%;
  min-width: 0;
  padding: 0.8rem 1rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

const SearchButton = styled.button`
  min-width: 7rem;
  padding: 0.8rem 1rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.accent};
  color: ${({ theme }) => theme.colors.brandDark};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.surfaceAlt};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.white};
    outline-offset: 2px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

const UtilityNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.scale.bodySm};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    ul {
      justify-content: flex-start;
    }
  }
`;

const StoreRow = styled.div`
  border-top: 1px solid rgba(242, 235, 223, 0.18);
  background: ${({ theme }) => theme.colors.brand};
`;

const StoreContent = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => `${theme.spacing.sm} 0`};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const StoreNav = styled.nav`
  ul {
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing.lg};
    flex-wrap: wrap;
  }

  a {
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.typography.scale.bodySm};
  }
`;

const CartLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.75rem;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid rgba(242, 235, 223, 0.34);
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

const SrOnly = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export function Header() {
  const { itemCount } = useCart();

  return (
    <Wrapper>
      <MainRow>
        <Brand to={routes.home}>Amorae</Brand>

        <SearchForm onSubmit={(event) => event.preventDefault()} role="search">
          <SrOnly htmlFor="header-search">Buscar produtos</SrOnly>
          <SearchField
            id="header-search"
            type="search"
            placeholder="Busque bowls, frutas e bebidas"
          />
          <SearchButton type="submit">Buscar</SearchButton>
        </SearchForm>

        <UtilityNav aria-label="Acesso rapido">
          <ul>
            <li>
              <Link to={routes.home + "#destaques"}>Comprar agora</Link>
            </li>
            <li>
              <Link to={routes.home + "#beneficios"}>Como funciona</Link>
            </li>
            <li>
              <Link to={routes.home + "#footer-contact"}>Contato</Link>
            </li>
          </ul>
        </UtilityNav>
      </MainRow>

      <StoreRow>
        <StoreContent>
          <StoreNav aria-label="Navegacao da loja">
            <ul>
              <li>
                <Link to={routes.catalog}>Catalogo</Link>
              </li>
              <li>
                <Link to={routes.home + "#categorias"}>Categorias</Link>
              </li>
              <li>
                <Link to={routes.home + "#destaques"}>Destaques</Link>
              </li>
              <li>
                <Link to={routes.home + "#monte-seu-pedido"}>Monte seu pedido</Link>
              </li>
            </ul>
          </StoreNav>

          <CartLink to={routes.cart}>Sacola {itemCount}</CartLink>
        </StoreContent>
      </StoreRow>
    </Wrapper>
  );
}
