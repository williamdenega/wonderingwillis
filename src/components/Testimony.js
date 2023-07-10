import React, {useState, useEffect} from 'react'
import {db} from '../firebase-config'
import { doc, getDoc} from 'firebase/firestore'
import './Testimony.css'


export default function Testimony() {

  const [testimony, setTestimony ] = useState('')

  useEffect(()=>{

    const fetchData = async()=>{
      const DocRef = doc(db, "testimony" , 'Q3u8oeTlLsf6VNwTkug7')
      const data = await getDoc(DocRef)
      setTestimony(data.data())
      //setTestimony()

    
    }
    fetchData()

  },[])



  return (
    <div>
      
    </div>
  )
}
