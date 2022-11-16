import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import CreatePost from "./CreatePost";
import Home from './Home'
import Login from './Login'
import "./App.css"


function App() {

  const [isAuth, setIsAuth] = useState(false)

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to='/create'> Create Post </Link>
        <Link to='/login'> Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ <Login setIsAuth={setIsAuth} />} />
        <Route path="/create" element={ <CreatePost/>} />
      </Routes>


    </Router>
    // <div className="App">
    //     <p>
    //       Edit src/App.js and save to reload.
    //     </p>
    //     <p>
    //       HELLO THIS IS A TYEST M*FTHER
    //     </p>

    // </div>
  );
}

export default App;
