import React from 'react'
import moment from 'moment'


export default function Post({data}) {

  var date = moment().format('hh:mm:ss a MM-DD-YYYY');

  return (
    <div className='post'>

      <div className='postHeader'>
          <h1>{data.title}</h1>
      </div> 

      <div className='postTextContainer'>
        {data.post}
      </div>

    <p> {data.time}</p>

    </div>
    
  )
}
