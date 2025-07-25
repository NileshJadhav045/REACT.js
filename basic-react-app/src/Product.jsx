import React from "react";
import Price from "./Price";
import "./Product.css"

export default function Product({ title, idx }) {
  let oldPrices = ["12,449", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "270"];
  let description = [
    ["9,000 DPI","5 Programmable buttons"],
    ["intuitive surface"," designed for iPad Pro"],
    ["designed for iPad Pro","intuitive surface"],
    ["wireless","optical orintation"],
  ];
  return (
    <div className="Product">
      <p>{title}</p>
      <p>{description[idx][0]}</p>
      <p>{description[idx][1]}</p>
      <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}></Price>
    </div>
  );
}
