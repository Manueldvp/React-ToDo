import React from "react";

import './CreateTodoButton.css'


function CreateTodoButton({
  setOpenModal,
  openModal,
}) {
 
    return(
        <button className="CreateTodoButton" onClick={() => {setOpenModal(!openModal)}}> + </button>
    );
  }

export { CreateTodoButton };