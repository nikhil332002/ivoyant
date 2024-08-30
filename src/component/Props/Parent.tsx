import React from 'react';
import Child from './Child';


const Parent: React.FC = () => {
  const user = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <Child user={user} />
    </div>
  );
};

export default Parent;