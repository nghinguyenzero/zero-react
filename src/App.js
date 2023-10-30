// import logo from './logo.svg';
// import './App.css';
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import AlbumFeature from "./features/Album/pages";
import TodoFeature from "./features/Todo/pages";
import ListPage from "./features/Todo/pages/ListPage";
import DetailPage from "./features/Todo/pages/DetailPage";
import NotFound from "./components/Loading/NotFound";
// import { useStore } from "./store";

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
      <Switch>
        <Redirect from="/home" to="/" exact/>
        <Route path="/" component={TodoFeature}  exact/>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/theme" component={AlbumFeature} />
        <Route element={<NotFound />}/>
      </Switch>
      <h2>Footer</h2>
    </div>
  );
}

export default App;
