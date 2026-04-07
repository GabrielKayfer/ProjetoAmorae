import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { CartPage } from "../pages/Cart";
import { CatalogPage } from "../pages/Catalog";
import { HomePage } from "../pages/Home";
import { NotFoundPage } from "../pages/NotFound";
import { ProductPage } from "../pages/Product";
import { LoginPage } from "../pages/Login";
import { ProfilePage } from "../pages/Profile";
import { FavoritesPage } from "../pages/Favorites";
import { AboutPage } from "../pages/About";
import { ContactPage } from "../pages/Contact";
import { ProtectedRoute } from "../components/auth/ProtectedRoute";
import { routes } from "../utils/routes";

const Shell = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;

export function AppRouter() {
  return (
    <BrowserRouter>
      <Shell>
        <Header />
        <Main>
          <Routes>
            <Route path={routes.home} element={<HomePage />} />
            <Route path={routes.catalog} element={<CatalogPage />} />
            <Route path={routes.product()} element={<ProductPage />} />
            <Route path={routes.cart} element={<CartPage />} />
            <Route path={routes.login} element={<LoginPage />} />
            <Route path={routes.profile} element={<ProtectedRoute><ProfilePage /></ProtectedRoute>} />
            <Route path={routes.favorites} element={<FavoritesPage />} />
            <Route path={routes.about} element={<AboutPage />} />
            <Route path={routes.contact} element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Main>
        <Footer />
      </Shell>
    </BrowserRouter>
  );
}
