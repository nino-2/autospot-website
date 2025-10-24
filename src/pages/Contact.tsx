import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import  Footer from '../components/Footer'

const Contact = () => {
    const [submitted, setSubmitted] = useState(false)
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);
        data.append('access_key', import.meta.env.VITE_YOUR_ACCESS_KEY_HERE)

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: data,
        });

        if (response.ok) {
          setSubmitted(true);
          form.reset();
          setTimeout(() => setSubmitted(false), 5000);
        }
        
        
    }
  return (
    <>
       <Navbar/>

       {/*Contact Us*/}
       <section className="container mx-auto px-5 py-10 sm:py-14">
      <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Contact Us</h1>
      <p className="mt-2 text-gray-600 max-w-2xl">Have a question or want to reach a seller? Send us a message and we’ll get back to you.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Form */}
        <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 text-white shadow">
          {submitted && (
            <div className="mb-4 rounded-md bg-green-500/10 text-green-300 border border-green-400/30 px-4 py-2 text-sm">
              Message sent successfully! We’ll be in touch shortly.
            </div>
          )}
          <form onSubmit={onSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm text-white/80">Name</label>
              <input id="name" name="name" required className="mt-1 w-full rounded-lg border border-white/10 bg-gray-900 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400" placeholder="Jane Doe" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-white/80">Email</label>
              <input id="email" name="email" type="email" required className="mt-1 w-full rounded-lg border border-white/10 bg-gray-900 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400" placeholder="jane@example.com" />
            </div>
            <div>
              <label htmlFor="type" className="block text-sm text-white/80">Inquiry Type (optional)</label>
              <select id="type" name="type" className="mt-1 w-full rounded-lg border border-white/10 bg-gray-900 px-3 py-2 text-sm text-white outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400">
                <option value="">Select a type…</option>
                <option>General</option>
                <option>Car Purchase</option>
                <option>Partnership</option>
              </select>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-white/80">Message</label>
              <textarea id="message" name="message" required rows={5} className="mt-1 w-full rounded-lg border border-white/10 bg-gray-900 px-3 py-2 text-sm text-white placeholder-white/40 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400" placeholder="How can we help?" />
            </div>
            <div>
              <button type="submit" className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer">
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact details */}
        <div className="bg-gray-800 rounded-2xl p-6 sm:p-8 text-white shadow">
          <h2 className="text-lg font-semibold">Get in touch</h2>
          <p className="mt-1 text-sm text-white/70">We’re here Monday–Friday, 9am–5pm.</p>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <span className="text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.1.37 2.28.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C11.3 21 3 12.7 3 3a1 1 0 0 1 1-1h2.49a1 1 0 0 1 1 1c0 1.3.2 2.48.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2Z"/></svg>
              </span>
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2Zm0 4.25-8 5-8-5V18a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8.25Z"/></svg>
              </span>
              <span>support@autospot.example</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-white/60">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2a8 8 0 0 0-8 8c0 7 8 12 8 12s8-5 8-12a8 8 0 0 0-8-8Zm0 10.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"/></svg>
              </span>
              <span>123 Auto Ave, Motor City, USA</span>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-4 text-white/80">
            <a href="#" aria-label="Twitter" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M18.244 2.25h3.01l-6.583 7.52L22.5 21.75h-6.234l-4.873-6.372-5.576 6.372H2.807l7.05-8.053L1.5 2.25h6.422l4.403 5.813 5.919-5.813Zm-1.053 17.22h1.668L7.9 4.126H6.115l11.076 15.344Z"/></svg></a>
            <a href="#" aria-label="Instagram" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2.5A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5Zm5.25-.75a1 1 0 1 0-1-1 1 1 0 0 0 1 1Z"/></svg></a>
            <a href="#" aria-label="Facebook" className="hover:text-white"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M13.5 9H16l.5-3h-3V4.5c0-.86.18-1.5 1.5-1.5H16V0h-2.4C11.36 0 10 1.79 10 4.2V6H7v3h3v9h3V9Z"/></svg></a>
          </div>
        </div>
      </div>
    </section>
    {/*Footer*/}
    <Footer/>
    </>
  )
}

export default Contact