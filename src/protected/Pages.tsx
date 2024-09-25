import { Link, Navigate, useNavigate } from "react-router-dom";
import { Button, Card } from 'antd';


const isAuthenticated = (): boolean => {
  return localStorage.getItem('isAuthenticated') === 'true';
};

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    localStorage.setItem('isAuthenticated', 'true');
    navigate('/dashboard'); 
  };

    return( 
    <div style={{marginTop:'100px'}} >
      <Card title="Login Page" style={{ width: 200,margin:'auto',textAlign:'center',borderColor:'black'}} headStyle={{ borderBottomColor: 'black' }}>
      <p>Please Login to access the Dashboard</p>
      <Button onClick={handleLogin}>Login</Button>
      </Card>
    </div>
    );
  };
  
  // Dashboard Component (Protected)
export const DashboardProtected: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    navigate('/'); 
  };
    return (
      <div style={{marginTop:'100px'}}>
        <Card title="Dashboard" style={{width:200,margin:'auto',textAlign:'center',borderColor:'black'}} headStyle={{ borderBottomColor: 'black' }}>
          <p>Welcome to Dashboard!</p>
          <Button onClick={handleLogout}>Logout</Button>
        </Card>
      </div>
    )
    
  };
  interface ProtectedRouteProps {
    children: React.ReactNode;
  }
  
  export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    return isAuthenticated() ? <>{children}</> : <Navigate to="/login" />;
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