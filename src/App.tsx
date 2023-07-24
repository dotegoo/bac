import "./App.css";
import Despre from "./despre";
import Romana from "./romana";
import Matematica from "./matematica";
import Informatica from "./informatica";
import Biologie from "./biologie";
import Fizica from "./fizica";
import Chimie from "./chimie";
function App() {
  return (
    <>
      <header>
        <h1 className="text-center">hello</h1>
      </header>
      <Despre />
      <Romana />
      <Matematica />
      <Informatica />
      <Biologie />
      <Fizica />
      <Chimie />
    </>
  );
}

export default App;
