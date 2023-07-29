import "./App.css";
import Despre from "./components/despre";
import Romana from "./components/romana";
import Matematica from "./components/matematica";
import Informatica from "./components/informatica";
import Biologie from "./components/biologie";
import Fizica from "./components/fizica";
import Chimie from "./components/chimie";
function App() {
  return (
    <>
      <div id="app">
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
      </div>
    </>
  );
}

export default App;
