import './style/App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Connection from "./pages/login/Connection";
import Navigation from "./components/Navigation";
import GameForm from "./pages/GameForm";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
            <Route path='/create' element={<GameForm/>} />
            <Route path='/login' element={<Login/>}>
                <Route path='' element={<Connection/>} />
                <Route path='inscription' element={<Register/>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
