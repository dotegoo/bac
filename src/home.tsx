import { Link } from "react-router-dom";
import "./App.css";
import Despre from "./components/despre";
const Home: React.FC = () => {
  return (
    <div id='app'>
      <h1 className='text-center'>Bacu'</h1>
      <nav className='navbar'>
        <div className='container'>
          <Link className='navbar-brand' to='/bac/romana'>
            <img
              alt='imagine materie'
              src='romana.png'
              width='65'
              height='65'
            />
          </Link>
          <Link className='navbar-brand' to='/bac/matematica'>
            <img
              alt='imagine materie'
              src='matematica.png'
              width='65'
              height='65'
            />
          </Link>
          <Link className='navbar-brand' to='/bac/informatica'>
            <img
              alt='imagine materie'
              src='informatica.png'
              width='65'
              height='65'
            />
          </Link>
          <Link className='navbar-brand' to='/bac/biologie'>
            <img
              alt='imagine materie'
              src='biologie.png'
              width='65'
              height='65'
            />
          </Link>
          <Link className='navbar-brand' to='/bac/fizica'>
            <img
              alt='imagine materie'
              src='fizica.png'
              width='65'
              height='65'
            />
          </Link>
          <Link className='navbar-brand' to='/bacq/chimie'>
            <img
              alt='imagine materie'
              src='chimie.png'
              width='65'
              height='65'
            />
          </Link>
        </div>
      </nav>
      <Despre />
    </div>
  );
};

export default Home;
