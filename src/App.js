import './App.css';
import Home from './pages/home/Home.jsx'
import Login from './pages/login/Login'
import Post from './pages/post/Post'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home/>}  />
        <Route path = "/login" element = {user? <Navigate to = '/' /> : <Login/>}  />
        <Route path = "/post/:id" element = {user? <Post/> : <Navigate to = '/login'/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
