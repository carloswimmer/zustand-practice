import { PropsWithChildren, useState } from "react";
import { createContext } from "react";
import { StoreApi } from "zustand";
import { BearStore, createBearStore } from "../stores/bearStore";
import { CatStore, createCatStore } from "../stores/catStore";
import { createFishStore, FishStore } from "../stores/fishStore";

export interface AnimalStores {
  bearStore: StoreApi<BearStore>;
  catStore: StoreApi<CatStore>;
  fishStore: StoreApi<FishStore>;
}

export const AnimalContext = createContext<AnimalStores | undefined>(undefined);

type AnimalProviderProps = PropsWithChildren & {
  initialBearCount: number;
  initialCatCount: number;
  initialFishCount: number;
};

export const AnimalProvider = ({
  initialBearCount,
  initialCatCount,
  initialFishCount,
  children,
}: AnimalProviderProps) => {
  const [bearStore] = useState(() => createBearStore(initialBearCount));
  const [catStore] = useState(() => createCatStore(initialCatCount));
  const [fishStore] = useState(() => createFishStore(initialFishCount));

  return (
    <AnimalContext.Provider value={{ bearStore, catStore, fishStore }}>
      {children}
    </AnimalContext.Provider>
  );
};
