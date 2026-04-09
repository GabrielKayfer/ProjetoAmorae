import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { useAuth } from '../../context/AuthContext';
import { routes } from '../../utils/routes';

const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f4f6f8;
`;

const Sidebar = styled.aside`
  width: 250px;
  background-color: ${({ theme }) => theme.colors.brandDark};
  color: white;
  display: flex;
  flex-direction: column;
`;

const SidebarHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.typography.scale.headingSm};
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SidebarNav = styled.nav`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md} 0;

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
  }

  a {
    display: block;
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
      color: white;
    }
  }
`;

const SidebarFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: ${({ theme }) => theme.typography.scale.bodySm};

  button {
    background: none;
    border: none;
    color: white;
    cursor: pointer;
    text-decoration: underline;
    padding: 0;
    font-size: inherit;
    margin-top: ${({ theme }) => theme.spacing.sm};
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.xl};
  overflow-y: auto;
`;

export const AdminLayout: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <LayoutWrapper>
      <Sidebar>
        <SidebarHeader>
          <div>Amoraê Admin</div>
          <Link to={routes.home} style={{ fontSize: '0.9rem', color: '#ccc', textDecoration: 'none' }}>
            ← Voltar para loja
          </Link>
        </SidebarHeader>
        <SidebarNav>
          <ul>
            <li><Link to={routes.admin}>Dashboard</Link></li>
            <li><Link to={`${routes.admin}/produtos`}>Produtos</Link></li>
            <li><Link to={`${routes.admin}/categorias`}>Categorias</Link></li>
          </ul>
        </SidebarNav>
        <SidebarFooter>
          <div>Logado como: <br /><strong>{user?.name}</strong></div>
          <button onClick={logout}>Sair do sistema</button>
        </SidebarFooter>
      </Sidebar>

      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutWrapper>
  );
};
