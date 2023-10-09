import './App.css';
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login'
import Post from './pages/post/Post'
import Navbar from './components/navbar/Navbar'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
    <div>
      <Navbar user = {user}/>
      <Routes>
        <Route path = "/" element = {<Home/>}  />
        <Route path = "/login" element = {user? <Navigate to = '/' /> : <Login/>}  />
        <Route path = "/post/:id" element = {user? <Post/> : <Navigate to = '/login'/>}  />
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
