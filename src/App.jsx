import React from "react";
import './App.css'
import Primeiro from '../src/components/Primeiro';
import ComParametro from '../src/components/ComParametro'

import ComFilhos from '../src/components/ComFilhos';
import Card from '../src/components/layout/Card'
import Repeticion from '../src/components/Repeticion'
import Condicional from "../src/components/Condicional";
import CondicionalComIf from "./components/CondicionalComIf";
import Padre from "./components/comunicacion/directa/Padre";
import Super from "./components/comunicacion/indirecta/Super";
import Input  from "./components/form/Input";
import Contador  from "./components/contador/Contador"
import Mega  from "./components/mega/Mega"


export default  (props) =>(
  <div className="App">
    <h1>ReactJs</h1>
    <div className="cards">
     <Card titulo=" #11 MegaSena " color="#272d90">
        <Mega qtdNumero={8}/>
    </Card>   
     <Card titulo=" #10 Contador " color="#264b60">
        <Contador paso= {10} valor={1}/>
    </Card>   
     <Card titulo=" #09 Input " color="#00ff40">
       <Input/>
    </Card>   
       <Card titulo=" #08 comunicacion indirecta" color="#000">
       <Super/>
    </Card> 
    <Card titulo=" #07 comunicacion directa" color="#4298b5">
      <Padre apellido="Freitas"></Padre>
    </Card>
    <Card titulo=" #06  condicional con If" color="#fa6900">
      <CondicionalComIf numero ={11}></CondicionalComIf>
    </Card>   
    <Card titulo=" #05 condicional" color="#ff0000">
      <Condicional numero ={11}></Condicional>
    </Card>
    <Card titulo=" #04 repeticion">
      <Repeticion></Repeticion>
    </Card>
      <Card titulo=" #03 componente com filhos">
        <ComFilhos>
          <ul>
            <li>ana</li>
            <li>maria</li>
            <li>juan</li>
            <li>fel</li>
          </ul>
        </ComFilhos>
    </Card>
          <Card titulo="#02 componente com prametro" color="#993366">
            <ComParametro titulo = "este es el titulo" 
              subtitulo="subtitulo"/> 
          </Card>

      <Card titulo="#01 primer componente" color="#cff261">
      <Primeiro/>
      </Card>

   </div>
  </div>
)
