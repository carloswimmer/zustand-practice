import { useEffect, useState } from "react";
import { useBearStore } from "../stores/bearStore";

export const BearBox = () => {
  const [ownerLocation, setOwnerLocation] = useState("");

  // const bears = useBearStore((state) => state.bears);
  // const increasePopulation = useBearStore((state) => state.increasePopulation);
  // const removeAllBears = useBearStore((state) => state.removeAllBears);

  // When using all the prperties from the store, you can use the following syntax:
  const { bears, increasePopulation, removeAllBears, getOwner } =
    useBearStore();

  useEffect(() => {
    const fetchOwner = async () => {
      const ownerLocation = await getOwner();
      console.log(ownerLocation);
      setOwnerLocation(ownerLocation);
    };

    fetchOwner();
  }, [getOwner]);

  return (
    <div className="box">
      <h2>Bear Box</h2>
      <div>bears: {bears}</div>
      <div className="controls">
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove bears</button>
        <div style={{ flexGrow: 1, alignSelf: "end", textAlign: "end" }}>
          {ownerLocation}
        </div>
      </div>
    </div>
  );
};
