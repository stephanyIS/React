//Estado inicial

const initialSate = [{
    id: 1,
    todo: 'Comer pan', 
    done: false
}]; 

//Definicion del reducer

const todoReducer = ( state = initialSate , action ) => {
    //Si la accion tiene un valor lee el tipo sino no hace nada
    if( action?.type === 'agregar'){ 
        return [...state, action.payload];
    }

    return state;
}

//inicializacion 
let todos = todoReducer(); 
console.log(todos);
//Nuevo valor
const newTodo = {
    id: 2,
    todo: 'Comprar leche', 
    done:  false
}

//La accion
const agregarTodoAction = {
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer(todos, agregarTodoAction); 

console.log(todos);