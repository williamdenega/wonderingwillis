import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import CreatePost from "./CreatePost";
import Home from './Home'
import Login from './Login'
import Missions from "./Missions";
import Sermons from "./Sermons";
import Testimony from "./Testimony"
import "./App.css"
import {signOut, getAuth, onAuthStateChanged} from 'firebase/auth'
import {auth} from '../firebase-config'

function App() {
  
  const [user, setUser] = useState(false)

  

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    })
    
  }, []);

  

  const signUserOut = () =>{
    signOut(auth).then((r)=>{
      localStorage.clear()
      setUser(null)

    })
  }

  return (
    <Router>
      <nav>
        <img src="wonderingwillis.png" alt="Logo" />
        <Link to="/" activeclassname='active'>Home</Link>
        <Link to='/sermons' activeclassname="active">Sermons</Link>
        <Link to='/missions' activeclassname="active"> Missions</Link>
        <Link to='/testimony' activeclassname="active"> My Testimony</Link>
        {user &&  <Link to='/create' activeclassname="active"> Create Post </Link>}
        {/* {!user ? <Link to='/login'> Login</Link> : <button onClick={signUserOut}> Log Out</button>} */}
        {!user ? <Link to='/login'> Login</Link> : <Link onClick={signUserOut} to='/'> Log Out</Link>}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={ <Login />} />
        <Route path="/create" element={ <CreatePost/>} />
        <Route path="/sermons" element={ <Sermons/> } /> 
        <Route path="/missions" element={ <Missions /> } /> 
        <Route path="/testimony" element={ <Testimony/>} /> 
      </Routes>


    </Router>
  );
}

export default App;
