
 describe('Pruebas en el archivo #1 primera parte', ()=>{
    test('debe de ser true', ()=>{
        const isActive = true; 
        if(!isActive){
            throw new Error('Esta activo');
        }
    })
 })


 describe('Pruebas en el archivo Demo.test.js', ()=>{

    test('Deben ser iguales los strings', ()=>{
        //Inicialización
        const mensaje1 = 'Hola mundo';

        //Estimulo
        const mensaje2 = `Hola mundo`; 

        //Observare comportamiento

        expect(mensaje1).toBe(mensaje2);
    })

})
