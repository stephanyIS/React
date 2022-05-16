import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
 
  //Mantener la referencia de cualquier elemento html  
  const inputRef = useRef();  

  const handleClick = () => {
    //  Posiciona el focus en el input 
    //document.querySelector('input').focus();

    //  Posiciona el focus en el input y lo selecciona
    //document.querySelector('input').select();
    inputRef.current.select();
  }

  return (
    <div>
        <h1>FocusScreen</h1>
        <hr />

        <input
            ref={inputRef}
            className="form-control"
            placeholder="Su nombre"
        />

        <button
            className="btn btn-outline-primary mt-5"
            onClick={handleClick}
        >
            Focus
        </button>
    </div>

  )
}
