import { useState } from 'react';
import {Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Dashboard from './public/Dashboard';
import Home from './public/Home';
import PublicRutas from './ruteo/PublicRutas';
import {useAuth} from "./ruteo/AuthContext"
import ProtectedRutas from './ruteo/ProtectedRutas';


function App() {
  const { user } =useAuth();
  return (
    <div style={{background:"plum"}}>
      <Router>
        {user ? <ProtectedRutas/> : <PublicRutas/>}
      </Router>
     
    </div>
  );
}

export default App;