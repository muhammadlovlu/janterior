// import logo from './logo.png';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NoMatch from './Components/NoMatch/NoMatch';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import Shop from './Components/Shop/Shop';
import Info from './Components/Info/Info';

function App() {
  return (
    <div className="App">
      <div className="row ">
        <h6 className="col-md-12 bg-black text-white pt-2 pb-2 m-0 p-0">FREE DELIVERY ON ORDERS OVER $5000</h6>
      </div>
      <nav className="navbar  navbar-light bg-light navbar-expand-lg mt-2" >
        <div className="container-fluid p-0">
          <h4 className="col-lg-2 col-md-2 janterior">Janterior</h4>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end " tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h4 className="offcanvas-title janterior" id="offcanvasNavbarLabel">Janterior</h4>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/home" className="links" >
                    Home
                  </Link>
                </li>
                <li className="nav-item ">
                  <Link to="/shop" className="links" >
                    Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/info" className="links">
                    Info
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="links" >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="links" >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="links">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="links" >
                    Contact
                  </Link>
                </li>
              </ul>
              <form className="d-flex me-5">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success me-5" type="submit">Search</button>
              </form>
              <div className="d-flex">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <FontAwesomeIcon className="m-2 me-5 ms-5" icon={faUser} />
                  </li>
                  <li className="nav-item">
                    <FontAwesomeIcon className="m-2" width="220px" icon={faCartArrowDown} />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
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
