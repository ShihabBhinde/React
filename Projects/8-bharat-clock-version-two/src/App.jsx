import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <center>
      <ClockHeading />
      <ClockSlogan></ClockSlogan>
      <CurrrentTime></CurrrentTime>
    </center>
  );
}

export default App;
