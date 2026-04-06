import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';


export function useFavorites() {
  const { isAuthenticated } = useAuth();
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    // Sincroniza o localStorage ao inicializar
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      try {
        const parsed = JSON.parse(storedFavorites);
        if (Array.isArray(parsed)) {
          setFavorites(parsed);
        }
      } catch (e) {
        console.error('Failed to parse favorites from localStorage', e);
      }
    }
  }, []);

  useEffect(() => {
    // Quando deslogado, salva no localStorage sempre que os favoritos mudarem
    if (!isAuthenticated) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }, [favorites, isAuthenticated]);

  useEffect(() => {
    if (isAuthenticated) {
      const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
        try {
          const parsed = JSON.parse(storedFavorites);
          if (Array.isArray(parsed) && parsed.length > 0) {
            console.info('Sincronizando favoritos locais com o servidor:', parsed);
            // Simula envio pro servidor

            // Unifica os favoritos
            setFavorites(prev => Array.from(new Set([...prev, ...parsed])));

            // Limpa o localStorage para que o banco seja a "Single Source of Truth"
            localStorage.removeItem('favorites');
          }
        } catch (e) {
          console.error('Failed to parse favorites during sync', e);
        }
      }
    }
  }, [isAuthenticated]);

  const toggleFavorite = (productId: string) => {
    setFavorites((prev) => {
      const isFavorite = prev.includes(productId);
      const newFavorites = isFavorite
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];

      if (isAuthenticated) {
        if (!isFavorite) {
          console.log(`Chamando API POST /favorites para o produto ${productId}`);
        } else {
          console.log(`Chamando API DELETE /favorites para o produto ${productId}`);
        }
      }

      return newFavorites;
    });
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}
