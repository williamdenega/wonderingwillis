import React, {useEffect, useState} from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase-config'
import { time } from '../react-moment'
import Post from './Post'


export default function Home() {
  const [postList, setPostList] = useState([])
  const postsCollectionRef = collection(db, 'posts')
  // console.log(time)
  
  useEffect(()=>{
    const getPost = async () => {
      const data = await getDocs(postsCollectionRef)
      setPostList(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
    }
    getPost()
  },[])

// postsCollectionRef
  console.log([postList])

  return (
    <div className='homePage'>

      {postList.map((info, count)=><Post key={count} data={info} />)}

    </div>)
}
