import { Link } from "react-router-dom";
import { Card } from 'antd';



export const LoginPage: React.FC = () => {
    return( 
    <div style={{marginTop:'100px'}} >
      <Card title="Login Page" style={{ width: 200,margin:'auto',textAlign:'center',borderColor:'black'}}>
      <p>Please Login</p>
      </Card>
    </div>
    );
  };
  
  // Dashboard Component (Protected)
export const DashboardProtected: React.FC = () => {
    return (
      <div style={{marginTop:'100px'}}>
        <Card title="Dashboard" style={{width:200,margin:'auto',textAlign:'center',borderColor:'black'}}>
          <p>Welcome!</p>
        </Card>
      </div>
    )
    
  };
  
  // Home Component
export const HomePageProtected: React.FC = () => {
    return (
      <div style={{textAlign:'center'}}>
        <h1>Home Page</h1>
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
    );
  };