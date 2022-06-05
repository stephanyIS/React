import { getSaludo } from '../../base/02-template-string';
import '@testing-library/jest-dom'; 


describe('Prueba en el archivo --02-template-string.js--', ()=>{

    test('getSaludo debe retornar Hola Stephany', () => {

        const nombre = 'Stephany';
        const saludo = getSaludo(nombre);
        expect(saludo).toBe('Hola Stephany');

     })

     test('getSaludo sin argumento debe retornar Hola Carlos', ()=>{
        const saludo = getSaludo();
        expect(saludo).toBe('Hola Carlos'); 
     })
})