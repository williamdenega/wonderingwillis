import React from 'react'
import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login({ setIsAuth}) {

  let navigate = useNavigate()

  const signIn = () =>{
    signInWithPopup(auth, provider).then((r)=>{
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
      navigate('/')
    })
  }





  return (
    <div class='loginPage'>

      <p>Sign in with Google to Post</p>

      <button className='login-with-google-btn' onClick={signIn}>
        Sign in with Goolge  
      </button>
      </div>
  )
}
