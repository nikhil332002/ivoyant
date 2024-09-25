import { Card, Flex } from 'antd';
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
    return (
        <div >
            <h1 style={{textAlign:'center'}}>Home Page</h1>
        <Flex gap="small" justify='center'>
        <Card title="Post 1" bordered={true} style={{ width: 200, borderColor:'black',textAlign:'center' }}>
            <Link to="/post/1">Post 1</Link>
        </Card>
        <Card title="Post 2" bordered={true} style={{ width: 200, borderColor:'black',textAlign:'center' }}>
            <Link to="/post/2">Post 2</Link>
        </Card>
        </Flex>
        </div>
    );
  };
  export default HomePage;