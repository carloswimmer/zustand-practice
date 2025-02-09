import { BigCatsBox } from "../BigCatsBox";
import { CatBox } from "../CatBox";
import { CatController } from "../CatController";

export const SelectorAutogenerator = () => {
  return (
    <>
      <CatBox />
      <BigCatsBox />
      <CatController />
    </>
  );
};
