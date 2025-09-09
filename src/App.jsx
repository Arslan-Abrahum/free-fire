import React from 'react'
import Home from './components/Home'
import SuccessfulUC from './components/SuccessfulUC'
import FailedUC from './components/FailUC'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './components/Login'

function App() {
  return (
    <div>

      <BrowserRouter>

        <Routes>

          <Route path='/' element={<Login />} />
          <Route path='/homepage' element={<Home />} />
          <Route path='/homepage/successfulfreefire' element={<SuccessfulUC />} />
          <Route path='/homepage/failedfreefires' element={<FailedUC />} />

        </Routes>

      </BrowserRouter>

    </div>
  )
}

export default App
