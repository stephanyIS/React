import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';


describe('Pruebas en funciones de Héroes', ()=>{
   
    test('debe de retornar un héroe por id', ()=>{
        const id = 1; 
        const heroe = getHeroeById(id);
        const heroeData = heroes.find( h => h.id === id ); 
        
        expect( heroe ).toBe(heroeData);
    })

    test('debe de retornar undefind si el héroe no existe', ()=>{
        const id = 10; 
        const heroe = getHeroeById(id);
        
        expect( heroe ).toBe(undefined);
    })

    test('Debe retornar un arreglo con lo héroes de DC', ()=>{

        const owner = 'DC'; 
        const heroes = getHeroesByOwner(owner); 
        const heroesData = heroes.filter( h => h.owner === owner); 
        expect(heroes).toEqual(heroesData);

    })

    test('Debe retornar un arreglo con lo héroes de Marvel - Longitud 2', ()=>{

        const owner = 'Marvel'; 
        const length = 2;
        const heroes = getHeroesByOwner(owner); 
        expect(heroes.length).toBe(length);

    })
})