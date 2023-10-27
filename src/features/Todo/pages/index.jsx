import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import { Route, Routes, matchRoutes} from "react-router-dom";
import DetailPage from './DetailPage';
import ListPage from './ListPage';
import NotFound from '../../../components/Loading/NotFound';

TodoFeature.propTypes = {
};



function TodoFeature(props) {
    // const match = useRouterMa
    
    // const [{ route }] = matchRoutes(routes, location)
    // const currentPath = useCurrentPath()
    console.log()
    return (
            // <Routes>
            <Routes>
                <Route path='/todos' element={<ListPage/>} exact></Route>
                <Route path='/todos/:todoId' exact element={<DetailPage />}></Route>
                <Route  element={<NotFound />}></Route>

                              {/* <TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} ></TodoList>
             <btn onClick={handleShowAll}>All</btn>
             <btn onClick={handleShowCompleted}>Completed</btn>
             <btn onClick={handleShowNew}>New</btn> */}
            </Routes>


    );
}

export default TodoFeature;