// import logo from './logo.svg';
// import './App.css';
import { NavLink, Route, Switch, Redirect } from "react-router-dom";
import AlbumFeature from "./features/Album/pages";
import TodoFeature from "./features/Todo/pages";
import ListPage from "./features/Todo/pages/ListPage";
import DetailPage from "./features/Todo/pages/DetailPage";
import NotFound from "./components/Loading/NotFound";
import ClocksFeature from "./features/Clocks/pages";
import Header from "./components/Header";
import Footer from "./components/Footer";
// import { useStore } from "./store";

function App() {
  return (
    <div className="App">
      <div className='app-header'>
        <Header />
      </div>
      <div className='app-content container'>
      <Switch>
        <Redirect from="/home" to="" exact/>
        <Route path="/" component={AlbumFeature}  exact/>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
        <Route path="/clocks" component={ClocksFeature} />
        <Route path="/theme" component={AlbumFeature} />
        <Route element={<NotFound />}/>
      </Switch>
      </div>
      <div className='app-footer container text-center'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
