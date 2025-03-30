import { createStore } from "zustand";

export type BearStore = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const createBearStore = (initialCount: number) =>
  createStore<BearStore>()((set) => ({
    bears: initialCount,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }));
