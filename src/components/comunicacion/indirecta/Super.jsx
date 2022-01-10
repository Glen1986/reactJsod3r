
import React, { useState } from 'react';
import Sub from './Sub';

export default (props) =>{

  const [num, setNum] = useState(0)

  function cuandoClicar(valorGenerado){
    setNum(valorGenerado * 10)
    console.log("accion")
    console.log(valorGenerado)
  }

  return(
    <div>
      <h4>Valor: {num} </h4>
      <Sub onClicar ={cuandoClicar}/>
  </div>
  )
}

