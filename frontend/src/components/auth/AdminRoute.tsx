import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { routes } from '../../utils/routes';

export const AdminRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated, user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to={routes.login} state={{ from: location }} replace />;
  }

  if (user?.role !== 'ADMIN') {
    return <Navigate to={routes.home} replace />;
  }

  return <>{children}</>;
};
