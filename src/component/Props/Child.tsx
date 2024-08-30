import React from 'react';

interface User {
  name: string;
  age: number;
  email: string;
}

interface ChildProps {
  user: User;
}

const ChildComponent: React.FC<ChildProps> = ({ user }) => {
  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ChildComponent;