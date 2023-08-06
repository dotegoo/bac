import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Romana from "./components/romana";
import Matematica from "./components/matematica";
import Informatica from "./components/informatica";
import Biologie from "./components/biologie";
import Fizica from "./components/fizica";
import Chimie from "./components/chimie";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/bac/' element Component={Home} />
          <Route path='/romana' Component={Romana} />
          <Route path='/matematica' Component={Matematica} />
          <Route path='/informatica' Component={Informatica} />
          <Route path='/biologie' Component={Biologie} />
          <Route path='/fizica' Component={Fizica} />
          <Route path='/chimie' Component={Chimie} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
