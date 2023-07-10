import React, { useEffect, useState } from 'react'
import { db } from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import Post from './Post'
import './Sermons.css'

export default function Sermons() {
  const [list, setList] = useState([])

  useEffect(() => {
    const getData = async () => {
      const collectionRef = collection(db, 'sermons')
      const data = await getDocs(collectionRef)
      setList(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
    }
    getData()
  }, [])

  return (
    <div className='sermons'>
      <h1>SERMONS</h1>
      <ul>
        {list.map((info, count) => (
          <Post key={count} data={info} num={count + 1} />
        ))}
      </ul>
    </div>
  )
}

