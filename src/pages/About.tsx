import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const About = () => {
    const navigate = useNavigate()
  return (
    <>
    <Navbar/>

    {/*About Section*/}
    <section className="container mx-auto px-5 py-12 sm:py-16">
      <header className="max-w-3xl">
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">About AutoSpot</h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          AutoSpot helps you find verified car listings across Nigeria. We bring together trusted dealers and private sellers so you can compare options, discover deals, and buy with confidence.
        </p>
      </header>

      <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm0 5a1.5 1.5 0 1 1-1.5 1.5A1.5 1.5 0 0 1 12 7Zm2 9H10v-1a2 2 0 0 1 2-2 2 2 0 0 1 2 2v1Z"/></svg>
          </div>
          <h3 className="text-lg font-semibold">Our Story</h3>
          <p className="mt-1 text-sm text-gray-600">Started by car enthusiasts, AutoSpot simplifies the journey from browsing to buying, with transparency at every step.</p>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2 1 7l11 5 9-4.091V17h2V7L12 2Zm-1 14H6v2h5v4h2v-4h5v-2h-5v-4h-2v4Z"/></svg>
          </div>
          <h3 className="text-lg font-semibold">Mission</h3>
          <p className="mt-1 text-sm text-gray-600">Empower buyers with verified listings, clear pricing, and tools that make choosing the right car effortless.</p>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm3.54 5.46 1.41 1.41L11 14.83 7.05 10.88l1.41-1.41L11 12l4.54-4.54Z"/></svg>
          </div>
          <h3 className="text-lg font-semibold">Vision</h3>
          <p className="mt-1 text-sm text-gray-600">A trusted automotive marketplace where every listing is reliable and every purchase feels seamless.</p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl bg-blue-50 p-6 sm:p-8 ring-1 ring-blue-100">
        <h2 className="text-xl font-semibold text-gray-900">Milestones</h2>
        <ol className="mt-4 relative border-l border-blue-200 pl-6 space-y-6">
          <li className="text-sm text-gray-700">
            <span className="absolute -left-[9px] top-0 h-2.5 w-2.5 rounded-full bg-blue-500" />
            2023 — Idea conceived to make car buying more transparent.
          </li>
          <li className="text-sm text-gray-700">
            <span className="absolute -left-[9px] top-0 h-2.5 w-2.5 rounded-full bg-blue-500" />
            2024 — Partnered with verified dealers across major cities.
          </li>
          <li className="text-sm text-gray-700">
            <span className="absolute -left-[9px] top-0 h-2.5 w-2.5 rounded-full bg-blue-500" />
            2025 — Launching nationwide with thousands of listings.
          </li>
        </ol>
        <div className="mt-6">
          <button
           onClick={() => navigate('/catalogue')}
            className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <span className='flex items-center gap-2'>Explore Catalogue
                <ArrowRight size={15} className=' text-white'/>
            </span>
          </button>
        </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}

export default About