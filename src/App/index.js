import { AppUI } from './AppUI';
import { TodoProvider } from '../TodoContext'
import React from 'react';

  // const defaultTodos = [
  //   {text: 'Ingresa Tarea', completed: false},
  // ];

  // localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos)
  // localStorage.removeItem('TODOS_V1');



function App() {
    

  return (
    
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}



export default App;
