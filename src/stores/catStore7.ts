import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

interface ICatStore {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
  summary: () => string;
}

export const useCatStore = create<ICatStore>()(
  immer(
    subscribeWithSelector(
      persist(
        (set, get) => ({
          cats: {
            bigCats: 0,
            smallCats: 0,
          },
          increaseBigCats: () =>
            set((state) => {
              state.cats.bigCats++;
            }),
          increaseSmallCats: () =>
            set((state) => {
              state.cats.smallCats++;
            }),
          summary: () => {
            const total = get().cats.bigCats + get().cats.smallCats;
            return `There are ${total} cats in total.`;
          },
        }),
        {
          name: "cat-store",
        }
      )
    )
  )
);
