import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export interface album{
    
        userId:number,
        id: number,
        title: string
      
}

 export const api = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({baseUrl:"https://jsonplaceholder.typicode.com/"}),
    endpoints:(builder)=>({
        getUsers:builder.query<album[],void>({
            query:()=>"albums"
        }),
        postUser:builder.mutation({
                query:(postData)=>({
                url:"albums",
                method:"POST",
                body:postData
            })
        })
    })
})

export const {useGetUsersQuery,usePostUserMutation} = api;