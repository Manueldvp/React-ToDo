import React from "react";
import { TodoContext } from "../TodoContext";
import './CreateTodoButton.css'


function CreateTodoButton() {
    const {
      setOpenModal,
      openModal,
  } = React.useContext(TodoContext)
    return(
        <button className="CreateTodoButton" onClick={() => {setOpenModal(!openModal)}}> + </button>
    );
  }

export { CreateTodoButton };