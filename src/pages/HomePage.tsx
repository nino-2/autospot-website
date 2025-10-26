import Features from '../components/Features'
import Services from '../components/Services'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
  const navigate = useNavigate()


   const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

  return (
    <>
    <Navbar/>
    <div className='w-full'>
       
      {/* Hero */}
       <section className="relative isolate overflow-hidden bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/auto-heroimg.jpg"
            alt="Cars in garage showroom"
            className="h-full w-full object-cover opacity-40"
          />
        </div>
        <div className="relative container mx-auto px-7 py-20 sm:py-28 min-h-[70vh] flex items-center">
          <div className="max-w-2xl">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-3 py-1 text-xs font-medium ring-1 ring-white/20">
                AutoSpot • New arrivals 2025
              </span>
              <h1 className="mt-4 text-4xl lg:text-6xl font-extrabold tracking-tight max-w-2xl">Find the best cars</h1>
              <p className="mt-4 text-base sm:text-lg text-gray-200 max-w-xl">
                Browse the latest models and trusted brands all in one place.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => navigate('/catalogue')}
                  className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900 cursor-pointer"
                >
                  <span className='flex items-center gap-2'>Explore Catalogue
                    <ArrowRight size={15} className=' text-white'/>
                  </span>
                  
                </button>
              </div>
              <p className="mt-6 text-xs text-gray-300">2000+ listings • 50+ brands • Updated daily</p>
            </div>

          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.div
        variants={fadeInUp}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}>
        <Features/>
      </motion.div>
     

      {/*Why Choose Us*/}
      <motion.div
        variants={fadeInUp}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.2 }}>
        <Services/>
      </motion.div>

    </div>
    <Footer/>
    </>
  )
}

export default HomePage