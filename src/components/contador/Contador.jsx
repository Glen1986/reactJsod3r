import React, {Component}  from "react";
import Display from "./Display";
import './Contador.css'
import PasoForm from "./PasoForm";

export default class Contador extends React.Component{

  state={
    paso:this.props.paso || 1,
    valor:this.props.valor || 0,
  } 
  inc = () => {
    this.setState({
      valor: this.state.valor + this.state.paso 
    })
  } 
  dec = () => {
    this.setState({
      valor:  this.state.valor - this.state.paso
    })
   }
  mudarPaso = (nuevoPaso) =>{
    this.setState({
      paso:nuevoPaso
    })

  }

  render(){
    return(
     <div>
       <h2>Contador</h2>
      <div>
        <PasoForm paso = {this.state.paso}
          onPasoChange={this.mudarPaso}
        ></PasoForm>
         <Display valor={this.state.valor}></Display>
       </div>
       <div>
         <button onClick={this.inc}>+</button>
         <button onClick={this.dec}>-</button>
       </div>
    </div>
    )
  }

}
