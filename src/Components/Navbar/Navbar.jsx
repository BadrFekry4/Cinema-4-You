import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from 'react-router-dom';

export default function Navbar({logdata,setLogData}) {
  let navigate = useNavigate();

    function Logout() {
      localStorage.removeItem("token");
      setLogData(null);
      navigate("/");
    }
  return <>
<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <Link className="navbar-brand text-danger fw-bolder cin">Cinema 4 you</Link>
    <button className="navbar-toggler bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      {logdata?<ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active text-white" aria-current="page" to="home">All</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="movie">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="tv">TV Series</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="drinks">Actors</Link>
        </li>
        </ul>:""}
      
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {logdata? <li className="nav-item">
          <Link onClick={Logout} className="nav-link text-white" to="">Logout</Link>
        </li>
        :<>
         <li className="nav-item">
          <Link className="nav-link text-white " aria-current="page" to="">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="register">Register</Link>
        </li>
        </>}
       
       
      </ul>
    </div>
  </div>
</nav>
  </>
}
