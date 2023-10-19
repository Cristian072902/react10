import React from 'react'

const AppForm = (mjs) => {
  return (
    <div style={{background:"orange", padding:"10px", textAlign:"center"}}>
      <h1>AppForm.js</h1>
      <input placeholder='Nombres....'></input><br></br>
      <input placeholder='Edad....'></input><br></br>
      <input placeholder='Genero....'></input><br></br>
      <br></br>
      <button>Guardar</button>
      
    </div>
  )
}

export default AppForm
