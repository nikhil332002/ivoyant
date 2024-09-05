import React from 'react';
import { useGetUsersQuery } from './ApiSlice';


const UsersList: React.FC = () => {
  const { data: users, error, isLoading } = useGetUsersQuery();

  if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users?.map((user) => (
          <li key={user.id}>{user.name} ({user.email})</li>
        ))}
      </ul>
    </div>
  );
};

export default UsersList;


