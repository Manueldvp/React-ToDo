import React from "react";

// import "./TodosLoading.css";
import searchIcon from "../assets/search-icon.svg";


function TodoLoading() {

    return(
      <div className="LoadingTodo-container">
        <span className="LoadingTodo-completeIcon"></span>
        <p className="LoadingTodo-text"></p>
        <span className="LoadingTodo-deleteIcon"></span>
        </div>
    );
  }

export {TodoLoading};