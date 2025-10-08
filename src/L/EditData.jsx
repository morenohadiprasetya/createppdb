import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function EditData() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    barang: "",
    pesanan: "",
    harga: "",
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/menu/${id}`);
        if (res.data) {
          const data = Array.isArray(res.data) ? res.data[0] : res.data;
          setFormData({
            barang: data.barang || "",
            pesanan: data.pesanan || "",
            harga: data.harga || "",
          });
        }
      } catch (err) {
        console.error("Gagal mengambil data:", err);
        alert("Gagal mengambil data!");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    } else {
      alert("ID tidak ditemukan di URL!");
      navigate("/ed");
    }
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi sederhana
    if (!formData.barang || !formData.pesanan || !formData.harga) {
      alert("Semua field harus diisi!");
      return;
    }

    if (parseFloat(formData.harga) <= 0) {
      alert("Harga harus lebih dari 0!");
      return;
    }

    try {
      await axios.put(`http://localhost:5000/menu/${id}`, formData);
      alert("Data berhasil diubah!");
      navigate("/tabeldata");
    } catch (err) {
      console.error("Gagal mengupdate data:", err);
      alert("Gagal mengupdate data!");
    }
  };

  if (loading) {
    return <p className="text-center mt-10">Loading data...</p>;
  }

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Edit Data</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <div className="mb-4">
          <label htmlFor="barang" className="block mb-2 font-bold text-sm text-gray-700">
            Barang
          </label>
          <input
            type="text"
            id="barang"
            name="barang"
            value={formData.barang}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="pesanan" className="block mb-2 font-bold text-sm text-gray-700">
            Pesanan
          </label>
          <input
            type="text"
            id="pesanan"
            name="pesanan"
            value={formData.pesanan}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="harga" className="block mb-2 font-bold text-sm text-gray-700">
            Harga
          </label>
          <input
            type="number"
            id="harga"
            name="harga"
            value={formData.harga}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
            min="1"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
        >
          Simpan
        </button>

        <div className="mt-4 text-center">
          <Link to="/tabeldata" className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
            Kembali
          </Link>
        </div>
      </form>
    </div>
  );
}

export default EditData;
