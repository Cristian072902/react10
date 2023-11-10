import { useState } from 'react';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './public/Dashboard';
import Home from './public/Home';

import {useAuth} from "./ruteo/AuthContext"
import BarraRutasProtected from './ruteo/BarraRutasProtected';
import BarraRutasPublic from './ruteo/BarraRutasPublic';



function App() {
  const { user } =useAuth();
  return (
    <div >
      <Router>
        {user ? <BarraRutasProtected/> : <BarraRutasPublic/>}
      </Router>
     
    </div>
  );
}

export default App;