import React, { useState } from "react";

const Semaforo = () => {
 const [ colorSombra, setColorSombra ] = useState("red");
 const [ colorSombraMedio, setColorSombraMedio ] = useState("red");
 const [ colorSombraAbajo, setColorSombraAbajo ] = useState("red"); 
 let detectarArriba = 0;
 let detectarMedio = 0;
 let detectarAbajo = 0;

 function detecion(detectarArriba,detectarMedio,detectarAbajo) {
  if (detectarArriba || detectarMedio || detectarAbajo >= 1){
     setColorSombra("none")
      setColorSombraMedio("none")
       setColorSombraAbajo("none")
     detectarArriba = 0
     detectarMedio = 0
     detectarAbajo = 0
  }
} 

console.log(colorSombra)
console.log(detectarArriba)
 return (
   
    <div className="CuerpoSemaforo">

      <div className="bg-dark paloSemaforo mx-auto" style={{ width: "30px", height: "90px" }}>
      </div>
      <div className="cuerpoYLuces bg-dark mx-auto d-flex flex-column justify-content-around" style={{ width: "90px", height: "160px" }}>
        <div className="ColorArriba mx-auto rounded-circle" onClick={()=> {detectarAbajo++; detectarMedio++; detecion(detectarAbajo,detectarMedio,);  setColorSombra("0 0 30px 10px white")}} style={{ width: "45px", height: "45px", backgroundColor : "red",boxShadow : colorSombra}}></div>
        <div className="ColorArriba mx-auto rounded-circle" onClick={()=> {detectarArriba++; detectarAbajo++; detecion(detectarArriba,detectarAbajo); setColorSombraMedio("0 0 30px 10px white")}} style={{ width: "45px", height: "45px", backgroundColor : "yellow",boxShadow : colorSombraMedio}}></div>
        <div className="ColorArriba mx-auto rounded-circle" onClick={()=> {detectarArriba++; detectarMedio++; detecion(detectarArriba,detectarMedio); setColorSombraAbajo("0 0 30px 10px white")}} style={{ width: "45px", height: "45px", backgroundColor : "green",boxShadow : colorSombraAbajo}}></div>
      </div>
    </div>
  );
};

export default Semaforo;