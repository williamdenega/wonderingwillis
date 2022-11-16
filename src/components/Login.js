import React from 'react'
import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'

export default function Login({ setIsAuth}) {

  const signIn = () =>{
    signInWithPopup(auth, provider).then((r)=>{
      localStorage.setItem("isAuth", true)
      setIsAuth(true)
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
