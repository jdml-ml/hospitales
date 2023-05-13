import React from 'react';
import './Main.css'
import {useNavigate} from "react-router-dom";

const Usuarios=[
    {
      _id: "6436e55843fce05a2b24939c4",
      Documento: "123",
      name: "Lina Isabel",
      email: "lina.londonoj@udea.edu.co",
    },{
    _id: "6436e55843fce05a2b24939c",
    Documento: "456",
    name: "Juan Daniel",
    email: "correo@correo.com",
  },
  {
    _id: "6436e55843fce05a2b249399",
    Documento:"789",
    name: "Ronald Prieto",
    email: "email@email.com",
  },
  {
    _id: "6436e55843fce05a2b249397",
    Documento: "912",
    name: "Fredy Solano",
    email: "fredy.dev@correo.com",
  },
  {
    _id: "6436e55843fce05a2b24939b",
    Documento: "345",
    name: "Deiner",
    email: "deiner.dev@udea.edu.co",
  },
];
  const errors = {
    uname: "Usuario no existe",
    pass: "Contraseña inválida"
  };

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
            <button className="btn btn-primary mt-3" onClick={()=>{navigate("/services")}}>Buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
