import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoLoading} from '../TodoLoading'
import { TodosError } from '../TodosError';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext';
import React from 'react';

function AppUI() {

    const {
        loading,
        error,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
    } = React.useContext(TodoContext)

    return(
        <>
            <TodoCounter/>
            <TodoSearch/>

                    <TodoList>

                        {loading && (
                        <>
                            <TodoLoading/>
                            <TodoLoading/>
                            <TodoLoading/>
                        </>)}
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
            <Modal>

            </Modal>
        </>
    );
};

export { AppUI };
