import { useCatStore } from "../stores/catStore3";
import { RenderIndicator } from "./RenderIndicator";

export const CatController = () => {
  // This is the usage of createSelectors
  const increaseBigCats = useCatStore.use.increaseBigCats();
  const increaseSmallCats = useCatStore.use.increaseSmallCats();

  return (
    <div className="box">
      <h2>Cat Controller</h2>
      <div className="controls">
        <button onClick={increaseBigCats}>add big cat</button>
        <button onClick={increaseSmallCats}>add small cat</button>
      </div>
      <RenderIndicator />
    </div>
  );
};
