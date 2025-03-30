import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface IBearStore {
  bears: number;
  increasePopulation: () => void;
  removeAllBears: () => void;
  getOwner: () => Promise<string>;
}

export const useBearStore = create<IBearStore>()(
  devtools(
    (set) => ({
      bears: 0,
      increasePopulation: () => set((state) => ({ bears: state.bears + 1 })),
      removeAllBears: () => set({ bears: 0 }),
      getOwner: async () => {
        try {
          const response = await fetch("https://api.github.com/users/5");
          if (!response.ok) {
            throw new Error(response.status.toString());
          }
          const owner = await response.json();

          return owner.location || "Unknown location";
        } catch (error) {
          console.error("Failed to fetch owner:", error);
          return "Unknown location";
        }
      },
    }),
    {
      name: "BearStore",
      enabled: true,
    }
  )
);
