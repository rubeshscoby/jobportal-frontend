import { useState } from 'react'

import './App.css'
import RegisterPage from './RegisterPage'
import LoginPage from './LoginPage'
import JobListPage from './JobListPage'
import ApplyJobPage from './ApplyJobPage'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate replace to='/login' />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/jobs' element={<JobListPage />} />
        <Route path='/apply/:jobId' element={<ApplyJobPage />} />
        <Route path='*' element={<Navigate replace to='/login' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
