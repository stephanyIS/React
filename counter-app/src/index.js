
import React from 'react';
import ReactDom from 'react-dom'; 
import PrimeraApp from './PrimeraApp';
import CounterApp from './CounterApp';
import './index.css';

//referencia al div en public/index.html
const divRoot = document.querySelector('#root');
//ReactDom.render( <PrimeraApp saludo="Hola soy steph" edad={40} /> , divRoot);
ReactDom.render( <CounterApp value={50} /> , divRoot);

