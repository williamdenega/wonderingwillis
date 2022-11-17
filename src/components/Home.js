import React, {useEffect, useState} from 'react'
import {collection, getDocs} from 'firebase/firestore'
import {db} from '../firebase-config'
export default function Home() {
  const [postList, setPostList] = useState([])
  const postsCollectionRef = collection(db, 'posts')

  useEffect(()=>{
    const getPost = async () => {
      const data = await getDocs(postsCollectionRef)
      setPostList(data.docs.map((doc)=> ({...doc.data(), id: doc.id})))
    }
    getPost()
  },[postsCollectionRef])


  return (
    <div className='homePage'>
      {postList.map((post, count)=> {
        return(
          <div className='post'>

            <div className='postHeader'>
                <h1>{post.title}</h1>
            </div> 

            <div className='postTextContainer'>
              {post.post}
            </div>

          </div>
        )


    })}
    </div>)
}
