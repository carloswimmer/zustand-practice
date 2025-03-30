import { createStore } from "zustand";

export type CatStore = {
  cats: number;
  addCat: () => void;
  removeAllCats: () => void;
};

export const createCatStore = (initialCount: number) =>
  createStore<CatStore>()((set) => ({
    cats: initialCount,
    addCat: () => set((state) => ({ cats: state.cats + 1 })),
    removeAllCats: () => set({ cats: 0 }),
  }));
