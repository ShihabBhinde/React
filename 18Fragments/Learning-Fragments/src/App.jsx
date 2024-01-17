import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";

function App() {
  const foodItemss = [
    "Sabzi",
    "Green Vegetables",
    "Roti",
    "Salad",
    "Milk",
    "Ghee",
  ];

  let textToShow = "Food Item Entered by user";

  const handleOnChange = (event) => {
    console.log(event.target.value);
    textToShow = event.target.value;
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Foods</h1>
        <ErrorMessage foodItems={foodItemss}></ErrorMessage>
        <FoodInput handleOnChange={handleOnChange}></FoodInput>
        <p>{textToShow}</p>
        <FoodItems items={foodItemss}></FoodItems>
      </Container>
      {/* <Container>
        <p>
          Above is the list of healthy foods that are good for your health and
          well being.
        </p>
      </Container> */}
    </>
  );
}

export default App;
