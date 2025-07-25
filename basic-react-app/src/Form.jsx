import React from 'react'

export default function Form() {
  return (
    <div>
        <form action="" onSubmit={handleFormSubmit}>
            <input type="text" placeholder='write something'/>
            <button >Submit</button>
        </form>
    </div>
  )
}

function handleFormSubmit(event){
    event.preventDefault();
    console.log("form was submitted");
    
}
