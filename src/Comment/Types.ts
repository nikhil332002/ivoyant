export interface Comment {
    id: number;
    text: string;
    replies: Comment[];
  }
  
  export interface CommentsState {
    comments: Comment[];
  }