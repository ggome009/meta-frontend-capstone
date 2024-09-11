import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import Booking from './pages/Booking/Booking.jsx'
import ConfirmedBooking from './pages/ConfirmedBooking/ConfirmedBooking.jsx'
import UnderConstruction from './pages/UnderConstruction/UnderConstruction.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "booking",
    element: <Booking/>
  },
  {
    path: "booking-confirmation",
    element: <ConfirmedBooking/>
  },
  {
    path: "under-construction",
    element: <UnderConstruction/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
