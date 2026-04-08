import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useNavigate, useLocation, Navigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

import Container from '../components/layout/Container';
import PageSection from '../components/layout/PageSection';
import Title from '../components/ui/Title';
import Text from '../components/ui/Text';
import { useAuth } from '../context/AuthContext';

const FormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl};
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Input = styled.input`
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid rgba(2, 89, 81, 0.2);
  border-radius: 4px;
  font-family: ${({ theme }) => theme.typography.fontFamily.base};
  font-size: ${({ theme }) => theme.typography.scale.body};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.brand};
  }
`;

const Button = styled.button`
  background: ${({ theme }) => theme.colors.brand};
  color: white;
  border: none;
  border-radius: 4px;
  padding: ${({ theme }) => theme.spacing.md};
  font-weight: ${({ theme }) => theme.typography.weight.bold};
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const ErrorText = styled.span`
  color: #e53e3e;
  font-size: ${({ theme }) => theme.typography.scale.caption};
`;

const GlobalErrorText = styled(ErrorText)`
  text-align: center;
  display: block;
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

interface LoginFormInputs {
  email: string;
  password?: string;
}

export function LoginPage() {
  const { login, loading, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [authError, setAuthError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const from = location.state?.from?.pathname || '/';

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  const onSubmit = async (data: LoginFormInputs) => {
    setAuthError(null);
    try {
      await login(data.email, data.password);
      navigate(from, { replace: true });
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 401) {
        setAuthError('E-mail ou senha inválidos');
      } else {
        setAuthError('Ocorreu um erro ao tentar fazer login. Tente novamente mais tarde.');
      }
    }
  };

  return (
    <PageSection>
      <Container>
        <FormContainer>
          <Title as="h1" $level="headingLg" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            Login
          </Title>
          <Text $tone="muted" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            Acesse sua conta para continuar
          </Text>

          <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <Input
                type="email"
                placeholder="Seu e-mail"
                {...register('email', { required: 'E-mail é obrigatório' })}
                style={{ width: '100%', boxSizing: 'border-box' }}
              />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            </div>

            <div>
              <Input
                type="password"
                placeholder="Sua senha"
                {...register('password', { required: 'Senha é obrigatória' })}
                style={{ width: '100%', boxSizing: 'border-box' }}
              />
              {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
            </div>

            <Button type="submit" disabled={loading}>
              {loading ? 'Entrando...' : 'Entrar'}
            </Button>

            {authError && <GlobalErrorText>{authError}</GlobalErrorText>}
          </Form>
        </FormContainer>
      </Container>
    </PageSection>
  );
}
