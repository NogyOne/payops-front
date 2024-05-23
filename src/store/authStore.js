import { create } from 'zustand'

export const useAuth = create((set, get) => ({
  user: null,
  setUser: user => {
    set({ user })
  },
  clearUser: user => {
    set({ user: null })
  },
}))
