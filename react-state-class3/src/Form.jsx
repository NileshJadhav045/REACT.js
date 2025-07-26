import React from "react";
import { useState } from "react";

export default function Form() {
  //   let [fullName, setFullName] = useState("");
  //   let [username, setUsername] = useState("");

  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password:"",
  });

  //   let handelNameChange = (eve) => {
  //     setFullName(eve.target.value);
  //   };

  //    let handelUsername = (eve) => {
  //     setUsername(eve.target.value);
  //   };

  let handleInputChange = (eve) => {
    // let fieldName = eve.target.name;
    // let newValue = eve.target.value;
    setFormData((prevData) => {
      return { ...prevData, [eve.target.name] : eve.target.value};
    });
  };

  let handleSubmit = (eve) => {
    eve.preventDefault();
    setFormData({
      fullName: "",
      username: "",
      password: "",
    });
  };

  return (
    <div>
      <form>
        <label>Full Name:</label>
        <input
          type="text"
          onChange={handleInputChange}
          value={formData.fullName}
          name="fullName"
          id=""
          placeholder="Enter Your name"
        />
        <br />
        <label>Username:</label>
        <input
          type="text"
          onChange={handleInputChange}
          value={formData.username}
          id=""
          name="username"
          placeholder="Enter Your username"
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          onChange={handleInputChange}
          value={formData.password}
          id=""
          name="password"
          placeholder="Enter Your password"
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
