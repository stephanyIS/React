//Objetos literales 

const persona = {
    nombre: 'Stephany',
    apellido: 'Pineda',
    edad: 23,
    direccion: {
        ciudad: 'NY',
        zip: 552255,
        lat: 25.2255,
        lng: 34.2222
    }
};

//const persona2 = persona;  ***Evitar hacer esto debido a que se hace una copia de la referencia

//Spread permite clonar un objeto y no su referencia
const persona2 = {...persona}; 

persona2.nombre = 'suanny'; 

console.log( persona ); 
console.log( persona2 ); 
