import { Link } from "react-router-dom";
import styled from "styled-components";

import { useCart } from "../../hooks/useCart";
import { routes } from "../../utils/routes";
import Container from "./Container";
import { useAuth } from "../../context/AuthContext";

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 20;
  backdrop-filter: blur(16px);
  box-shadow: 0 10px 22px rgba(2, 89, 81, 0.08);
`;

const MainRow = styled(Container)`
  display: grid;
  grid-template-columns: auto minmax(240px, 1fr) auto;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => `${theme.spacing.lg} 0 ${theme.spacing.md}`};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing.md};
  }
`;

const TopLayer = styled.div`
  background: rgba(242, 235, 223, 0.96);
  border-bottom: 1px solid rgba(2, 89, 81, 0.08);
`;

const Brand = styled(Link)`
  display: inline-flex;
  align-items: baseline;
  width: fit-content;
  color: ${({ theme }) => theme.colors.brandDark};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  font-size: clamp(1.8rem, 2.3vw, 2.3rem);
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
  padding: 0.85rem 1rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  border: 1px solid rgba(2, 89, 81, 0.14);
  background: rgba(255, 255, 255, 0.48);
  color: ${({ theme }) => theme.colors.text};

  &::placeholder {
    color: ${({ theme }) => theme.colors.textMuted};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent};
    outline-offset: 2px;
  }
`;

const SearchButton = styled.button`
  min-width: 7rem;
  padding: 0.85rem 1rem;
  border-radius: ${({ theme }) => theme.radius.pill};
  background: ${({ theme }) => theme.colors.brandDark};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: transform 0.2s ease, background-color 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme }) => theme.colors.brand};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.brand};
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

  a, span {
    color: ${({ theme }) => theme.colors.brandDark};
    font-size: ${({ theme }) => theme.typography.scale.bodySm};
  }

  button {
    background: none;
    border: none;
    color: ${({ theme }) => theme.colors.brandDark};
    font-size: ${({ theme }) => theme.typography.scale.bodySm};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    cursor: pointer;
    text-decoration: underline;

    &:hover {
      color: ${({ theme }) => theme.colors.brand};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    ul {
      justify-content: flex-start;
    }
  }
`;

const AuthUser = styled.span`
  font-weight: ${({ theme }) => theme.typography.weight.semibold};
`;

const StoreRow = styled.div`
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
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }
`;

const CartLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.6rem;
  padding: 0 ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.radius.pill};
  background: rgba(242, 235, 223, 0.22);
  border: 1px solid rgba(242, 235, 223, 0.36);
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
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <Wrapper>
      <TopLayer>
        <MainRow>
          <Brand to={routes.home}>Amoraê</Brand>

          <SearchForm onSubmit={(event) => event.preventDefault()} role="search">
            <SrOnly htmlFor="header-search">Buscar produtos</SrOnly>
            <SearchField
              id="header-search"
              type="search"
              placeholder="Busque gelatos, taças, milkshakes e clássicos da casa"
            />
            <SearchButton type="submit">Buscar</SearchButton>
          </SearchForm>

          <UtilityNav aria-label="Acesso rápido">
            <ul>
              <li>
                <Link to={routes.favorites}>Favoritos</Link>
              </li>
              <li>
                <Link to={routes.about}>A marca</Link>
              </li>
              <li>
                <Link to={routes.contact}>Contato</Link>
              </li>
              <li>
                {isAuthenticated ? (
                  <>
                    <AuthUser>Olá, {user?.name}</AuthUser>{' '}
                    {user?.role === 'ADMIN' && (
                      <Link
                        to={routes.admin}
                        style={{ fontWeight: 'bold', color: 'var(--brand)', textDecoration: 'none' }}
                      >
                        ⚙️ Painel Admin
                      </Link>
                    )}{' '}
                    <button onClick={logout}>Sair</button>
                  </>
                ) : (
                  <Link to={routes.login}>Entrar</Link>
                )}
              </li>
            </ul>
          </UtilityNav>
        </MainRow>
      </TopLayer>

      <StoreRow>
        <StoreContent>
          <StoreNav aria-label="Navegação da loja">
            <ul>
              <li>
                <Link to={routes.catalog}>Cardápio</Link>
              </li>
              <li>
                <Link to={routes.home + "#categorias"}>Coleções</Link>
              </li>
              <li>
                <Link to={routes.home + "#destaques"}>Favoritos da casa</Link>
              </li>
              <li>
                <Link to={routes.home + "#monte-seu-pedido"}>Monte sua taça</Link>
              </li>
            </ul>
          </StoreNav>

          <CartLink to={routes.cart}>Sacola {itemCount}</CartLink>
        </StoreContent>
      </StoreRow>
    </Wrapper>
  );
}
