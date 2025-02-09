import { useCatStore } from "../stores/catStore6";
import { RenderIndicator } from "./RenderIndicator";

export const CatBox = () => {
  const bigCats = useCatStore((state) => state.cats.bigCats);
  const smallCats = useCatStore((state) => state.cats.smallCats);

  return (
    <div className="box">
      <h2>Cat Box</h2>
      <div>big cats: {bigCats}</div>
      <div>small cats: {smallCats}</div>
      <RenderIndicator />
    </div>
  );
};
