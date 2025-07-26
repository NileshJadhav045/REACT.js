import React from "react";
// import { useState } from "react";
import { useFormik } from "formik";

const validate = (values) => {
  const errors = {};
  if (!values.username) {
    errors.username = "username cannot be empty";
  }

  return errors;
};

export default function CommentsForm() {
  //   let [formData, setFormData] = useState({
  //     username: "",
  //     remarks: "",
  //     rating: 5,
  //   });

  const formik = useFormik({
    initialValues: {
      username: "",
      remarks: "",
      rating: "",
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //   let handleInputChange = (eve) => {
  //     setFormData((currData) => {
  //       return { ...currData, [eve.target.name]: eve.target.value };
  //     });
  //   };

  //   let handleSubmit = (eve) => {
  //     console.log(formData);
  //     newComment(formData)
  //     eve.preventDefault();
  //     setFormData({
  //         username: "",
  //         remarks:"",
  //         rating: 5
  //     })
  //   };

  return (
    <div>
      <h4>Give a comment</h4>
      <form action="" onSubmit={formik.handleSubmit}>
        <lable>username: </lable>
        <input
          type="text"
          placeholder="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          name="username"
        />
        {formik.errors.username ? (
          <p style={{ color: "red" }}>{formik.errors.username}</p>
        ) : null}
        <br /> <br />
        <lable>remarks: </lable>
        <textarea
          placeholder="Add new remarks"
          value={formik.remarks}
          onChange={formik.values.handleChange}
          name="remarks"
        ></textarea>
        <br />
        <lable>rating: </lable>
        <input
          type="number"
          placeholder="rating"
          min={1}
          max={5}
          value={formik.values.rating}
          onChange={formik.handleChange}
          name="rating"
        />
        <br />
        <button type="submit">Add Commetn</button>
      </form>
    </div>
  );
}
