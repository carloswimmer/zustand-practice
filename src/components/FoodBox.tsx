import { useFoodStore } from "../stores/foodStore";

export const FoodBox = () => {
  const { fish, addOneFish, removeOneFish, removeAllFish } = useFoodStore();

  return (
    <div className="box">
      <h2>Food Box</h2>
      <div>fish: {fish}</div>
      <div className="controls">
        <button onClick={addOneFish}>Add one fish</button>
        <button onClick={removeOneFish}>Remove one fish</button>
        <button onClick={removeAllFish}>Remove all fish</button>
      </div>
    </div>
  );
};
