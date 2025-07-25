import React from "react";

export default function Button() {
  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
      <p onMouseOver={handleOverMouse}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem ipsa
        assumenda corrupti hic fuga doloremque exercitationem possimus
        perferendis nesciunt voluptates, repellat, commodi officia laudantium,
        est qui obcaecati corporis vero libero!
      </p>
      <button onDoubleClick={DblClick}>Click me</button>
    </div>
  );
}

function handleClick() {
  console.log("Hello");
}

function handleOverMouse() {
  console.log("Bye");
}

function DblClick() {
  console.log("Double Click");
}
