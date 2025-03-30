import { createContext, useContext } from "react";
import { StoreApi, useStore } from "zustand";

export type BearStore = {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
};

export const BearContext = createContext<StoreApi<BearStore> | undefined>(
  undefined
);

export const useBearStore = <T>(selector: (state: BearStore) => T): T => {
  const context = useContext(BearContext);

  if (!context) {
    throw new Error("useBearStore must be used within a BearProvider");
  }

  return useStore(context, selector);
};
