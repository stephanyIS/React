import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( {setCategories}) => {
 
  const [inputValue, setInputValue] = useState(''); 
    
  const handleInputChange = (event) =>{ //e
     setInputValue(event.target.value); 
     console.log('HandleInputChange llamado')
  } 

  const handleSubmit = (e) =>{
      e.preventDefault();

      if( inputValue.trim().length > 2){
        setCategories( cat => [ inputValue, ...cat] )
        console.log('Submit hecho');
        setInputValue('');
      }
      
  }

  return (
    <form onSubmit={handleSubmit}>
        <input 
           type="text" 
           value= {inputValue}
           onChange = {handleInputChange}
        />
    </form>
  )
}


AddCategory.propTypes = {
  setCategories: PropTypes.func.isRequired
}