import React from 'react'
import './Post.css'


export default function Post({data, num}) {

 

  return (
    <div className='postDiv'>

      <div className='postHeader'>
          <h1>#{num} {data.title}</h1>
      </div> 

      <div className='postTextContainer'>
        {data.post}
      </div>
      <div className='postInfo'>
        {data.location ? <div>Location: {data.location} </div> : null }  
        {data.date ? <div> Date: {data.date} </div>: null }
      </div>


    </div>
    
  )
}
