import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IBearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
}

export const useBearStore = create<IBearStore>()(
  devtools(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
    }),
    {
      name: "ContextBearStore",
      enabled: true,
    }
  )
);
