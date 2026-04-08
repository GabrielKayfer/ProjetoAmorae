import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { api } from '../api/api';

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
      const fetchFavorites = async () => {
        try {
          const response = await api.get('/favorites');
          if (response.data && Array.isArray(response.data.favorites)) {
            const serverFavorites = response.data.favorites;
            const storedFavorites = localStorage.getItem('favorites');

            let localFavorites: string[] = [];
            if (storedFavorites) {
              try {
                localFavorites = JSON.parse(storedFavorites);
                if (!Array.isArray(localFavorites)) {
                   localFavorites = [];
                }
              } catch (e) {
                // ignore
              }
            }

            // Sincroniza (adiciona os locais ao servidor, otimizado)
            // Aqui poderíamos iterar pelos locais e mandar pro servidor se não existirem
            // Por enquanto, faremos o unificado apenas localmente
            const unifiedFavorites = Array.from(new Set([...serverFavorites, ...localFavorites]));
            setFavorites(unifiedFavorites);

            // Se tinha local e eles não estavam no servidor, sincroniza um por um
            if (localFavorites.length > 0) {
                 localFavorites.forEach(async (id) => {
                     if (!serverFavorites.includes(id)) {
                         try {
                             await api.post(`/favorites/${id}`);
                         } catch (e) {
                             console.error("Falha ao sincronizar favorito local", id, e);
                         }
                     }
                 });
                 // Limpa o localStorage para que o banco seja a "Single Source of Truth"
                 localStorage.removeItem('favorites');
            }

          }
        } catch (error) {
          console.error("Erro ao buscar favoritos", error);
        }
      }

      fetchFavorites();
    }
  }, [isAuthenticated]);

  const toggleFavorite = async (productId: string) => {
    const isFavorite = favorites.includes(productId);

    // Atualiza estado local imediatamente (Optimistic UI)
    setFavorites((prev) => {
      return isFavorite
        ? prev.filter((id) => id !== productId)
        : [...prev, productId];
    });

    if (isAuthenticated) {
      try {
        if (!isFavorite) {
          await api.post(`/favorites/${productId}`);
        } else {
          await api.delete(`/favorites/${productId}`);
        }
      } catch (error) {
        console.error("Erro ao atualizar favorito no servidor", error);
        // Em caso de erro, reverte a UI otimista
        setFavorites((prev) => {
          return isFavorite
            ? [...prev, productId]
            : prev.filter((id) => id !== productId);
        });
      }
    }
  };

  const isFavorite = (productId: string) => favorites.includes(productId);

  return {
    favorites,
    toggleFavorite,
    isFavorite,
  };
}
