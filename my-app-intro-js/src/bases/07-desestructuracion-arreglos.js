
//Desestructuracion de arreglos

const personajes = ['Goku','Vegeta','Thunks'];
const [,,p3] = personajes;

console.log(p3);

const retornaArreglo = () => {
    return ['ABC',123];
}

const [letras, numeros] = retornaArreglo(); 
console.log('letras: ',letras, ' los numeros son: ', numeros);

//Tarea
const uuseStates = (valor) =>{
    return [valor, ()=>{ console.log(`Hola mundo ${valor}`)}];
}

const [nombre,setNombre] = uuseStates('Stephany'); 
console.log(nombre);
setNombre();
