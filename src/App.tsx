// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Login  from "./pages/login-page/Login";
import Home from "./pages/authenticated/home/Home";
import Dashboard from "./pages/authenticated/dashboard/Dashboard";
import Projects from "./pages/authenticated/projects/Projects";
import Organization from "./pages/authenticated/organization/Organization";
import Notebook from "./pages/authenticated/notebook/Notebook";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/authenticated" element={Home()}>
          <Route index element={Dashboard()}/>
          <Route path="calendar" element={<h1>Contact</h1>}/>
          <Route path="project" element={Projects()}/>
          <Route path="organization" element={Organization()}/>
          <Route path="notebook" element={Notebook()}/>
        </Route>
        <Route index element={Login()}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App



//@note USE ENCRYPTION FOR THE PARAMETERS IN THE URL FOR DIFFERENT IDS (USE ENV)