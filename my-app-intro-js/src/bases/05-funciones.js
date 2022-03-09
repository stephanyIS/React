//Funciones
 
const saludar = function(nombre) {
    return `Hola, ${nombre}`;
 }
 
 const saludar2 = (nombre) => {
     return `Hola, ${nombre}`;
  }
 
 const saludar3 = (nombre) => `Hola, ${nombre}`;
 const saludar4 = () => `Hola mundo`;
 
 console.log(saludar('Stephany'));
 console.log(saludar2('Rosa'));
 console.log(saludar3('Pineda'));
 console.log(saludar4());
 
 const getUser = () => ({ uid: '123', username: 'Rosa25'}); //() Para indicar que la funcion retorna un objeto debido a que no es una funcion primitiva
 const user = getUser();
 console.log(user);
 
 //TAREA
 const getUsuarioActivo = (nombre) => ({uid:'ABC569', username: nombre});
 const usuarioActivo = getUsuarioActivo('Susanny');
 console.log(usuarioActivo);
 
 
 
 
 