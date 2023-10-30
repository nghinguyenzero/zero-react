import React, { useEffect, useMemo, useState } from 'react';
import TodoList from '../../components/TodoList';
// import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import queryString from 'query-string'
import { useLocation, useRouteMatch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';

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
    const location = useLocation()
    const history = useHistory()
    const match = useRouteMatch()
    // const math = useResolvedPath("").pathname;
    // const history = createBrowserHistory();
    // let history = useNavigate();
    console.log('location', location)

// history.push('/UserDashboard')
    // const math = useMatch()
    // debugger

    const [filteredStatus, setFilteredStatus] = useState(()=>{
        const params = queryString.parse(location.search)
        return params?.status || 'all'
    })

    useEffect(()=>{
        const param = queryString.parse(location.search)
        setFilteredStatus(param?.status || 'all')

    }, [location.search])



    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList]
        newTodoList[idx] = {
         ...todoList[idx],
         status : todoList[idx].status === 'new' ? 'completed' : 'new'
        }
        setTodoList(newTodoList)
    }
    const handleShowAll = () => {
        const queryParams  = {
            status: 'all'
        }
        history.push({
            pathname: match.path,
            search : queryString.stringify(queryParams)
        })
    }

    const handleShowCompleted = () => {
        const queryParams  = {
            status: 'completed'
        }
        history.push({
            pathname: match.path,
            search : queryString.stringify(queryParams)
        })
    }

    const handleShowNew = () => {
        const queryParams  = {
            status: 'new'
        }

        history.push({
            pathname: match.path,
            search : queryString.stringify(queryParams)
        })
    }
    
    const renderedTodoList = useMemo(()=>{
        todoList.filter(todo=> filteredStatus ==='all' || filteredStatus === todo.status)
    },[todoList, filteredStatus]) 
    return (
        <div>
            <p>list pages</p>
            <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} ></TodoList>
            <button onClick={handleShowAll}>All</button>
            <button onClick={handleShowCompleted}>Completed</button>
            <button onClick={handleShowNew}>New</button>

        </div>
    );
}

export default ListPage;