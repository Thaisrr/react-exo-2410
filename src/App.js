import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Connection from "./pages/Connection";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navigation/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Connection/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
