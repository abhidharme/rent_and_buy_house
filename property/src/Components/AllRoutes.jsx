import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { BookHome } from '../Pages/BookHome'
import { Home } from '../Pages/Home'

export const AllRoutes = () => {
  return (
    <div>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/bookhome' element={<BookHome/>} />
    </Routes>
    </div>
  )
}
