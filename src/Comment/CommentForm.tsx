
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from './CommentsSlice';
import { AppDispatch } from './store';

const CommentForm: React.FC = () => {
  const [text, setText] = useState('');
  const dispatch: AppDispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch(addComment(text));
      setText(''); // Clear the input field
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your comment"
      />
      <button type="submit">Add Comment</button>
    </form>
  );
};

export default CommentForm;
