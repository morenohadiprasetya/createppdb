import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ambinus from "../assets/image/ambinus.jpg";  

const Tabel = () => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  let menuActive = show ? "left-0" : "-left-full";
  let scrollActive = scroll ? "py-6 bg-white shadow" : "py-4";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center">
       
      <div className={`navbar fixed w-full transition-all z-50 ${scrollActive}`}>
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="logo">
            <a
              href="#"
              className="bg-sky-400 px-5 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all"
            >
              Tentang Sekolah
            </a>
          </div>
        </div>

        <div className="flex justify-center mt-4">
          <ul
            className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0
              md:text-black md:p-0 md:m-0 md:transition-none gap-8 fixed ${menuActive} top-1/2 -translate-y-1/2 flex-col 
              px-8 py-6 rounded shadow-lg shadow-slate-300 bg-sky-400 font-bold text-white transition-all`}
          >
            <li><a href="#">Beranda</a></li>
            <li><a href="#">Tentang Kami</a></li>
            <li><a href="#">Jurusan</a></li>
          </ul>
        </div>
      </div>

    
      <div className="container mx-auto px-4 pt-36">
        
        <div className="hero grid md:grid-cols-2 items-center gap-16">
          <div>
            <h1 className="lg:text-5xl text-3xl font-bold">SMK BINANUSANTARA</h1>

            <div className="mt-10 border-2 rounded-lg p-5 mx-auto max-w-md">
              <img
                src={ambinus}
                alt="Binusa"
                className="w-full h-auto object-cover rounded-md"
              />
              <h1 className="border p-5 mt-4 rounded-lg text-justify">
                Penerimaan baca selengkapnya... Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Ipsam nobis accusantium quasi
                necessitatibus ab illo totam saepe corporis dolorem unde eligendi
                deserunt veritatis animi earum voluptate pariatur vel, sequi
                aliquid magnam iure veniam provident!
              </h1>
              <div className="p-3 text-center">
                <Link to="/login">
                  <div className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-10 rounded-lg transition-all">
                    Daftar Sekarang
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        
        <div className="border-2 mt-20 p-10 rounded-lg">
          <h2 className="text-center font-bold text-5xl mb-10">Jurusan</h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center">
            {[1, 2, 3, 4].map((_, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-[320px] hover:scale-105 transition-transform duration-300"
              >
                <h3 className="font-bold text-2xl text-center mb-3">DPB</h3>
                <p className="text-base text-justify text-gray-700 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quae asperiores architecto obcaecati, voluptatem nulla
                  delectus harum iure libero ut ab.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabel;
