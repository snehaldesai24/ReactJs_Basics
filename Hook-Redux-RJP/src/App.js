
import './App.css';
import AddTodo from './components/Todo/AddTodo';
import Ref from './components/Ref/Ref';
import Timer from './components/Timer/Timer';
import RefDom from './components/Ref/RefDom';
import Reducer from './components/Reducer/Reducer';
import Nav from './components/Nav/Nav';
import { Route, Routes } from "react-router-dom";
import Name from './redux/components1/Name';
import Details from './redux/components1/Details';
import Redux from './redux/Redux';

function App() {
  return (
    <div className="App">
      
      <Nav />
      
      <Routes>
      <Route path={"/"} element={<AddTodo/>} />
      <Route path={"/timer"} element={<Timer/>} />
      <Route path={"/ref"} element={<Ref/>} />
      <Route path={"/refdom"} element={<RefDom/>} />
      <Route path={"/reducer"} element={<Reducer/>} />
      <Route path={"/redux"} element={<Redux />}>
          <Route path={"Name"} element={<Name />} />
          <Route path={"details"} element={< Details/>} />
      </Route>

      </Routes> 
    </div>
  );
}

export default App;
