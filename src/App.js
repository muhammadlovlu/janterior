// import logo from './logo.png';
import './App.css';
import logo from '../src/janterior-logo.png';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home/Home';
import About from './Components/About/About';
import NoMatch from './Components/NoMatch/NoMatch';

function App() {
  return (
    <div className="App">
      <div className="row">
        <h6 className="col-md-12 bg-black text-white p-2">FREE DELIVERY ON ORDERS OVER $60</h6>
      </div>
      <div className="row bg-primary">
        
          <div className="col-md-2 bg-danger p-0">
          <img  width="220px" src={logo} id="logo" alt="" />
          </div>
        
        <div className="col-md-6  p-0">
          <nav className="navbar navbar-expand-lg navbar-danger p-0">
            <div className="container-fluid bg-secondary p-0">
              <div className="col-md-6">
                <button className="navbar-toggler col-sm-12 bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon bg-black"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0 bg-warning">
                    <li className="nav-item">
                      <Link to="/home" className="" >
                        home
                      </Link>
                      <Link to="/home" className="" >
                        Shop
                      </Link>
                      <Link to="/about" className="">
                        Info
                      </Link>
                      <Link to="/contact" className="" >
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/home" className="" >
                        home
                      </Link>
                      <Link to="/about" className="">
                        About
                      </Link>
                      <Link to="/contact" className="" >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
                <form className="d-flex bg-danger">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-success" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
        </div>
<div className="col-md-2 bg-warning">
  <h1 className="m-0">account</h1>
</div>

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
