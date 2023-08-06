import { Link } from "react-router-dom";
import "../App.css";
import Despre from "./despre";
const Home: React.FC = () => {
  return (
    <div id='app'>
      <h1 className='text-center'>Bacu'</h1>
      <nav className='navbar'>
        <div className='container'>
          <Link className='navbar-brand' to='/bac/romana'>
            <img src='romana.png' width='65' height='65' />
          </Link>
          <Link className='navbar-brand' to='/bac/matematica'>
            <img src='matematica.png' width='65' height='65' />
          </Link>
          <Link className='navbar-brand' to='/bac/informatica'>
            <img src='informatica.png' width='65' height='65' />
          </Link>
          <Link className='navbar-brand' to='/bac/biologie'>
            <img src='biologie.png' width='65' height='65' />
          </Link>
          <Link className='navbar-brand' to='/bac/fizica'>
            <img src='fizica.png' width='65' height='65' />
          </Link>
          <Link className='navbar-brand' to='/bac/chimie'>
            <img src='chimie.png' width='65' height='65' />
          </Link>
        </div>
      </nav>
      <Despre />
    </div>
  );
};

export default Home;
