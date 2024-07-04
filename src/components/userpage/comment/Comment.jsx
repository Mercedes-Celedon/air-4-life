import React from 'react';
import "./comment.scss"

const Comment = ({ comment, onCommentChange }) => {
  return (
    <div className='comments'>
      <div className='commentLabel'>
      <label>Comentario:</label>
      </div>
      <div className='commentArea'>
      <textarea value={comment} onChange={(e) => onCommentChange(e.target.value)} />
      </div>
    </div>

  );
};

export default Comment;