import { RenderIndicator } from "../../../common/RenderIndicator";
import { useAnimalStore } from "../context/useAnimalStore";

export const FishBox = () => {
  const fishes = useAnimalStore("fishStore", (state) => state.fish);
  const increasePopulation = useAnimalStore(
    "fishStore",
    (state) => state.addFish
  );
  const removeAllFishs = useAnimalStore(
    "fishStore",
    (state) => state.removeAllFish
  );

  return (
    <div className="box">
      <h2>Fish Box</h2>
      <div>fishes: {fishes}</div>
      <div className="controls">
        <button onClick={increasePopulation}>add fish</button>
        <button onClick={removeAllFishs}>remove fishes</button>
      </div>
      <RenderIndicator />
    </div>
  );
};
