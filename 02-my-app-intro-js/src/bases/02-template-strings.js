//Templates Strings

const nombre = 'Stephany';
const apellido = 'Pineda';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
nombre: ${nombre} 
apellido: ${apellido}
valor: ${1+1}
`;

console.log(nombreCompleto);

function getSaludo(nombre){
    return 'Hola mundo ' + nombre; 
}

console.log( `Este es un texto: ${ getSaludo('Stephany')} `);