import React, { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../firebase-config'
import { useNavigate } from 'react-router-dom'
import { Timestamp } from 'firebase/firestore'
import Select from 'react-select'
import "./CreatePost.css"

export default function CreatePost(){

  const [list, setList] = useState('')
  const [title, setTitle] = useState('')
  const [post, setPost] = useState('')

  //const postsCollectionRef = collection(db,list)
  let navigate = useNavigate()



  const options = [
    {value: 'sermons', label: 'Sermon Post'},
    {value: 'missions', label: 'Missions Trip Post'},
  ]


  const createPost = async () => {
    let time = Timestamp.now()
    //console.log(postsCollectionRef)
    await addDoc(collection(db,list), {title, post,time})
    navigate('/')
  }

  const SermonComponent = () => (
    <div className='sermon-form'>
      <h2>Sermon Post</h2>
      <form>
        <div className='form-group'>
          <label>Title:</label>
          <input type='text' name='title' />
        </div>
        <div className='form-group'>
          <label>Post:</label>
          <textarea name='post' rows='5'></textarea>
        </div>
        <div className='form-group'>
          <label>Location:</label>
          <input type='text' name='location' />
        </div>
        <div className='form-group'>
          <label>Date:</label>
          <input type='date' name='date' />
        </div>
      </form>
    </div>
  )

  const MissionComponent = () => (
    <div className='mission-form'>
      <h2>Missions Trip Post</h2>
      <form>
        <div className='form-group'>
          <label>Location:</label>
          <input type='text' name='location' />
        </div>
        <div className='form-group'>
          <label>Year:</label>
          <input type='text' name='year' />
        </div>
        <div className='form-group'>
          <label>Summary:</label>
          <textarea name='summary' rows='5'></textarea>
        </div>
      </form>
    </div>
  )


  return (
    <div className='createPostPage'>

     <div className='cpContainer'>
      <div>


      </div>

      <div>


      </div>



        <h1> Create Post</h1>

        <div className='inputGp'>
        <Select options={options} styles={{}}  onChange={(e)=> setList(e.value)}/>
        {list === 'sermons' && <SermonComponent/>}
        {list === 'missions' && <MissionComponent/>}
        <button onClick={createPost}> POST </button>
          


        </div>
      </div>


 

    </div>
  )
}
