import { BigCatsBox } from "./components/BigCatsBox";
import { CatBox } from "./components/CatBox";
import { CatController } from "./components/CatController";

export const SelectorAutogenerator = () => {
  return (
    <>
      <CatBox />
      <BigCatsBox />
      <CatController />
    </>
  );
};
