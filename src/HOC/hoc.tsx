import React, { ComponentType } from 'react';

// Higher-Order Component to check if user is authenticated
const withAuth=(WrappedComponent: ComponentType, isAuthenticated: boolean)=>{
  return () => {
    if (!isAuthenticated) {
      return <div>Please log in to view this page.</div>;
    }

    return <WrappedComponent />;
  };
}
export default withAuth;