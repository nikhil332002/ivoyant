
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// const apiKey = 'ffe6045af019031036d19edcb02e9781';
const apiKey = import.meta.env.VITE_API_KEY;
console.log(apiKey);

export const weatherApi = createApi({
    reducerPath: 'weatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.openweathermap.org/data/2.5/' }),
    endpoints: (builder) => ({
        getWeather: builder.query<any, string>({
            query: (district) => `weather?q=${district}&appid=${apiKey}&units=metric`,
        }),
    }),
});

export const { useGetWeatherQuery } = weatherApi;
