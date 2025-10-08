import { useState } from "react";
import { Link } from "react-router-dom";

function Sidnav() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`fixed top-0 left-0 h-full w-60 bg-gray-800 text-white z-50
      transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "-translate-x-full"}
      md:translate-x-0`}>
      
      <div className="text-2xl font-bold mb-8 text-center pt-4">Binus</div>

      <nav className="space-y-3 px-3">
        <Link to="/td" className="block py-2 px-3 rounded hover:bg-blue-600">Dashboard</Link>
        <Link to="/tambahdata" className="block py-2 px-3 rounded hover:bg-blue-600">Tabeldata</Link>
        <Link to="/propil" className="block py-2 px-3 rounded hover:bg-blue-600">Profile</Link>
      </nav>
    </div>
  );
}

export default Sidnav;
