import React from "react";
import { useState } from "react";
import "./Comments.css";
import CommentsForm from "./CommentsForm";

export default function Comments() {
  let [comments, setComments] = useState([
    {
      username: "@nile",
      remarks: "great job",
      rating: 4,
    },
  ]);

  let newComment = (comment) => {
    setComments((currComment) => [...currComment, comment]);
  };

  return (
    <>
      <div>
        <h3>All comments</h3>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>{comment.remarks}</span>
            &nbsp;
            <span>(rating = {comment.rating})</span>
            <p>- {comment.username}</p>
          </div>
        ))}
        ;
      </div>
      <hr />
      <CommentsForm newComment={newComment}></CommentsForm>
    </>
  );
}
