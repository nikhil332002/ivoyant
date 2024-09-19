
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from './store';
import Comment from './Comment';

const CommentList: React.FC = () => {
  const comments = useSelector((state: RootState) => state.comments.comments);

  return (
    <ul>
      {comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))}
    </ul>
  );
};

export default CommentList;
