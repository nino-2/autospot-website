

const Services = () => {
  return (
    <section className="bg-gray-50">
        <div className="container mx-auto px-7 py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Why Choose AutoSpot</h2>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm4.3 8.3-4.24 4.24a1 1 0 0 1-1.42 0L7.7 11.3a1 1 0 1 1 1.41-1.41l1.53 1.53 3.53-3.53A1 1 0 1 1 16.3 10.3Z"/></svg>
              </div>
              <h3 className="font-semibold">Verified Listings</h3>
              <p className="mt-1 text-sm text-gray-600">Every car is vetted to ensure quality and authenticity.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M12 1.5 3 6v6c0 5.25 4.2 9.45 9 10.5 4.8-1.05 9-5.25 9-10.5V6l-9-4.5Zm0 5.25 6 3.15V12c0 3.78-2.79 7.29-6 8.25C8.79 19.29 6 15.78 6 12V9.9l6-3.15Z"/></svg>
              </div>
              <h3 className="font-semibold">Best Deals</h3>
              <p className="mt-1 text-sm text-gray-600">Competitive prices and exclusive offers updated daily.</p>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600/10 text-blue-600">
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M16.5 3a4.5 4.5 0 0 1 4.47 4.01A3.75 3.75 0 0 1 21 15.75h-4.06A5.25 5.25 0 0 1 12 21a5.25 5.25 0 0 1-4.94-3.5H3A3 3 0 0 1 3 9h.03A4.5 4.5 0 1 1 7.5 6h9Z"/></svg>
              </div>
              <h3 className="font-semibold">Trusted Sellers</h3>
              <p className="mt-1 text-sm text-gray-600">Connect with verified dealers and private sellers.</p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Services