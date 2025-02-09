import { useEffect, useState } from "react";
import { useBearStore } from "../stores/bearStore6";

export const BearBox = () => {
  const [ownerLocation, setOwnerLocation] = useState("");

  // When using all the prperties from the store, you can use the following syntax:
  const { bears, increasePopulation, removeAllBears, getOwner, reset } =
    useBearStore();

  useEffect(() => {
    const fetchOwner = async () => {
      const ownerLocation = await getOwner();
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
        <button onClick={reset}>clear storage</button>
        <div style={{ flexGrow: 1, alignSelf: "end", textAlign: "end" }}>
          {ownerLocation}
        </div>
      </div>
    </div>
  );
};
