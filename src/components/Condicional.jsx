import React from "react";


export default props =>{

  return(
  <>
    <h2>o numero e {props.numero}</h2>
    { props.numero %2 === 0 ?
      <span>par</span>
      :
    <span>impar</span>
    }
  </>
  )
}
