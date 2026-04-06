import styled from 'styled-components';
import Container from '../components/layout/Container';
import PageSection from '../components/layout/PageSection';
import Title from '../components/ui/Title';
import Text from '../components/ui/Text';
import { useAuth } from '../context/AuthContext';

const ProfileCard = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  text-align: center;
`;

const UserInfo = styled.div`
  margin: ${({ theme }) => theme.spacing.lg} 0;
  padding: ${({ theme }) => theme.spacing.md};
  background: rgba(2, 89, 81, 0.05);
  border-radius: 8px;
`;

const Button = styled.button`
  background: #e53e3e;
  color: white;
  border: none;
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.xl};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export function ProfilePage() {
  const { user, logout } = useAuth();

  return (
    <PageSection>
      <Container>
        <ProfileCard>
          <Title as="h1" $level="headingLg">
            Meu Perfil
          </Title>

          {user && (
            <UserInfo>
              <Text as="p" style={{ marginBottom: '0.5rem' }}>
                <strong>Nome:</strong> {user.name}
              </Text>
              <Text as="p">
                <strong>Email:</strong> {user.email}
              </Text>
            </UserInfo>
          )}

          <Button onClick={logout}>
            Sair da conta
          </Button>
        </ProfileCard>
      </Container>
    </PageSection>
  );
}
