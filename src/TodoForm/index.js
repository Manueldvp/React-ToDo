import React from "react";
import { TodoContext } from '../TodoContext' 
import './TodoForm.css'

function TodoForm () {

     const {
        setOpenModal,
        addTodo,
    } = React.useContext(TodoContext)

    const [newTodoValue, setNewTodoValue] = React.useState('')

     const onSubmit = (e) => {
            e.preventDefault();
            addTodo(newTodoValue);
            setOpenModal(false)
     }

    const onCancel = () => {
        setOpenModal(false)
    }

    const onChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    
    return (
        <form onSubmit={onSubmit}>
            <label>Nueva Tarea?</label>
            <textarea
            value={newTodoValue}
            onChange={onChange} 
            placeholder="Escribe tu nueva tarea" />
            <div className="TodoForm-buttons">
                <button type="button" onClick={onCancel} className="TodoForm-butto--1 Buttons">Cancelar</button>
                <button type="button"  onClick={onSubmit} className="TodoForm-butto--2 Buttons">Confirmar</button>
            </div>
        </form>
    )
}

export { TodoForm }