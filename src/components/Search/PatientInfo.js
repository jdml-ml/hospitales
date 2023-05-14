import React from 'react';
import './PatientInfo.css';
import {useNavigate} from "react-router-dom";

const PatientInfo = () => {
  const navigate = useNavigate()
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-4 bg-info">
          <div className="d-flex flex-column justify-content-between h-100">
            <ul className="list-group">
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Historial médico
                <span className="badge bg-primary rounded-pill">2</span>
              </li>
              <li className="list-group-item d-flex justify-content-between align-items-center">
                Notas de enfermería
                <span className="badge bg-primary rounded-pill">1</span>
              </li>
            </ul>
            <div className="d-grid gap-2">
              <button className="btn btn-primary mt-3" type="button">Agregar nota</button>
              <button className="btn btn-primary mt-3" type="button" onClick={()=>{navigate("/")}}>Salir</button>
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Información del paciente</h5>
                  <p className="card-text">Nombres y apellidos: Lina Isabel Londoño<br/>
                  Cédula: 123<br/>
                  Estado civil: Soltera<br/>
                  Ciudad de residencia: Popayán<br/>
                  Fecha de afiliación: 01/04/2018<br/>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">EPS</h5>
                  <p className="card-text">Nombre de la EPS: Salud Total<br/>
                  Fecha de afiliación: 01/04/2018</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">IPS de atención</h5>
                  <p className="card-text">Nombre de la IPS: Clínica El Rosario<br/>
                  Dirección: Carrera 15 # 123-45</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">IPS de atención</h5>
                  <p className="card-text">Nombre de la IPS: Hospital San Juan de Dios<br/>Dirección: Calle 10 # 23-45</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">IPS de atención</h5>
                  <p className="card-text">Nombre de la IPS: Centro Médico ABC<br/>Dirección: Avenida 5 # 67-89</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientInfo;
