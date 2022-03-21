//import React, { Fragment } from 'react';
import React from 'react' ;
import PropTypes from 'prop-types';


//Funtional components
const PrimeraApp = ({ saludo="Hello", edad, subtitulo} ) => {
    const object = {"nombre": "Stephany", "edad":23};

    const habilitado = true;
   return (
     <>
         <h1>{saludo}</h1>
         <h1>{subtitulo}</h1>
         <pre> { JSON.stringify(object, null, 2)} </pre>
         <p>{edad}</p>
         <p>{habilitado}</p>
         <p>lorem lorem lorem</p>
     </>
   );   
}

PrimeraApp.propTypes = {
  saludo: PropTypes.string.isRequired,
  edad: PropTypes.number
}

PrimeraApp.defaultProps = {
  subtitulo: 'Soy un subtitulo'
}

export default PrimeraApp;