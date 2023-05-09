import * as React from 'react'
import {
  createBrowserRouter
} from 'react-router-dom'

import { MainLayout } from '../layouts/MainLayout'
import { AuthLayout } from '../layouts/AuthLayout'

const router = createBrowserRouter([
  
  {
    path: '/',
    element: <MainLayout />,
  },
  {
    path: '/auth',
    element: <AuthLayout />,
  },

])

export default router
