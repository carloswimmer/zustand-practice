import { useEffect, useState } from "react";
import { useBearStore } from "../stores/bearStore7";
import { useFoodStore } from "../stores/foodStore";
import { RenderIndicator } from "./RenderIndicator";
import { shallow } from "zustand/shallow";

export const BearBox = () => {
  const [bgColor, setBgColor] = useState<"lightgreen" | "lightpink">(
    "lightpink"
  );

  // When using all the prperties from the store, you can use the following syntax:
  const { bears, increasePopulation, removeAllBears } = useBearStore();

  // Just to change the background color it generate unnecessary re-renders
  // const fish = useFoodStore((state) => state.fish);

  useEffect(() => {
    // Without middleware
    // const unsub = useFoodStore.subscribe((state, prevState) => {
    //   if (prevState.fish <= 5 && state.fish > 5) {
    //     return setBgColor("lightgreen");
    //   }
    //   if (prevState.fish > 5 && state.fish <= 5) {
    //     return setBgColor("lightpink");
    //   }
    // });

    // Or with middleware (subscribeWithSelector)
    const unsub = useFoodStore.subscribe(
      (state) => state.fish,
      (fish, prevFish) => {
        if (prevFish <= 5 && fish > 5) {
          return setBgColor("lightgreen");
        }
        if (prevFish > 5 && fish <= 5) {
          return setBgColor("lightpink");
        }
      },
      { equalityFn: shallow, fireImmediately: true }
    );

    return unsub;
  }, []);

  return (
    <div className="box" style={{ backgroundColor: bgColor }}>
      <h2>Bear Box</h2>
      <div>bears: {bears}</div>
      <div className="controls">
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove bears</button>
      </div>
      <RenderIndicator />
    </div>
  );
};
