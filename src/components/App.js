import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import CreatePost from "./CreatePost";
import Home from './Home'
import Login from './Login'
import "./App.css"
import {signOut} from 'firebase/auth'
import {auth} from '../firebase-config'

function App() {

  const [isAuth, setIsAuth] = useState(false)

  const signUserOut = () =>{
    signOut(auth).then((r)=>{
      localStorage.clear()
      setIsAuth(false)

    })
  }

  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        
        {isAuth &&  <Link to='/create'> Create Post </Link>}
        {!isAuth ? <Link to='/login'> Login</Link> : <button onClick={signUserOut}> Log Out</button>}
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
