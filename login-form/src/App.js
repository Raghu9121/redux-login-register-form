import './App.css';
import Home from './componants/Home';
import Navbar from './componants/Navbar';
import Register from './componants/Register';
import { Routes, Route } from "react-router-dom";
import Login from './componants/Login';
import User from './componants/User';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/User" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
