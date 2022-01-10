import React, { useState } from "react";

export default (props) =>{
 const [nombre, setNombre ] = useState("pedro") 
  return(
    <>
      <h2>{nombre}</h2>
      <input type="text" value={nombre}
        onChange={e => setNombre(e.target.value)} />
    </>
  )
}
