import './style/App.css';
import React from "react";
import {Suspense} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Connection from "./pages/login/Connection";
import Navigation from "./components/Navigation";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import {UserGuard} from "./pages/guards/UserGuard";
import Spinner from "./components/Spinner";
import DialogAlert from "./components/DialogAlert";

const GameForm = React.lazy(() => import("./pages/GameForm"));

function App() {

    console.info(process.env.REACT_APP_ENV);



  return (
    <div className="App">
      <BrowserRouter>
          <Navigation/>
          <Suspense fallback={<Spinner/>}>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path='/create' element={<UserGuard><GameForm/></UserGuard>} />
                  <Route path='/login' element={<Login/>}>
                      <Route path='' element={<Connection/>} />
                      <Route path='inscription' element={<Register/>} />
                  </Route>
              </Routes>
          </Suspense>

          <DialogAlert/>
      </BrowserRouter>
    </div>
  );
}

export default App;
