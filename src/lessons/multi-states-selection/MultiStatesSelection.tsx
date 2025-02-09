import { BigCatsBox } from "./components/BigCatsBox";
import { CatBox } from "./components/CatBox";
import { CatController } from "./components/CatController4";

export const MultiStatesSelection = () => {
  return (
    <>
      <CatBox />
      <BigCatsBox />
      <CatController />
    </>
  );
};
