import React from 'react';
import { Routes, Route,  BrowserRouter  } from 'react-router-dom';
import { Exercise2Screen } from '../components/exercise2/Exercise2Screen';
import { Exercise3Screen } from '../components/exercise3/Exercise3Screen';
import { PlatformScreen } from '../components/exercise4/PlatformScreen';
import { ProjectsScreen } from '../components/exercise4/ProjectsScreen';
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
            <Route path="exercise4-platform" element={<PlatformScreen />} />
            <Route path="exercise4-projects" element={<ProjectsScreen />} />
            <Route path="/" element={<HomeScreen/>} />
         </Routes>
      </div>  
     </BrowserRouter>
  )
}
