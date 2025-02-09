import { useCatStore } from "../stores/catStore";
import { RenderIndicator } from "../../../common/RenderIndicator";

export const CatBox = () => {
  const bigCats = useCatStore((state) => state.cats.bigCats);
  const smallCats = useCatStore((state) => state.cats.smallCats);

  // Can be spreaded because it uses all the properties from the store
  const { increaseBigCats, increaseSmallCats, summary } = useCatStore();

  return (
    <div className="box">
      <h2>Cat Box</h2>
      <div>big cats: {bigCats}</div>
      <div>small cats: {smallCats}</div>
      <div>{summary()}</div>
      <div className="controls">
        <button onClick={increaseBigCats}>add big cat</button>
        <button onClick={increaseSmallCats}>add small cat</button>
      </div>
      <RenderIndicator />
    </div>
  );
};
