import { create } from "zustand";

interface IBearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  getOwner: () => Promise<string>;
}

export const useBearStore = create<IBearStore>()((set) => ({
  bears: 0,
  increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
  getOwner: async () => {
    const response = await fetch("https://api.github.com/users/1");
    const owner = await response.json();

    return owner.location;
  },
}));
