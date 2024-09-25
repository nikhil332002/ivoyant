import { Link, Outlet } from "react-router-dom";

const Dashboard: React.FC = () => {
    return (
      <div>
        <h1>Dashboard</h1>
        <nav>
          <Link to="overview">Overview</Link> |{" "}
          <Link to="settings">Settings</Link> |{" "}
          <Link to="profile">Profile</Link>
        </nav>
        <Outlet />
      </div>
    );
  };
  export default Dashboard;