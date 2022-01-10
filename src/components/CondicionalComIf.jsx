import React from "react";
import If from "./If";


export default props =>{

  return(
  <>
    <h2>o numero e {props.numero}</h2>
    <If test={props.numero %2 === 0}>
      <span>par</span>
    </If>
    <If test={props.numero %2 != 0}>
    <span>impar</span>
    </If>
  </>
  )
}
