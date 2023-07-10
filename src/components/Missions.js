import React from 'react'

export default function Missions() {

  const divStyle = {
    width:'50%',
    maxwidth:'660px',
    overflow:'hidden',
    background:'transparent',
    justifyContent:'center', 
    alignItems:'center',
    display: "block",
  }

  return (
    <div style={{display: "block",  justifyContent:'center', alignItems:'center'}}>
      <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" style={divStyle}  sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/1-000-names/1588784757?i=1588784988" title="myFrame3"></iframe>
      <br></br>
      <iframe allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write" frameborder="0" height="175" style={divStyle} sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src="https://embed.music.apple.com/us/album/pride-of-a-father-live/1579121327?i=1579121624" title="myFrame2"></iframe>
    </div>
  )
}
