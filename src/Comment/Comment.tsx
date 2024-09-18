// src/features/comments/Comment.tsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editComment, deleteComment, replyToComment } from './CommentsSlice';
import { Comment as CommentType } from './Types';
import { AppDispatch } from './store';

interface CommentProps {
  comment: CommentType;
}

const Comment: React.FC<CommentProps> = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(comment.text);
  const [replyText, setReplyText] = useState('');
  const [replay,setReplay] = useState(false);
  const dispatch: AppDispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editComment({ id: comment.id, newText }));
    }
    setIsEditing(!isEditing);
  };

  const handleDelete = () => {
    dispatch(deleteComment(comment.id));
  };

  const handleReplayToReplay=()=>{
        setReplay(!replay);
  }

  const handleReply = () => {
    if (replyText.trim()) {
      dispatch(replyToComment({ id: comment.id, text: replyText }));
      setReplyText('');
    }
  };

  return (
    <div style={{ marginLeft: `${comment.replies.length > 0 ? 20 : 0}px` }}>
      {isEditing ? (
        <textarea value={newText} onChange={(e) => setNewText(e.target.value)} />
      ) : (
        <p>{comment.text}</p>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={handleDelete}>Delete</button>
      <button onClick={handleReplayToReplay}>Replay</button>
      
      {
        replay && (
          <div>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Reply to this comment"
            />
            <button onClick={handleReply}>Send</button>
          </div>
        )
      }
      {comment.replies.length > 0 && (
        <ul>
          {comment.replies.map((reply) => (
            <li key={reply.id}>
              <Comment comment={reply} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Comment;
