// import logo from './logo.png';
import './App.css';
import logo from '../src/janterior-logo.png';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NoMatch from './Components/NoMatch/NoMatch';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
function App() {
  return (
    <div className="App">
      <div className="row">
        <h6 className="col-md-12 bg-black text-white p-2">FREE DELIVERY ON ORDERS OVER $60</h6>
      </div>

<div className="row">
  <div className="col-3 bg-primary">  {/* column one*/}
 <h4 id="janterior">Janterior</h4>
  </div>
  <div className="col-6 bg-warning">  {/* column Two*/}
  <nav className="navbar navbar-expand-lg navbar-danger p-0">

  <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="  navbar-toggler-icon bg-black"></span>
                </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    
                    <li className="nav-item">
                      <Link to="/home" className="ms-5" >
                        home
                      </Link>
                      <Link to="/home" className="ms-5" >
                        Shop
                      </Link>
                      <Link to="/about" className="ms-5">
                        Info
                      </Link>
                      <Link to="/contact" className="ms-5" >
                        Services
                      </Link>
                    </li> 
                    <li className="nav-item">
                      <Link to="/home" className="ms-5" >
                        home
                      </Link>
                      <Link to="/about" className="ms-5">
                        About
                      </Link>
                      <Link to="/contact" className="ms-5" >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <form className="d-flex bg-danger">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
                
                </nav>
  </div>
  <div className="col-3 bg-danger">
  {/* <FontAwesomeIcon icon={faCoffee} /> */}
  <FontAwesomeIcon icon="fa-solid fa-user-large" />
  <FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={brands('twitter')} />
  </div>   {/* column Three*/}
 
</div>





      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

    </div>
  );
}

export default App;
