import React, { useEffect, useState } from "react";

const useComment = () => {
    const [comments, setComments] = useState([])
  
  useEffect(() => {
    fetch("comment.json")
      .then((response) => response.json())
      .then((json) => setComments(json));
  },[]);
  return [comments, setComments];
}

export default useComment;
