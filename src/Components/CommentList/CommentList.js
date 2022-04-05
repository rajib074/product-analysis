import React from "react";
import "./CommentList.css";

const CommentList = ({ Comment }) => {
  const { name, content, picture, ratings } = Comment;
  return (
   
    <div className="grid-item">
      <img src={picture} alt="" />
      <h3>{name}</h3>
      <p>{content}</p>
      <span>Ratings : 
         {ratings}
      </span>
    </div>
  );
};

export default CommentList;


