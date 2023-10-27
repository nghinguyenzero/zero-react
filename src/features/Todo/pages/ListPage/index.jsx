import React, { useState } from 'react';
import TodoList from '../../components/TodoList';
// import PropTypes from 'prop-types';

ListPage.propTypes = {
    
};
    const initTodoList = [
        {
            id: 1, title: "Running", status: 'new'
        },
        {
            id: 2, title: "Swimming", status: 'completed'
        },
        {
            id: 3, title: "Learning", status: 'completed'
        },
        {
            id: 4, title: "Excercise", status: "new"
        }
    ]



function ListPage(props) {
    const [todoList, setTodoList] = useState(initTodoList)
    const [filteredStatus, setFilteredStatus] = useState('all')
    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList]
        newTodoList[idx] = {
         ...todoList[idx],
         status : todoList[idx].status === 'new' ? 'completed' : 'new'
        }
        setTodoList(newTodoList)
    }
    const handleShowAll = () => {
        setFilteredStatus('all')

    }
    const handleShowCompleted = () => {
        setFilteredStatus('completed')

        
    }
    const handleShowNew = () => {
        setFilteredStatus('new')
        
    }
    
    const renderedTodoList = todoList.filter(todo=> filteredStatus ==='all' || filteredStatus === todo.status)
    return (
        <div>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} ></TodoList>
            <button onClick={handleShowAll}>All</button>
            <button onClick={handleShowCompleted}>Completed</button>
            <button onClick={handleShowNew}>New</button>

        </div>
    );
}

export default ListPage;