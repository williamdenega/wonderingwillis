import React from 'react'
import {auth, provider} from '../firebase-config'
import {signInWithPopup} from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

export default function Login({ setIsAuth}) {

  let navigate = useNavigate()

  const signIn = () =>{
    signInWithPopup(auth, provider).then((r)=>{
      localStorage.setItem("isAuth", true)
      console.log('auth ' +auth)
      console.log('provider ' + provider)
      console.log(r)
      console.log(r.user.uid)
      setIsAuth(true)
      navigate('/')
    }).catch(error => window.alert('You are not admin boi!!!! '))
  }





  return (
    <div className='loginPage'>

      <p>Sign in with Google to Post</p>

      <button className='login-with-google-btn' onClick={signIn}>
        Sign in with Goolge  
      </button>
      </div>
  )
}
