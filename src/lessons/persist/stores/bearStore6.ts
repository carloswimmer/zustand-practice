import { create } from "zustand";
import { createJSONStorage } from "zustand/middleware";
import { persist } from "zustand/middleware";

interface IBearStore {
  bears: number;
  color: string;
  size: "big" | "medium" | "small";
  increasePopulation: () => void;
  removeAllBears: () => void;
  getOwner: () => Promise<string>;
  reset: () => void;
}

export const useBearStore = create<IBearStore>()(
  persist(
    (set) => ({
      bears: 0,
      color: "brown",
      size: "medium",
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
      getOwner: async () => {
        try {
          const response = await fetch("https://api.github.com/users/1");
          const owner = await response.json();

          return owner.location;
        } catch (error) {
          console.error("Failed to fetch owner:", error);
          return "Unknown location";
        }
      },
      reset: () => {
        set({ bears: 0, color: "brown", size: "medium" });
        useBearStore.persist.clearStorage();
      },
    }),
    {
      name: "bear-store",
      storage: createJSONStorage(() => sessionStorage),
      partialize: (state) =>
        Object.fromEntries(
          Object.entries(state).filter(([key]) => !["size"].includes(key))
        ),
    }
  )
);
