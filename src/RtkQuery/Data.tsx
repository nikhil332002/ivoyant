import React from 'react';
import { Product, useGetAllProductsQuery } from './ApiSlice';

const ProductsList: React.FC = () => {
  const { data, error, isLoading } = useGetAllProductsQuery();
    console.log(data);
  

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.toString()}</div>;

//   const products:Product[] | undefined = data?.map((product) =>{
//     return {
//       id: product.id,
//       title: product.title,
//       description: product.description,
//       price: product.price,
//     } as Product;  
//   })
//   console.log(products)

  return (
    <div>
      <h2>Products List</h2>
      <ul>
        {data?.map(user => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;