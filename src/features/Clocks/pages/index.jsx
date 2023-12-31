// import React from 'react';
// import PropTypes from 'prop-types';
// import AlbumList from '../components/AlbumList';
// import { useStore, actions } from "./../../../store";
// CLocksFeature.propTypes = {
    
// };

// function CLocksFeature(props) {


//     return (
//         <div></div>

//     );
// }

// export default ClocksFeature;



import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import './App.scss';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import PostList from '../components/PostList';
import Pagination from '../components/Pagination';
import PostFiltersForm from '../components/PostFiltersForm';
import MagicClock from '../components/MagicClock';


function ClocksFeature() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: 'I love Easy Frontend! 😍' },
    { id: 2, title: 'We love Easy Frontend! 🥰' },
    { id: 3, title: 'They love Easy Frontend! 🚀' },
  ]);

  const [postList, setPostList] = useState([]);
  const [pagination, setPagination] = useState({
    _page: 1,
    _limit: 10,
    _totalRows: 1,
  });
  const [filters, setFilters] = useState({
    _limit: 10,
    _page: 1,
  });

  useEffect(() => {
    async function fetchPostList() {
      // ...
      try {
        // _limit=10&_page=1
        const paramsString = queryString.stringify(filters);
        const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramsString}`;
        const response = await fetch(requestUrl);
        const responseJSON = await response.json();
        console.log({ responseJSON });

        const { data, pagination } = responseJSON;
        setPostList(data);
        setPagination(pagination);
      } catch (error) {
        console.log('Failed to fetch post list: ', error.message);
      }
    }

    console.log('POST list effect');
    fetchPostList();
  }, [filters]);

  useEffect(() => {
    console.log('TODO list effect');
  });

  function handlePageChange(newPage) {
    console.log('New page: ', newPage);
    setFilters({
      ...filters,
      _page: newPage,
    });
  }

  function handleTodoClick(todo) {
    console.log(todo);
    const index = todoList.findIndex(x => x.id === todo.id);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoFormSubmit(formValues) {
    console.log('Form submit: ', formValues);
    // add new todo to current todo list
    const newTodo = {
      id: todoList.length + 1,
      ...formValues,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  function handleFiltersChange(newFilters) {
    console.log('New filters: ', newFilters);
    setFilters({
      ...filters,
      _page: 1,
      title_like: newFilters.searchTerm,
    });
  }

  return (
    <div className="app">
            <Container>
                <Row>
                <Col>
                    <h1>React hooks - PostList</h1>
                        <MagicClock/>
                    <h1>TO DO FORM</h1>
                    <TodoForm onSubmit={handleTodoFormSubmit} />
                    <TodoList todos={todoList} onTodoClick={handleTodoClick} />
                </Col>
                <Col>
                    <PostFiltersForm onSubmit={handleFiltersChange} />
                    <h1>POST LIST</h1>
                    <PostList posts={postList} />
                    <h1>PAGINATION</h1>
                    <Pagination
                        pagination={pagination}
                        onPageChange={handlePageChange}
                    />
                </Col>
            </Row>
      </Container>
    


        {/* </div> */}
      

    </div>
  );
}

export default ClocksFeature;
