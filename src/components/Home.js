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
  const divStyle = {
    width:'50%',
    maxwidth:'660px',
    overflow:'hidden',
    background:'transparent' 
  }


  return (
    <div className='homePage'>
     
      {/* <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameBorder="0" height="450" style={divStyle} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/oh-but-god-single/1643141943" title="myFrame"></iframe> */}
      {/* {postList.map((info, count)=><Post key={count} data={info}  num={count+1} />)} */}

    </div>)
}
