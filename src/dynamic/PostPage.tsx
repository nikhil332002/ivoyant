import { useParams } from "react-router-dom";

const PostPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
  
    return <h1>Displaying Post with ID: {id}</h1>;
  };
  export default PostPage;