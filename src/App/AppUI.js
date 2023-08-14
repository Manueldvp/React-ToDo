import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoLoading} from '../TodoLoading'
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import React from 'react';

function AppUI({
    loading,
    error,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo,
}) {
    return(
        <React.Fragment>

        <TodoCounter 
        completed={completedTodos} 
        total={totalTodos} />
        <TodoSearch
            searchValue={searchValue}
            setSearchValue={setSearchValue}
        />

        <TodoList>

            {loading && <TodoLoading/>}
            {error && <TodosError/>}
            {(!loading && searchedTodos.length === 0) && <EmptyTodos/>}

            {searchedTodos.map(todo => (
                <TodoItem
                key={todo.text}
                text={todo.text}
                completed={todo.completed}
                onComplete={() => completeTodo(todo.text)}
                onDelete={() => deleteTodo(todo)}
                />
            ))}
        </TodoList>

        <CreateTodoButton/>
        
        </React.Fragment>
    );
};

export { AppUI };
