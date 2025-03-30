import { createStore } from "zustand";

export type FishStore = {
  fish: number;
  addFish: () => void;
  removeAllFish: () => void;
};

export const createFishStore = (initialCount: number) =>
  createStore<FishStore>()((set) => ({
    fish: initialCount,
    addFish: () => set((state) => ({ fish: state.fish + 1 })),
    removeAllFish: () => set({ fish: 0 }),
  }));
