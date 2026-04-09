import React from 'react';
import styled from 'styled-components';

const DashboardHeader = styled.header`
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const Title = styled.h1`
  font-family: ${({ theme }) => theme.typography.fontFamily.heading};
  color: ${({ theme }) => theme.colors.brandDark};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Subtitle = styled.p`
  color: ${({ theme }) => theme.colors.textMuted};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: ${({ theme }) => theme.spacing.lg};
`;

const Card = styled.div`
  background: white;
  border-radius: ${({ theme }) => theme.radius.md};
  padding: ${({ theme }) => theme.spacing.lg};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);

  h3 {
    margin-bottom: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.brandDark};
  }
`;

export const AdminDashboard: React.FC = () => {
  return (
    <div>
      <DashboardHeader>
        <Title>Visão Geral do Sistema</Title>
        <Subtitle>Bem-vindo ao painel administrativo. Selecione uma opção no menu lateral para gerenciar a loja.</Subtitle>
      </DashboardHeader>

      <Grid>
        <Card>
          <h3>Gestão de Produtos</h3>
          <p>Adicione, edite ou remova produtos do catálogo.</p>
        </Card>
        <Card>
          <h3>Gestão de Categorias</h3>
          <p>Organize os produtos em coleções e categorias.</p>
        </Card>
      </Grid>
    </div>
  );
};
