import React from "react";

export default (props) =>{

  return(
  <div>
    <label htmlFor="pasoInput">paso: </label>
    <input 
      id="pasoInput" 
      type="number" 
      value={props.paso}
      onChange={ e => props.onPasoChange( +e.target.value)}/>
    </div>
  )
}
