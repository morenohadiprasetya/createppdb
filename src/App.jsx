import { Routes, Route } from "react-router-dom"
import React from "react" 
import Register from "./L/Register";
import Login from "./L/Login";
import Tabel from "./L/L";
import Sidnav from "./L/sidnav";
import Profile from "./L/profile"
import EditData from "./L/EditData";
import TambahData from "./L/tambahdata";
const App = () => {
  
  return (
     <Routes>
      
      <Route path="/propil" element={<Profile/>}/>
      <Route path="/" element={<Tabel/>}/>
      <Route path="/Login" element={< Login/>}/>
         <Route path="/Sidnav" element={< Sidnav/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/td" element={<TambahData/>}/>
     </Routes>
  )
  }

export default App
