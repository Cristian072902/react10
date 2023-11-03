
import { Routes, Route, Outlet, Switch, Redirect} from 'react-router-dom';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';

///////////////// PROTEGIDA - SistemaCRUD //////////////
import SistemaCRUD from '../protegido/SistemaCRUD';
import ListaDeAlumnos from '../protegido/sistemacrud/ListaDeAlumnos';

///////////////// PROTEGIDA - SistemaFILE //////////////
import SistemaFILE from '../protegido/SistemaFILE';
import Fotos from '../protegido/sistemafile/Fotos';

//////////////////////// PAG. PUBLICOS /////////////////




const ProtectedRutas = () => {
  const { user } = useAuth();
    const auth = getAuth();
    const navigate = useNavigate();

    const handleSignOut = () => {
    }

  return (
    <div style={{ background:"royalblue", padding:"10px" }}>
      <nav>
        <div id="login">
          <ul>
            <li><Link to="/nuevoregistro">Registrar</Link></li>
            <li><Link onClick={handleSignOut} >Cerrar sesión</Link> </li> 
          </ul>
        </div>
            
        <div id="menu">
          <ul>
            <li><Link to="/sistema-crud/alumnos">Alumnos</Link> </li>
                    
            <li><Link to="/sistema-file/fotos">Fotos</Link> </li>
          </ul>
        </div>
      </nav>

      <Routes>
        
        <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
          <Route index element={<SistemaCRUD />} />
          <Route path="alumnos" element={<ListaDeAlumnos />} />
        </Route>


        <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
          <Route index element={<SistemaFILE />} />
          <Route path="fotos" element={<Fotos />} />
        </Route>

      </Routes>        
    </div>
  )
}

function MarcoParaSistemaCRUD() {
  return (
    <div style={{background:"cornflowerblue", padding:"10px"}}>
      <h1>Marco sistema CRUD</h1>
      < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
    </div>
  );
}

function MarcoParaSistemaFILE() {
  return (
    <div style={{background:"slateblue", padding:"10px"}}>
      <h1>Marco Sistema FILES</h1>
      < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
    </div>
  );
}

export default ProtectedRutas;
