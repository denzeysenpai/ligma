// import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import  Login  from "./pages/login-page/Login";
function App() {
  const logged_in = !false;


  if (logged_in) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/authenticated" element={<h1>Home</h1>}>
            <Route index element={<h1>About</h1>}/>
            <Route path="contact" element={<h1>Contact</h1>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    )
  } else {
    return (
      <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />}/>
        </Routes>
      </BrowserRouter>
      </>
    )
  }
}

export default App
