import React, {useState} from "react";

export default  (props) =>{
  const [numeros, setNumeros] = useState(Array(props.qtdNumero).fill(0))

  function numerosNoRepetidos(array){
    const min = 1
    const max = 60
    const nuevoNumero = parseInt(Math.random() * (max - min)) + min
    return array.includes(nuevoNumero) ?
     numerosNoRepetidos(array) : nuevoNumero
  }

  function gerarNumeros(){
    const newArr = Array(props.qtdNumero)
      .fill(0)
      .reduce(a => [...a, numerosNoRepetidos(a)], [])
      .sort((a, b) => a - b )
     setNumeros(newArr)

  }
  return(
    <>
    <h3>MegaSena</h3>
    <h4>{numeros.join(' ')}</h4>
      <button onClick={gerarNumeros}n>Play</button>
    </>
  )
}
