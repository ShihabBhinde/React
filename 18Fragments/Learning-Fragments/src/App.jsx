import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const foodItemss = [
    "Sabzi",
    "Green Vegetables",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
  ];

  return (
    <>
      <h1 className="food-heading">Healthy Foods</h1>
      <ErrorMessage foodItems={foodItemss}></ErrorMessage>
      <FoodItems foodItems={foodItemss}></FoodItems>
    </>
  );
}

export default App;
