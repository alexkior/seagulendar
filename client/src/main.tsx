import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider
} from 'react-router-dom'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { store } from './redux/store'
import { Provider } from 'react-redux'

const queryClient = new QueryClient()

import { router } from './router'

import './scss/main.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
)
