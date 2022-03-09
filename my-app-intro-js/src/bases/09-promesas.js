
import { getHeroeById  } from './08-imp-exp';

/*
const promesa = new Promise( (resolve, reject)=>{

    setTimeout( ()=>{
        const p1 = getHeroeById(2);
        resolve(p1);
        //reject('No se pudo encontrar el heroe');
    }, 2000);

}); 

promesa.then( (heroe)=>{
   console.log('heroe ', heroe )
})
.catch( (error)=>{
  console.log(error);
});

*/

const getHeroeByIdAsync = (id)=>{

    return new Promise( (resolve, reject)=>{

        setTimeout( ()=>{
            const p1 = getHeroeById(id);
            if(p1){
              resolve(p1);
            }else{
              reject('No se pudo encontrar el heroe');
            }
            
            
        }, 2000);
    
    }); 
}

getHeroeByIdAsync(2)
   .then( console.log )
  // .catch( err => console.warn(err));
   .catch( console.warn );