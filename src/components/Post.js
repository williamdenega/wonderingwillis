import React from 'react'

export default function Post(post) {
  return (
    <div className='post'>

        <div className='postHeader'>
            <h1>{post.title}</h1>
        </div> 
        <div className='postTextContainer'>
            {post.post}
        </div>
        
        
    </div>
  )
}
