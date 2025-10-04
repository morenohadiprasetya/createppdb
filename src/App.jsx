import { Routes, Route } from "react-router-dom"
import React from "react"
import L from "./L/L"
import Register from "./L/register"
const App = () => {
  
  return (
     <Routes>
      <Route path="/L" element={<L/>}/>
      
      <Route path="/register" element={<Register/>}/>
     </Routes>
  )
  }

export default App
