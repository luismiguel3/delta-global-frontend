import { create } from "zustand";

type AuthProps = {
  user: any;
  loading: boolean;
  authenticated: boolean;
  updateAuth: (payload: any) => void;
};

export const useAuth = create<AuthProps>((set) => ({
  user: null,
  loading: false,
  authenticated: false,
  updateAuth: (payload) => set((state) => ({ ...state, ...payload })),
}));

export function logout() {
  useAuth.setState({ authenticated: false, loading: false, user: null });
  localStorage.removeItem("auth");
  
}

export function getLocalStorageAuth() {
  const auth = localStorage.getItem("auth");
  if (auth) {
    useAuth.setState({
      authenticated: true,
      loading: false,
      user: JSON.parse(auth),
    });
    return true;
  }
  return false;
}
