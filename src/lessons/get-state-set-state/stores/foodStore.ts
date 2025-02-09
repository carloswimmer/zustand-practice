import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

const initialFoodState = {
  fish: 0,
  mouse: 0, // can be added without changing interface
};

export const useFoodStore = create<typeof initialFoodState>()(
  devtools(
    subscribeWithSelector(
      persist(() => initialFoodState, { name: "food-store" })
    ),
    { name: "FoodStore" }
  )
);

export const addOneFish = () =>
  useFoodStore.setState((state) => ({ fish: state.fish + 1 }));

export const removeOneFish = () =>
  useFoodStore.setState((state) => ({ fish: state.fish - 1 }));

export const removeAllFish = () => useFoodStore.setState({ fish: 0 });
