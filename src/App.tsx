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
        <h1 className="text-center">Bac</h1>
        <nav className="navbar">
          <div className="container">
            <a className="navbar-brand" href="#Romana">
              <img src="./romana.png" width="65" height="65" />
            </a>
            <a className="navbar-brand" href="#Matematica">
              <img src="./matematica.png" width="65" height="65" />
            </a>
            <a className="navbar-brand" href="#Informatica">
              <img src="./informatica.png" width="65" height="65" />
            </a>
            <a className="navbar-brand" href="#Biologie">
              <img src="./biologie.png" width="65" height="65" />
            </a>
            <a className="navbar-brand" href="#Fizica">
              <img src="./fizica.png" width="65" height="65" />
            </a>
            <a className="navbar-brand" href="#Chimie">
              <img src="./chimie.png" width="65" height="65" />
            </a>
          </div>
        </nav>
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
