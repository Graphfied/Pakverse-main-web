import { create } from "zustand";

export const useStore = create((set) => ({
  initialState: {
    isAuthenticated: false,
    user: null,
  },
  register: (data) =>
    set((state) => ({
      initialState: { isAuthenticated: true, user: data },
    })),
  login: (data) =>
    set((state) => ({
      initialState: { isAuthenticated: true, user: data },
    })),
}));
