import React, { useEffect, useState } from 'react';
import './effects.css';
import { Message } from './Message';


export const SimpleForm = () => {

  const [formState, setformState] = useState({
    name: '',
    email: ''
  });

  const {name, email} = formState; 

  const handleInputChange = ({target}) => {
    //console.log(target.name);
    setformState({
      ...formState,
      [target.name]: target.value
    });
  }

  //Cuando mi componente es mostrado por primera vez se esta disparando y no importa que cambie, se vuelve a ejecutar
  useEffect( ()=>{
    //console.log('Se ejecuta con cualquier cambio');
  });
  
  //Solo se ejecuta la primera vez que se renderiza el componente
  useEffect( ()=>{
    //console.log('Se ejecuta solo por primera vez');
  }, []);

  //Solo esta escuchando los cambios del formState
  useEffect( ()=>{
   //console.log('formState cambió');
  }, [formState]);

 //Solo esta escuchando los cambios del email
 useEffect( ()=>{
  //console.log('email cambió');
 }, [email]);


  return (
    <>
        <h1>useEffect</h1>
        <hr/>

        <div className="form-group">
          <input 
            type="text" 
            name= "name"
            className="form-control"
            placeholder="Write your name!"
            autoComplete="off"
            value={name}
            onChange={handleInputChange}
          />
        </div>

        <br/>
        <div className="form-group">
           <input 
              type="text" 
              name= "email"
              className="form-control"
              placeholder="Write your email!"
              autoComplete="off"
               value={email}
              onChange={handleInputChange}
            />
        </div>

        { (name === '123') && <Message/>}
    </>
  )
}
