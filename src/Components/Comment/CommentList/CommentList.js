import React from "react";
import "./CommentList.css";

const CommentList = ({ comment }) => {
  const { name, content, picture } = comment;
  return (
    <div className="content-area">
      <div className="content-info">
        <img src={picture} alt="" />
        <h3>{name}</h3>
      </div>
      <p> <small> {content}</small></p>
    </div>
  );
};

export default CommentList;
