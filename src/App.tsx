import React from 'react'
import './App.css'
import { Link } from "react-router-dom"
import { Routes, Route } from "react-router-dom"
import Register from './Components/Auth/Register'
import Login from './Components/Auth/Login'
// import Logout from './Components/Auth/Logout'
import { RequireAuth } from './Components/Auth/AuthProvider'
import Layout from "./Components/Layout/Layout"

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route 
          path="profile" 
          element={
            <RequireAuth>
              <div>I'm protected</div>
            </RequireAuth>
          }
        />
      </Routes>
    </Layout>
  )
}

export default App
