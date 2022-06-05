import { retornaArreglo } from '../../base/07-deses-arr';


describe('Pruebas en desestructuración', ()=>{

    test('Debe retornar un string y un número', () => { 
        const arr = retornaArreglo(); //['ABC', 123]
        const [letras, numeros] = retornaArreglo(); //['ABC', 123]
        expect(arr).toEqual(['ABC', 123]);        
     })

     test('letras debe ser de tipo string', () => { 
        const [letras, numeros] = retornaArreglo(); //['ABC', 123]
        expect(typeof letras).toBe('string'); 
        
     })

     test('letras debe retornar ABC', () => { 
        const [letras, numeros] = retornaArreglo(); //['ABC', 123]
        expect(letras).toBe('ABC');        
     })

})