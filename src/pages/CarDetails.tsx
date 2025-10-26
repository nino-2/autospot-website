import  { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

type Car = {
  id: number;
  brand: string;
  model: string;
  price: number; 
  year: number;
  transmission: string;
  engine: string;
  mileage: string;
  fuel: string;
  images: string[];
};

const CarDetails = () => {

    const SAMPLE_CARS : Car[] = [
    {
    id: 1,
    brand: "Tesla",
    model: "Model 3",
    price: 12500000,
    year: 2024,
    transmission: "Automatic",
    engine: "Electric",
    mileage: "0 km",
    fuel: "Electric",
    images: [
      "https://images.unsplash.com/photo-1511396275270-0c6f6d07add2?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1541348263662-e068662d82af?q=80&w=1600&auto=format&fit=crop",
    ],
  },
  {
    id: 8,
    brand: "Ford",
    model: "Mustang",
    price: 18500000,
    year: 2022,
    transmission: "Manual",
    engine: "5.0L V8",
    mileage: "12,500 km",
    fuel: "Petrol",
    images: [
      "https://images.unsplash.com/photo-1516893842880-5fdf31b2e984?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1600&auto=format&fit=crop",
    ],
  },
    ]

    const formatNGN = new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
    });

    const params = useParams<{ id: string }>();
  const id = Number(params.id);

  const car = useMemo(() => SAMPLE_CARS.find((c) => c.id === id) ?? SAMPLE_CARS[0], [id]);

    const [current, setCurrent] = useState(0)
  return (
    <>
      <div className="w-full">
      {/* Hero banner */}
      <section className="relative h-64 sm:h-80 lg:h-96 bg-gray-200">
        <img
          src={car.images[current]}
          alt={`${car.brand} ${car.model}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </section>

      {/* Content */}
      <section className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Gallery left */}
          <div>
            <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">
              <div className="aspect-[16/10]">
                <img src={car.images[current]} alt={`${car.brand} ${car.model} view`} className="h-full w-full object-cover" />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-3 gap-3">
              {car.images.map((src, idx) => (
                <button
                  key={src}
                  aria-label={`Thumbnail ${idx + 1}`}
                  onClick={() => setCurrent(idx)}
                  className={`overflow-hidden rounded-xl border ${idx === current ? "ring-2 ring-blue-500" : "border-gray-200"}`}
                >
                  <img src={src} alt="thumbnail" className="aspect-[16/10] w-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Specs right */}
          <div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900">
                {car.brand} {car.model}
              </h1>
              <p className="mt-2 text-blue-600 text-xl font-semibold">{formatNGN.format(car.price)}</p>

              <dl className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div className="rounded-lg bg-gray-50 p-3">
                  <dt className="text-gray-500">Year</dt>
                  <dd className="font-medium text-gray-900">{car.year}</dd>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <dt className="text-gray-500">Transmission</dt>
                  <dd className="font-medium text-gray-900">{car.transmission}</dd>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <dt className="text-gray-500">Engine</dt>
                  <dd className="font-medium text-gray-900">{car.engine}</dd>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <dt className="text-gray-500">Mileage</dt>
                  <dd className="font-medium text-gray-900">{car.mileage}</dd>
                </div>
                <div className="rounded-lg bg-gray-50 p-3">
                  <dt className="text-gray-500">Fuel</dt>
                  <dd className="font-medium text-gray-900">{car.fuel}</dd>
                </div>
              </dl>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                  Contact Seller
                </Link>
                <Link
                  to="/catalogue"
                  className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Back to Catalogue
                </Link>
              </div>
            </div>
          </div>
         </div>
        </section>
      </div>
    </>
  )
}

export default CarDetails