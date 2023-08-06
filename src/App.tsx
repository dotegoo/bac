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
          <Route path='/bac/romana' Component={Romana} />
          <Route path='/bac/matematica' Component={Matematica} />
          <Route path='/bac/informatica' Component={Informatica} />
          <Route path='/bac/biologie' Component={Biologie} />
          <Route path='/bac/fizica' Component={Fizica} />
          <Route path='/bac/chimie' Component={Chimie} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
