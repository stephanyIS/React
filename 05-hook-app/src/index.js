import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainApp } from './components/09-useContex/MainApp';
import { BrowserRouter } from "react-router-dom";

//import { TodoApp } from './components/08-useReducer/TodoApp';
// import { Padre } from './components/07-tarea-memo/07-tarea-memo/Padre';
// //import { CallbackHook } from './components/06-memos/CallbackHook';
// //import { MemoHook } from './components/06-memos/MemoHook';
// //import { FormWithCustomHook } from './components/02-useEffect/FormWithCustomHook';
// //import { SimpleForm } from './components/02-useEffect/SimpleForm';
// //import { CounterApp } from './components/01-useState/CounterApp';
// //import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
// //import { HookApp } from './HookApp';
// //import {MultipleCustoHooks} from './components/03-examples/MultipleCustoHooks';
// // import { FocusScreen } from './components/04-useRef/FocusScreen';
// //import { RealExampleRef } from './components/04-useRef/RealExampleRef';
// // import { Layout } from './components/05-useLayoutEffect/Layout';
// //import { Memorize } from './components/06-memos/Memorize';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter> 
      <MainApp />
    </BrowserRouter> 
);
// // If you want to start measuring performance in your app, pass a function// to log results (for example: reportWebVitals(console.log))// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitalsreportWebVitals();

// import './components/08-useReducer/intro-reducer';