import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Students } from "../models/students.models";


export const studentApi = createApi({ 
    baseQuery:fetchBaseQuery({
        baseUrl: 'http://localhost:3000'        //db.json
    }),
    tagTypes:['Students'],  
    endpoints:(builder)=>({
        getStudents: builder.query<Students[],void>({
            query: () => '/students',
            providesTags:['Students'],
            transformResponse:(response:Students[])=>{      //To sort the details in alphabetical order
                return response.sort((a,b)=>
                a.studentName.localeCompare(b.studentName));
            },
        }),
        getStudent: builder.query<Students,string>({        //query<Students: type of response given from api, string: parameter given to query(id)>
            query: (id) => `/students/${id}`,
            providesTags:['Students'],
        }),
        addStudent: builder.mutation<void,Students>({
            query: (student)=>({
                url: '/students',
                method: 'POST',
                body: student,
            }),
            invalidatesTags:['Students'],   //Reloads the api
        }),
        deleteStudent: builder.mutation<void,string>({
            query: (id)=>({
                url: `/students/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags:['Students'],
        }),
        updateStudent: builder.mutation<void,Students>({
            query: ({id,...rest})=>({
                url: `/students/${id}`,
                method: 'PUT',
                body: rest,
            }),
            invalidatesTags:['Students'],
        }),
    })
})

export const {useGetStudentsQuery, useAddStudentMutation, useDeleteStudentMutation, useGetStudentQuery, useUpdateStudentMutation} = studentApi;