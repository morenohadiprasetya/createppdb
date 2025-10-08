import React from "react";
 import { Profiler } from "react";
import andre from "../assets/image/K.jpg"
import Sidnav from "./sidnav";

function Profil() {
  return (

    <>
    <Sidnav/>
    <div className="p-15 mr-5 ml-50">
      <h2 className="text-3xl font-bold mb-6">Profil Pengguna</h2>

      <div className="bg-white shadow-lg rounded-lg p-6 flex items-center space-x-6">
        
        <img
          src={andre}
          alt=""
          className="w-32 h-32 rounded-full border ml-50 mr-50"
        />

        
        <div>
          <p className="text-2xl font-bold">Moreno Hadi Prasetya</p>
          <p className="text-gray-600">Tiktok:renz.mlbb_</p>
          <p className="text-gray-600">YT:fuad12nyapu</p>
          <p className="text-gray-600">ngebruk, semarang</p>
        </div>
      </div>

      
      <div className="mt-6 bg-gray-100 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">Tentang Saya</h3>
        <p className="text-gray-700 leading-relaxed">
          Saya adalah Baca selengkapnya.

        </p>
      </div>
      
    </div>
          </>
  );
}

export default Profil;