import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function TabelData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/menu")
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Tabel Data</h1>
      <Link to="/tambahdata" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Tambah Data</Link>

      <table className="min-w-full mt-4 bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Barang</th>
            <th className="py-2 px-4 border">Pesanan</th>
            <th className="py-2 px-4 border">Harga</th>
            <th className="py-2 px-4 border">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="py-2 px-4 border">{item.barang}</td>
              <td className="py-2 px-4 border">{item.pesanan}</td>
              <td className="py-2 px-4 border">{item.harga}</td>
              <td className="py-2 px-4 border">
                <Link to={`/edit/${item.id}`} className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TabelData;
