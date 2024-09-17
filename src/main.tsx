import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './practise-rtkq/store.ts'
// import { store } from './CRUD/store/store.ts'
// import { store } from './QueryMethods/store.tsx'
// import { store } from './RtkQuery/Store.tsx'
// import './index.css'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <Provider store={store}>
    <App />
    </Provider>

  // </StrictMode>,
)
