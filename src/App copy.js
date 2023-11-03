//import logo from './logo.svg';
//import './App.css';
import { useState } from 'react';
import AppForm from './components/AppForm';
import { deleteDoc, collection, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from './firebase/firebase';

function App() {
  ///////// READ - Lectura - fnRead ////////////
  const [docBD, setDocBD] = useState([]);
  const fnRead = () => {
    const xColecionConQuery = query(collection(db, "persona"));
    const unsubscribe = onSnapshot(xColecionConQuery, (xDatosBD) => {
      const xDoc = [];
      xDatosBD.forEach((docV)=>{
        xDoc.push({id:docV.id, ...docV.data()});
        //console({id:doc.id, ...doc.data()});
      });
      setDocBD(xDoc);
    });
  }
  fnRead();
  //console.log(docBD);
  ///////// DELETE - Eliminar - fnDelete ///////
  const [idActual, setIdActual] = useState("");
  const fnDelete = async(xId) => {
    if (window.confirm("Confirme para eliminar")){
      await deleteDoc(doc(db, 'persona', xId));
      console.log("Se elimino... "+xId);
    }
  }
  
  return (
    <div style={{background:"yellow", width:"350px", 
     padding:"10px"}}>
      <AppForm {...{idActual}} />
      {
        docBD.map((r, index) => 
        <p key = {r.id}>
          {index+1}.{r.nombre} 
          ------ 
          <span onClick={() => fnDelete(r.id)}> x </span> 
          ------  
          <span onClick={() => setIdActual(r.id)}> A </span><br></br>
          23 Masculino 
        </p>
        )
      }


      <i class="large material-icons">insert_chart</i>
    </div>
  );
}

export default App;