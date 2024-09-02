import React from 'react';
import GrandChild from './GrandChild';

interface User {
  name: string;
  age: number;
  email: string;
}

interface ChildProps {
  user: User;
}

const ChildComponent: React.FC<ChildProps> = ({ user }) => {

// const Address={
//   address:"abcd",
// }

  return (
    <div>
      <h2>User Details Child</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <GrandChild users={user} />
    </div>
  );
};

export default ChildComponent;