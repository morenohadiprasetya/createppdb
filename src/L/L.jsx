import React from 'react'
import { useNavigate } from 'react-router-dom'   
import Test from "../assets/image/as.jpg"

const L = () => {
  const navigate = useNavigate(); 

  return (
    <div className="border bg-sky-500">
      <div className="text-center font-bold text-5xl">
        SMK
        <div className="text-center font-bold text-3xl mr-5">Bina Nusantara</div>
      </div>

      <div className="flex justify-center h-100 w-100 ml-119">
        <img src={Test} alt="vf" />
      </div>

      <div className="flex justify-center border h-20 mb-80 mr">
        <div className="border-1 mr-30 ">
          <h1>jurusan TKJ
            <p>jurusan tkj adalah</p>
          </h1>
        </div>
        <div className="flex justify-center border mr-30">
          <h1>JURUSAN TSM 
            <p>jurusan tkj adalah</p>
          </h1>
        </div>
        <div className="border mr-20">
          <h1>JURUSAN AKL
            <p>jurusan akl adalah</p>
          </h1>
        </div>
        <div className="border mr-20">
          <h1>JURUSAN DPB adalah</h1>
          <p>desain produksi dpb</p>
        </div>
      </div>

      {/* Button untuk pindah ke halaman Register */}
      <div className="flex justify-center mt-10">
        <button 
          onClick={() => navigate("/register")} 
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Daftar Sekarang
        </button>
      </div>
    </div>
  )
}

export default L
