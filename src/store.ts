import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface User {
  idUsuario: number | string;
  nombre?: string;
  clave?: string;
}

interface Store {
  user: User | null; // Aquí guardamos el objeto de usuario o null si no está logueado
  setUser: (user: User) => void; // Función para actualizar el usuario
  logout: () => void; // Función para hacer logout
}

const useStore = create(
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
    }),

    {
      name: 'user-storage', // Nombre del storage en localStorage
    }
  )
);

// Recuperar el usuario desde el store persistido
export function useUserStore() {
  const { user, setUser } = useStore();

  return { user, setUser };
}

export default useStore;