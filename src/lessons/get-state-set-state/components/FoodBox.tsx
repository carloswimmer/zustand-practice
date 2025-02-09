import {
  useFoodStore,
  addOneFish,
  removeOneFish,
  removeAllFish,
} from "../stores/foodStore";

export const FoodBox = () => {
  const fish = useFoodStore((state) => state.fish);

  const addFiveFishes = () => {
    useFoodStore.setState((state) => ({ fish: state.fish + 5 }));
  };

  return (
    <div className="box">
      <h2>Food Box</h2>
      <div>fish: {fish}</div>
      <div className="controls">
        <button onClick={addOneFish}>Add one fish</button>
        <button onClick={removeOneFish}>Remove one fish</button>
        <button onClick={removeAllFish}>Remove all fish</button>
        <button onClick={addFiveFishes}>Add five fish</button>
      </div>
    </div>
  );
};
