import React, { useState } from "react";

const Semaforo = () => {
 const [ colorSombra, setColorSombra ] = useState("red");
 const [ colorSombraMedio, setColorSombraMedio ] = useState("red");
 const [ colorSombraAbajo, setColorSombraAbajo ] = useState("red"); 
  
 return (
   
    <div className="CuerpoSemaforo">

      <div className="bg-dark paloSemaforo mx-auto" style={{ width: "30px", height: "90px" }}>
      </div>
      <div className="cuerpoYLuces bg-dark mx-auto d-flex flex-column justify-content-around" style={{ width: "90px", height: "160px" }}>
        <div className="ColorArriba mx-auto rounded-circle" onMouseDown={()=> setColorSombra("0 0 30px 10px white")} onMouseUp={()=> setColorSombra("none")} style={{ width: "45px", height: "45px", backgroundColor : "red",boxShadow : colorSombra}}></div>
        <div className="ColorArriba mx-auto rounded-circle" onMouseDown={()=> setColorSombraMedio("0 0 30px 10px white")} onMouseUp={()=> setColorSombraMedio("none")} style={{ width: "45px", height: "45px", backgroundColor : "yellow",boxShadow : colorSombraMedio}}></div>
        <div className="ColorArriba mx-auto rounded-circle" onMouseDown={()=> setColorSombraAbajo("0 0 30px 10px white")} onMouseUp={()=> setColorSombraAbajo("none")} style={{ width: "45px", height: "45px", backgroundColor : "green",boxShadow : colorSombraAbajo}}></div>
      </div>
    </div>
  );
};

export default Semaforo;