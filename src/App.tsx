// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Login  from "./pages/login-page/Login";
import Home from "./pages/authenticated/home/Home";
import Dashboard from "./pages/authenticated/dashboard/Dashboard";
function App() {
  const logged_in = !false;


  if (logged_in) {
    return (
      <>

      <BrowserRouter>
        <Routes>
          <Route path="/authenticated" element={Home()}>
            <Route index element={Dashboard()}/>
            <Route path="calendar" element={<h1>Contact</h1>}/>
            <Route path="calendar" element={<h1>Contact</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </>
    )
  } else {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route index element={Login()}/>
        </Routes>
      </BrowserRouter>
      </>
    )
  }
}

export default App
