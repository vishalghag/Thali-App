import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Card from '../pages/Card'
import Home from '../pages/Home'
import routes from './action.json'

const PageRoute = () => {
  return (
    <>
    <Routes>
      <Route path={routes.HOME} element={<Home/>}/>
      <Route path={routes.CART} element={<Card/>}/>
    </Routes>
    </>
  )
}

export default PageRoute