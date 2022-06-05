import React from 'react';
import { Routes, Route,  BrowserRouter  } from 'react-router-dom';
import { Exercise2Screen } from '../components/exercise2/Exercise2Screen';
import { Exercise3Screen } from '../components/exercise3/Exercise3Screen';
import { Exercise4Screen } from '../components/exercise4/Exercise4Screen';
import { HomeScreen } from '../components/home/HomeScreen';
import { Navbar } from '../shared/Navbar';



export const DashboarRouter = () => {
  return (
    <BrowserRouter >
      <Navbar />
      <div className="container mt-4">
         <Routes>
            <Route path="exercise2" element={<Exercise2Screen />} />
            <Route path="exercise3" element={<Exercise3Screen />} />
            <Route path="exercise4" element={<Exercise4Screen />} />
            <Route path="/" element={<HomeScreen/>} />
         </Routes>
      </div>  
     </BrowserRouter>
  )
}
