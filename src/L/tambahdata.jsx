import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidnav from "./sidnav";

function TambahData() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    barang: "",
    pesanan: "",
    harga: "",
  });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/menu", formData);
      alert("Data berhasil ditambahkan!");
      navigate("/");
    } catch (err) {
      console.error(err);
      alert("Gagal menambahkan data!");
    }
  };

  return (
    <div>
      <h1 className="flex justify-center text-3xl font-bold mb-6">Tambah Data</h1>
      <form onSubmit={handleSubmit} className="flex justify-center bg-white p-6 rounded shadow-md max-w-lg">
        <input type="text" name="barang" placeholder="Barang" value={formData.barang} onChange={handleChange} className="w-full mb-3 border p-2 rounded" required />
        <input type="text" name="pesanan" placeholder="Pesanan" value={formData.pesanan} onChange={handleChange} className="w-full mb-3 border p-2 rounded" required />
        <input type="number" name="harga" placeholder="Harga" value={formData.harga} onChange={handleChange} className="w-full mb-3 border p-2 rounded" required />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Simpan</button>
      </form>
    </div>
  );
}

export default TambahData;
