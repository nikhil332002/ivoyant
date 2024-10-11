
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = import.meta.env.VITE_BASE_URL;
// console.log(apiKey);

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl}),
    endpoints: (builder) => ({
        getWeather: builder.query<any, string>({
            query: (district) => `weather?q=${district}&appid=${apiKey}&units=metric`,
        }),
    }),
});

export const { useGetWeatherQuery } = weatherApi;
