import React from 'react';

const Comment = ({ comment, onCommentChange }) => {
  return (
    <div>
      <label>Comentario:</label>
      <textarea value={comment} onChange={(e) => onCommentChange(e.target.value)} />
    </div>
  );
};

export default Comment;