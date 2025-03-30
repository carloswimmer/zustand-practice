import { PropsWithChildren, useState } from "react";
import { createStore } from "zustand";
import { BearContext, BearStore } from "./useBearStore";

type BearProviderProps = PropsWithChildren & {
  initialCount: number;
};

export const BearProvider = ({ initialCount, children }: BearProviderProps) => {
  const [bearStore] = useState(() => createBearStore(initialCount));

  return (
    <BearContext.Provider value={bearStore}>{children}</BearContext.Provider>
  );
};

const createBearStore = (initialCount: number) =>
  createStore<BearStore>()((set) => ({
    bears: initialCount,
    increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
    removeAllBears: () => set({ bears: 0 }),
  }));
