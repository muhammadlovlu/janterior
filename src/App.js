// import logo from './logo.png';
import './App.css';
// import logo from '../src/janterior-logo.png';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NoMatch from './Components/NoMatch/NoMatch';
// import image01 from '../src/images/sofa.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Shop from './Components/Shop/Shop';
import Info from './Components/Info/Info';

function App() {
  return (
    <div className="App">
      <div className="row">
        <h6 className="col-md-12 bg-black text-white pt-2 pb-2 m-0 p-0">FREE DELIVERY ON ORDERS OVER $5000</h6>
      </div>
      <div className="row mt-4">
        <div className="col-3">  {/* column one*/}
          <h4 id="janterior">Janterior</h4>
          
        </div>
        <div className="col-6 ">  {/* column Two Start*/}
          <nav className="navbar  navbar-expand-lg navbar-danger p-0">
            <button className="navbar-toggler  bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="  navbar-toggler-icon bg-black"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link to="/home" className="links ms-5" >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/shop" className="links ms-5" >
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/info" className="links ms-5">
                    Info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="links ms-5" >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="links ms-5" >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="links ms-5">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="links ms-5" >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <form className="d-flex ms-4">
              <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </nav>
        </div>
        <div className="col-3">
          <FontAwesomeIcon icon={faUser} />
          <FontAwesomeIcon className="ms-4" icon={faCartArrowDown} />
        </div>
        {/* column Three end*/}
        {/* column Four Start*/}
  
        {/* column Four end*/}
        {/* Section Three Start */}
        {/* Section Three End */}
      </div>
   



      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

    </div>
  );
}

export default App;
