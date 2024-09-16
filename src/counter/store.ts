import { configureStore } from '@reduxjs/toolkit';
import CounterSlice from './CounterSlice';
import { api } from '../services/Api';

export const store = configureStore({
    reducer:{
        counter:CounterSlice,
        [api.reducerPath]:api.reducer
        
    },
    middleware:(middle)=>middle().concat(api.middleware)
   
    
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchState = typeof store.dispatch;
