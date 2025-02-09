import { useShallow } from "zustand/shallow";
import { useCatStore } from "../stores/catStore6";
import { RenderIndicator } from "../../../common/RenderIndicator";

export const CatController = () => {
  const { increaseBigCats, increaseSmallCats } = useCatStore(
    useShallow((state) => ({
      increaseBigCats: state.increaseBigCats,
      increaseSmallCats: state.increaseSmallCats,
    }))
  );

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
