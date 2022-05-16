import React, { useCallback, useState } from 'react';
import '../02-useEffect/effects.css';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {
  /* 1 - Cuando ocupamos enviar una funcion a un componente hijo 
    cuando el componente esta memorizado y si la función no se envia con un useCallback se va estar creando una nueva version 
    en cada renderizado del componente padre

    con un useEffect 

    cuando la dependencia de un useEffect es una funcion, sino s edispararia cada vez que se vuelva a crear esa funcion
  */

  const [counter, setCounter] = useState(10);
  
  
  const increment = useCallback( (num) => {
    setCounter( c => c + num);
  },[setCounter]);
  

  return (
    <div>
        <h1>CallbackHook: {counter}</h1>
        <hr/>
        <ShowIncrement increment={increment}/>


    </div>
  )
}
