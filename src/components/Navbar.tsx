import  { useState } from 'react'

import { NavLink } from 'react-router-dom'
const Navbar = () => {

  const [open, setOpen] = useState(false);

  const linkBase = "px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200";
  const linkActive = "bg-gray-800 text-white";
  const linkInactive = "text-gray-300 hover:bg-gray-700 hover:text-white";

  return (
     <nav className="sticky inset-x-0 top-0 z-40 bg-gray-900 text-white shadow-lg border-b border-white/10">
      <div className="px-5 container flex h-16 items-center justify-between">
        <NavLink to="/" className="inline-flex items-center gap-2 text-lg font-extrabold tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
          <span>AutoSpot</span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Home</NavLink>
          <NavLink to="/catalogue" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Catalogue</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Contact</NavLink>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white/80 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M6.225 4.811 4.811 6.225 9.586 11 4.811 15.775l1.414 1.414L11 12.414l4.775 4.775 1.414-1.414L12.414 11l4.775-4.775-1.414-1.414L11 9.586 6.225 4.811Z"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6"><path d="M3 6h18v2H3V6Zm0 5h18v2H3v-2Zm0 5h18v2H3v-2Z"/></svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div id="mobile-menu" className={`${open ? "block" : "hidden"} md:hidden border-t border-white/10 bg-gray-900/95 backdrop-blur`}> 
        <div className="container py-2">
          <div className="flex flex-col py-2">
            <NavLink onClick={() => setOpen(false)} to="/" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/catalogue" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Catalogue</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>About</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={({ isActive }) => `${linkBase} ${isActive ? linkActive : linkInactive}`}>Contact</NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar