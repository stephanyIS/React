import React from "react";
import {
    Routes,
    Route,
    Navigate
  } from "react-router-dom";

import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
  return (
    <div>
        <NavBar />
        <br />
        <div className="container">
          <Routes>
             <Route path="/about" element={<AboutScreen />} />
             <Route path="/login" element={<LoginScreen />} />
             <Route path="/" element={<HomeScreen />} />
             {/* Default*/ }
             {/* <Route  path="*" element={<HomeScreen />} /> */}
             <Route  path="*" element={<Navigate replace to="/" />} />    
          </Routes>
        </div>
        
    </div>
 )
}
