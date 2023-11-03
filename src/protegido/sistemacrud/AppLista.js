import React, { useEffect, useState } from 'react'
import AppForm from './AppForm';
import { collection, deleteDoc, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '../../conexion/firebase';
 
const AppLista = (props) => {

  ////// Lectura fnRead ///////////
  const [docBD, setDocBD] = useState([]);
  

  ////// Delete ////////////////////
  const [idActual, setIdActual] = useState("");   // Variable para id de c/coleccion
  const fnDelete = (xId) => {
    alert("Función eliminar...");
  }
  
  return (
    <div style={{background:"greenyellow", padding:"10px"}}>
      <h1>AppList.js</h1>
      <AppForm {...{idActual, setIdActual}} />  {/* Envios de variables */}
      <h3>Lista de clientes</h3>
      {
        docBD.map((row, index) =>               // Extraer registro e index
          <p key={row.id}>                      {/* Asignar key a <p> */}
            No. {index + 1}. {row.nombre}       {/* Imprimir Numero y nombre */}
            ..... 
            <span onClick={() => fnDelete(row.id)}>x</span>
            ..... 
            <span onClick={() => setIdActual(row.id)}>A</span>
          </p> 
        )
      }
    </div>
  )
}

export default AppLista;