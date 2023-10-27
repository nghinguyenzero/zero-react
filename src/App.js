// import logo from './logo.svg';
// import './App.css';
import { NavLink, Route, Routes } from "react-router-dom";
import AlbumFeature from "./features/Album/pages";
import TodoFeature from "./features/Todo/pages";
import ListPage from "./features/Todo/pages/ListPage";
import DetailPage from "./features/Todo/pages/DetailPage";
import NotFound from "./components/Loading/NotFound";

function App() {
  return (
    <div className="App">
      <h2>Home</h2>
      <p>
        <NavLink to="/todos" activeclassname="active-menu">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink to="/albums" activeclassname="active">
          Albums
        </NavLink>
      </p>
      <Routes>

        {/* <Route path="/todos" element={<TodoFeature />} /> */}
          {/* <Route path='/todos' element={<ListPage/>}/> */}
          {/* <Route path='todos/:todoId' element={<DetailPage />}/> */}

        {/* </Route> */}

        <Route path="/albums" element={<AlbumFeature />} />
        <Route path="*" element={<TodoFeature />}/>
        <Route element={<NotFound />}/>


      </Routes>
      <h2>Footer</h2>
      {/* <TodoFeature></TodoFeature> */}
      {/* <AlbumFeature></AlbumFeature> */}
    </div>
  );
}

export default App;
