import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavLink = ({ label, to }) => {
  const location = useLocation();
  const targetPath = typeof to === "string" ? to.split("#")[0] : to;
  const isActive = location.pathname === targetPath;

  return (
    <Link
      to={to}
      className={`relative transition group ${
        isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
      }`}
    >
      {label}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-blue-600 transition-all ${
          isActive ? "w-full" : "w-0 group-hover:w-full"
        }`}
      ></span>
    </Link>
  );
};

const Dropdown = ({ title, items }) => {
  const location = useLocation();

  const isActive = items.some(item => item.to.split("#")[0] === location.pathname);

  return (
    <div className="relative group">
      <button
        className={`flex items-center gap-1 transition ${
          isActive ? "text-blue-600 font-semibold" : "text-gray-700 hover:text-blue-600"
        }`}
      >
        {title}
        <span className="text-xs">▼</span>
      </button>

      <div className="absolute top-10 left-0 w-64 bg-white rounded-xl shadow-xl opacity-0 translate-y-2 invisible group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 z-50">
        {items.map((item, index) => {
          const activeItem = location.pathname + location.hash === item.to;

          return (
            <Link
              key={index}
              to={item.to}
              className={`block px-4 py-2 transition ${
                activeItem
                  ? "bg-blue-100 text-blue-600 font-medium"
                  : "hover:bg-blue-50"
              } ${index === 0 ? "rounded-t-xl" : ""} ${
                index === items.length - 1 ? "rounded-b-xl" : ""
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const servicesMenu = [
    { label: "Software Development", to: "/services#software" },
    { label: "Web Design & Development", to: "/services#web" },
    { label: "POS Systems", to: "/services#pos" },
    { label: "IT Services", to: "/services#it" },
    { label: "Penetration Testing", to: "/services#pentesting" },
    { label: "Systems Hardening", to: "/services#hardening" },
    { label: "Cybersecurity", to: "/services#cybersecurity" },
    { label: "Computer Accessories", to: "/services#accessories" },
    { label: "Computer Repair", to: "/services#repair" },
    { label: "IT Consulting", to: "/services#consulting" },
  ];




  return (
    <nav className="fixed w-full z-50 bg-white/70 backdrop-blur-lg shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">

          <Link to="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Logo" className="h-10" />
            <span className="font-bold text-xl text-gray-800">
              Nexoshield  Technology  Solutions
            </span>
          </Link>

      
          <div className="hidden md:flex items-center space-x-8">
            <NavLink label="Home" to="/#home" />

            <NavLink label="About" to="/about" />
            <Dropdown title="Services" items={servicesMenu} />
            <NavLink label="User Dashboard" to="/login" />
            <NavLink label="Contact" to="/contact" />
            
            <Link
              to="/booking"
              className="px-5 py-2 text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-half"
            >
              Book a Service
            </Link>
          </div>

  

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      <div className={`md:hidden bg-white/95 backdrop-blur-lg px-6 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[800px] py-4' : 'max-h-0'}`}>
        <div className="flex flex-col gap-2">
          <Link to="/#home" onClick={() => setIsOpen(false)} className="block py-2">Home</Link>

          <Link to="/about" onClick={() => setIsOpen(false)} className="py-2">About</Link>

          <details className="group">
            <summary className="py-2 cursor-pointer">Services</summary>
            <div className="pl-4 mt-2 flex flex-col gap-1">
              {servicesMenu.map((item, i) => (
                <Link key={i} to={item.to} onClick={() => setIsOpen(false)} className="py-1">{item.label}</Link>
              ))}
            </div>
          </details>

          <Link to="/contact" onClick={() => setIsOpen(false)} className="py-2">Contact</Link>

          <Link to="/login" onClick={() => setIsOpen(false)} className="py-2">User Dashboard</Link>
          

          <Link to="/booking" onClick={() => setIsOpen(false)} className="block w-half mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-2 rounded-half text-center">Book a Service</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;