// src/features/comments/commentsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Comment, CommentsState } from './Types';

const initialState: CommentsState = {
  comments: [],
};

const findCommentById = (comments: Comment[], id: number): Comment | undefined => {
  for (const comment of comments) {
    if (comment.id === id) return comment;
    const reply = findCommentById(comment.replies, id);
    if (reply) return reply;
  }
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    addComment: (state, action: PayloadAction<string>) => {
      const newComment: Comment = {
        id: state.comments.length + 1,
        text: action.payload,
        replies: [],
      };
      state.comments.push(newComment);
    },
    editComment: (state, action: PayloadAction<{ id: number; newText: string }>) => {
      const { id, newText } = action.payload;
      const comment = findCommentById(state.comments, id);
      if (comment) {
        comment.text = newText;
      }
    },
    deleteComment: (state, action: PayloadAction<number>) => {
      const deleteRecursively = (comments: Comment[], id: number): boolean => {
        const index = comments.findIndex(comment => comment.id === id);
        if (index !== -1) {
          comments.splice(index, 1);
          return true;
        }
        return comments.some(comment => deleteRecursively(comment.replies, id));
      };
      deleteRecursively(state.comments, action.payload);
    },
    replyToComment: (state, action: PayloadAction<{ id: number; text: string }>) => {
      const { id, text } = action.payload;
      const comment = findCommentById(state.comments, id);
      if (comment) {
        const newReply: Comment = {
          id: state.comments.length + 1 + Math.random(),
          text,
          replies: [],
        };
        comment.replies.push(newReply);
      }
    },
  },
});

export const { addComment, editComment, deleteComment, replyToComment } = commentsSlice.actions;

export default commentsSlice.reducer;
