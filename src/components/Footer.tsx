import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
        <footer className="bg-gray-900 text-white/80 border-t border-white/10">
      <div className="container py-10 px-5 grid gap-8 sm:grid-cols-3 items-start">
        <div className="space-y-3">
          <NavLink to="/" className="inline-flex items-center gap-2 text-white">
            <span className="inline-block h-2 w-2 rounded-full bg-blue-500" aria-hidden="true" />
            <span className="text-lg font-extrabold tracking-tight">AutoSpot</span>
          </NavLink>
          <p className="text-sm text-white/60 max-w-xs">Browse the latest models and trusted brands all in one place.</p>
        </div>

        <nav className="space-y-2">
          <div className="text-xs uppercase tracking-wide text-white/50">Links</div>
          <ul className="flex flex-col gap-2">
            <li><NavLink to="/" className="hover:text-white">Home</NavLink></li>
            <li><NavLink to="/catalogue" className="hover:text-white">Catalogue</NavLink></li>
            <li><NavLink to="/contact" className="hover:text-white">Contact</NavLink></li>
          </ul>
        </nav>

        <div className="space-y-2">
          <div className="text-xs uppercase tracking-wide text-white/50">Follow</div>
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Twitter" className="hover:text-white" title="Twitter">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M18.244 2.25h3.01l-6.583 7.52L22.5 21.75h-6.234l-4.873-6.372-5.576 6.372H2.807l7.05-8.053L1.5 2.25h6.422l4.403 5.813 5.919-5.813Zm-1.053 17.22h1.668L7.9 4.126H6.115l11.076 15.344Z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-white" title="Instagram">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5Zm5.25-.75a1 1 0 1 0-1-1 1 1 0 0 0 1 1Z"/></svg>
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-white" title="Facebook">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M13.5 9H16l.5-3h-3V4.5c0-.86.18-1.5 1.5-1.5H16V0h-2.4C11.36 0 10 1.79 10 4.2V6H7v3h3v9h3V9Z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container py-6 text-center text-xs text-white/60">
          © 2025 AutoSpot. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer