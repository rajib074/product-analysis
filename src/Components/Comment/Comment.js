import React, { useEffect, useState } from 'react';
import CommentList from './CommentList/CommentList';

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
            {
                comments.map(comment => <CommentList
                    key={comment.id}
                    comment={comment}
                ></CommentList>) 
            }        
           

            
        </div>
    );
};

export default Comment;