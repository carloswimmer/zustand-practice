import { RenderIndicator } from "../../../common/RenderIndicator";
import { useAnimalStore } from "../context/useAnimalStore";

export const CatBox = () => {
  const cats = useAnimalStore("catStore", (state) => state.cats);
  const increasePopulation = useAnimalStore(
    "catStore",
    (state) => state.addCat
  );
  const removeAllCats = useAnimalStore(
    "catStore",
    (state) => state.removeAllCats
  );

  return (
    <div className="box">
      <h2>Cat Box</h2>
      <div>cats: {cats}</div>
      <div className="controls">
        <button onClick={increasePopulation}>add cat</button>
        <button onClick={removeAllCats}>remove cats</button>
      </div>
      <RenderIndicator />
    </div>
  );
};
