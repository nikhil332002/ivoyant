import withAuth from "./hoc";

const Dashboard: React.FC = () => {
    return <h1>Welcome to the Dashboard!</h1>;
  };
  

  export const DashboardWithAuth = withAuth(Dashboard, false); 
export default Dashboard;  