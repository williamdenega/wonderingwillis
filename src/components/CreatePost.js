import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { Timestamp } from 'firebase/firestore'


export default function CreatePost(){

  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')
  var date= moment().format('hh:mm:ss a MM-DD-YYYY');
  
  const postsCollectionRef = collection(db,'posts')

  let navigate = useNavigate()


  const createPost = async () => {
    let time = Timestamp.now()
    console.log(postsCollectionRef)
    await addDoc(postsCollectionRef, {title, post,time})
    navigate('/')
  }



  return (
    <div className='createPostPage'>

     <div className='cpContainer'>
        <h1> Create Post</h1>

        <div className='inputGp'>
          <label> TITLE: </label>
          <input placeholder='Title...' onChange={(event)=> {setTitle(event.target.value)}}/>
          <label> POST:</label>
          <textarea placeholder='post' onChange={(event)=> {setPost(event.target.value)}}/>
          <button onClick={createPost}> POST </button>


        </div>
      </div>


 

    </div>
  )
}
