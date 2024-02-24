import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import FetchItems from "../components/Fetchitems";

function App() {
  return (
    <>
      <Header></Header>
      <FetchItems />
      <Outlet />
      <Footer></Footer>
    </>
  );
}

export default App;
