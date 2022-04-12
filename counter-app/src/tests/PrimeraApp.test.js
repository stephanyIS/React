import React from 'react';
import {shallow} from 'enzyme';
//import '@testing-library/jest-dom'; 
//import {render} from '@testing-library/react';
import PrimeraApp from "../PrimeraApp";



describe('Pruebas en <PrimeraApp />',()=>{
   /*
    test('debe de mostrar el mensaje "hola soy goku"', () => { 
         const saludo = 'Hola, soy Goku'; 
         const { getByText } = render( <PrimeraApp saludo={ saludo}/> );
         expect( getByText(saludo)).toBeInTheDocument();
     })
     //Tiene que agregar //import '@testing-library/jest-dom/extend-expect' para usar el toBeInTheDocument
    */

     test('debe de mostrar <PrimeraApp /> correctamente', ()=>{
         const saludo = 'Hola, soy Goku';
         const wrapper = shallow( <PrimeraApp saludo={saludo}/>); //Componente renderizado
         expect( wrapper ).toMatchSnapshot(); 
     })

     test('Debe de mostrar el subtitulo enviado por props ', ()=>{
         
        const saludo = 'Hola, soy Goku'; 
        const subtitulo = 'Soy un subtitulo'; 

        const wrapper = shallow(
            <PrimeraApp
                saludo={saludo}
                subtitulo = {subtitulo}
            />
        );

        const textSubtitulo = wrapper.find('p').text();
        expect(textSubtitulo).toBe(subtitulo);

     })

})