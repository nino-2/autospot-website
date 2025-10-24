import React, { useMemo, useState } from 'react'
import CarCard from '../components/CarCard';
import type { Car} from '../types'
import Navbar from '../components/Navbar';
import  Footer from '../components/Footer';
import { BASE_CARS } from '../data/cars';
const Catalogue = () => {

    const ALL_CARS: Car[] = BASE_CARS
 

const [query, setQuery] = useState("");
  const [brand, setBrand] = useState("All");
  const [year, setYear] = useState("All");
  const [price, setPrice] = useState("All");
  const [visible, setVisible] = useState(12);

  const uniqueBrands = useMemo(() => Array.from(new Set(ALL_CARS.map((c) => c.brand))).sort(), []);
  const uniqueYears = useMemo(() => Array.from(new Set(ALL_CARS.map((c) => c.year))).sort((a, b) => b - a), []);

  function priceInRange(value: number, bucket: string) {
    switch (bucket) {
      case "Under 25k":
        return value < 25000;
      case "25k - 50k":
        return value >= 25000 && value <= 50000;
      case "50k - 80k":
        return value > 50000 && value <= 80000;
      case "Over 80k":
        return value > 80000;
      default:
        return true;
    }
  }


    const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_CARS.filter((c) =>
      (q === "" || `${c.brand} ${c.model}`.toLowerCase().includes(q)) &&
      (brand === "All" || c.brand === brand) &&
      (year === "All" || c.year === Number(year)) &&
      priceInRange(c.price, price)
    );
  }, [query, brand, year, price]);

  const toShow = filtered.slice(0, visible);
  const canLoadMore = visible < filtered.length;
  return (

    <>
    <Navbar/>
    <section className="container mx-auto px-5 py-8 sm:py-10">
      <div className="mb-6 sm:mb-8 flex flex-col gap-3 sm:gap-4">
        <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">Catalogue</h1>
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <div className="relative flex-1 min-w-[220px]">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by model or brand…"
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-400"
              aria-label="Search cars"
            />
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M10 2a8 8 0 1 0 5.293 14.293l4.207 4.207 1.414-1.414-4.207-4.207A8 8 0 0 0 10 2Zm0 2a6 6 0 1 1 0 12A6 6 0 0 1 10 4Z"/></svg>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 sm:gap-4 w-full sm:w-auto sm:min-w-[420px]">
            <select value={brand} onChange={(e) => setBrand(e.target.value)} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400" aria-label="Filter by brand">
              <option>All</option>
              {uniqueBrands.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
            <select value={year} onChange={(e) => setYear(e.target.value)} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400" aria-label="Filter by year">
              <option>All</option>
              {uniqueYears.map((y) => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            <select value={price} onChange={(e) => setPrice(e.target.value)} className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400" aria-label="Filter by price">
              <option>All</option>
              <option>Under 25k</option>
              <option>25k - 50k</option>
              <option>50k - 80k</option>
              <option>Over 80k</option>
            </select>
          </div>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-600">
          <p>{filtered.length} result{filtered.length !== 1 ? "s" : ""}</p>
          {(brand !== "All" || year !== "All" || price !== "All" || query) && (
            <button
              onClick={() => { setBrand("All"); setYear("All"); setPrice("All"); setQuery(""); setVisible(12); }}
              className="text-blue-600 hover:text-blue-700"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {toShow.length === 0 ? (
        <div className="rounded-xl border bg-white p-8 text-center text-gray-600">
          No results found. Try adjusting filters or your search.
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {toShow.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>

          {canLoadMore && (
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => setVisible((v) => v + 8)}
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              >
                Load more
              </button>
            </div>
          )}
        </>
      )}
    </section>
    <Footer/>
    </>
  )
}

export default Catalogue