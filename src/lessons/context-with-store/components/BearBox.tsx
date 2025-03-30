import { RenderIndicator } from "../../../common/RenderIndicator";
import { useAnimalStore } from "../context/useAnimalStore";

export const BearBox = () => {
  const bears = useAnimalStore("bearStore", (state) => state.bears);
  const increasePopulation = useAnimalStore(
    "bearStore",
    (state) => state.increasePopulation
  );
  const removeAllBears = useAnimalStore(
    "bearStore",
    (state) => state.removeAllBears
  );

  return (
    <div className="box">
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
