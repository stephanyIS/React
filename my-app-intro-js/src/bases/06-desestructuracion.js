
//Desestructuración 
//Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
    rango: 'oficial'
};

const {nombre, clave, edad} = persona; 

console.log(nombre);
console.log(clave);
console.log(edad);

//Desestructuracion directa desde los argumentos 

const uuseContext = ({nombre, clave:clave5, edad, rango= 'capi'}) => {
    //console.log(nombre, clave, edad, rango);
    return {
        nombreClave: clave5,
        anios:edad,
        latlng: {
            lat:14.52,
            lng: -12.22
        }
    };
};

//Extraer objetos anidados y asignarlos a constantes
const {nombreClave, anios, latlng : {lat,lng}} = uuseContext(persona);
console.log(nombreClave, anios);
console.log(lat,lng);