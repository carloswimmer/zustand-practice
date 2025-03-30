import { BearBox } from "./components/BearBox";
import { CatBox } from "./components/CatBox";
import { FishBox } from "./components/FishBox";
import { WebComponentSimulation } from "./components/WebComponentSimulation";
import { AnimalProvider } from "./context/AnimalProvider";

export const WithContext = () => {
  return (
    <>
      <WebComponentSimulation background="#fad2d5">
        <AnimalProvider
          initialBearCount={3}
          initialCatCount={3}
          initialFishCount={3}
        >
          <BearBox />
          <CatBox />
          <FishBox />
        </AnimalProvider>
      </WebComponentSimulation>

      <WebComponentSimulation background="#cfebcf">
        <AnimalProvider
          initialBearCount={5}
          initialCatCount={5}
          initialFishCount={5}
        >
          <BearBox />
          <CatBox />
          <FishBox />{" "}
        </AnimalProvider>
      </WebComponentSimulation>

      <WebComponentSimulation background="lightblue">
        <AnimalProvider
          initialBearCount={7}
          initialCatCount={7}
          initialFishCount={7}
        >
          <BearBox />
          <CatBox />
          <FishBox />
        </AnimalProvider>
      </WebComponentSimulation>
    </>
  );
};
