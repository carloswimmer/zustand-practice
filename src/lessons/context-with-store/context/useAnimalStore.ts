import { useContext } from "react";
import { StoreApi, useStore } from "zustand";
import { AnimalContext, AnimalStores } from "./AnimalProvider";
import { BearStore } from "../stores/bearStore";
import { CatStore } from "../stores/catStore";
import { FishStore } from "../stores/fishStore";

interface AnimalCreatedStores {
  bearStore: BearStore;
  catStore: CatStore;
  fishStore: FishStore;
}

export const useAnimalStore = <
  T,
  StoreName extends keyof AnimalStores,
  SelectedStore extends AnimalCreatedStores[StoreName]
>(
  storeName: StoreName,
  stateSelector: (state: SelectedStore) => T
): T => {
  const storeSelector = (stores: AnimalStores) =>
    stores[storeName] as StoreApi<SelectedStore>;

  const context = useContext(AnimalContext);

  if (!context) {
    throw new Error("useAnimalStore must be used within an AnimalProvider");
  }

  const store = storeSelector(context);
  return useStore(store, stateSelector);
};
