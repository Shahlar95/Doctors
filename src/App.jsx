
import React from 'react'
import Home from './pages/Home/Home'
import { Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout/Layout'
import Car from './components/Car/Car'
import Time from './components/ui/Time/Time'
import './App.css'
import DoctorsAbout from './pages/DoctorsAbout/DoctorsAbout'


function App() {
  

  return (
    <>
     {/* <Home/> */}
     <Routes>
      <Route path='/'  element={<Layout/>}>
        <Route index element = {<Home/>}/>
        <Route path=':doctorId' element = {<DoctorsAbout/>}/>
        <Route path='car' element = {<Car/>}/>
        <Route path='time' element = {<Time/>}/>
      </Route>
     </Routes>
    </>
  )
}

export default App
