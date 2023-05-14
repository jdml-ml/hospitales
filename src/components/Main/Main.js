import React from 'react';
import './Main.css'
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate()
  return (
<div className="container-fluid">
      <div className="row">
        <div className="col-md-4 bg-app">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <div className='row'>
              <h1 className="text-white text-left">Búsqueda de hospitales</h1>
            </div>
            <div className='row bg-image' style={{ height: "100vh" }}>
            </div>
            
          </div>
        </div>
        <div className="col-md-8">
          <div className="d-flex flex-column justify-content-center align-items-center h-100">
            <h2>Consultar usuario</h2>
            <input type="text" className="form-control mb-3" />
            <button className="btn btn-primary mt-3" onClick={()=>{navigate("/search")}}>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
