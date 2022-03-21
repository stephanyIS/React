//Arreglos
//No usar el arreglo.push porque modifica el objeto original
const arreglo = [1,2,3,4];
let arreglo2 = [...arreglo,5];

//Crea n nuevo arreglo y rompe la referencia
const arreglo3 = arreglo2.map(function(number){
    return number * 2; 
});

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);