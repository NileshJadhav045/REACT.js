import React from "react";

export default function Price({ oldPrice, newPrice }) {
  let styles = {
    textDecorationLine: "line-through",
  };
  let newStyle={
    fontWeight:"bold",
  }
  let bgStyle={
    backgroundColor:"#e0c357",
    height: "30px",
    width:"200px",
    borderBottomLeftRadius: "14px",
    borderBottomRightRadius: "14px",
  }
  return (
    <div style={bgStyle}>
      <span style={styles}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span style={newStyle}>{newPrice}</span>
    </div>
  );
}
