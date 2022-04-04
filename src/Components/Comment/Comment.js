import React, { useEffect, useState } from 'react';

const Comment = () => {
    const [comments, setComments] = useState([])
 

    useEffect(()=>{
        fetch('comment.json')
        .then(res=>res.json())
        .then(data=>setComments(data));
    },[])
    return (
        <div>
            <h2>This     comment   ber</h2>            
            <h1>id: {comments.id}</h1>
            <h1>Name:{comments.name}</h1>
           {
              <p>name: {comments.length}</p>
           }
            
        </div>
    );
};

export default Comment;