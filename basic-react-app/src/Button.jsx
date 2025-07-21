import React from 'react'

export default function Button() {
  return (
    <div>
        <button onClick={printHello}>Click Me</button>
    </div>
  )
}

function printHello() {
    console.log("Hello");
}
