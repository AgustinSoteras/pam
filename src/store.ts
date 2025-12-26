import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  idUsuario: number | string;
  email: string;
  nombre?: string;
  rol?: string;
}

interface Store {
  user: User | null; // Aquí guardamos el objeto de usuario o null si no está logueado
  setUser: (user: User) => void; // Función para actualizar el usuario
  logout: () => void; // Función para hacer logout

  tema: 'light' | 'dark';
  toggleTema: () => void;
  setTema: (tema: 'light' | 'dark') => void;

}

const usePersistedStore = create(
  persist<Store>(
    (set, get) => ({
      user: null, // Estado inicial
      setUser: (user) => {
        const validUser = { ...user };
        set({ user: validUser });
      },
      logout: () => {
        set({ user: null });
      },

      tema: 'light',
      toggleTema: () =>
      set({ tema: get().tema === 'light' ? 'dark' : 'light' }),
      setTema: (tema) => set({ tema }),
    }),

    {
      name: 'user-storage', // Nombre del storage en localStorage
    }
  )
);

// Recuperar el usuario desde el store persistido
export function useUserStore() {
  const { user, setUser } = usePersistedStore();

  return { user, setUser };
}

export default usePersistedStore;