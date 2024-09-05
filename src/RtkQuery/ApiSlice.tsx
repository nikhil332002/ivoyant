import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Product {
    id: number;
    name:string;
    email:string;
  }


export const productsApi= createApi({
    reducerPath:'productsApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://jsonplaceholder.typicode.com/'}),
    endpoints:(builder)=>({
        getAllProducts: builder.query<Product[],void>({
            query: () => "users",
        }),
        addProduct: builder.mutation<Product, Partial<Product>>({
            query: (newProduct) => ({
              url: "users",
              method: 'POST',
              body: newProduct,
            }),
          }),
    })
})

export const { useGetAllProductsQuery, useAddProductMutation } = productsApi;
