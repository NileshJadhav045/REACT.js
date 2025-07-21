import React from 'react'

export default function MsgBox({username, textColor}) {
    // let styles={color: textColor};
  return (
   <h1 style={{color: textColor}}>Hello, {username}</h1>
  )
}
