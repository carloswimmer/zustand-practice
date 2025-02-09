import { useCatStore } from "../stores/catStore6";
import { RenderIndicator } from "./RenderIndicator";

export const BigCatsBox = () => {
  // Here we cannot use createSelectors because we only want to use the bigCats property
  // createSelectors handle properties in the first level of the store
  // const bigCats = useCatStore.use.cats;

  const bigCats = useCatStore(({ cats }) => cats.bigCats);

  return (
    <div className="box">
      <h2>Only Big Cats</h2>
      <div>big cats: {bigCats}</div>
      <RenderIndicator />
    </div>
  );
};
