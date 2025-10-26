
import  type {  Car } from '../types';

interface CarCardProps {
    car: Car;
  }
const CarCard = ({car}:CarCardProps) => {
    




  const currency = new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
  return (
     <article className="group overflow-hidden rounded-xl border bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg ">
      <div className="aspect-[16/10] overflow-hidden">
        <img src={car.image} alt={`${car.brand} ${car.model}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105 " />
      </div>
      <div className="p-3 sm:p-4">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-gray-900 truncate">{car.brand} {car.model}</h3>
          <span className="shrink-0 rounded-full bg-blue-600/10 px-2 py-0.5 text-xs font-medium text-blue-700">{car.year}</span>
        </div>
        <p className="mt-1 text-blue-600 font-semibold">{currency.format(car.price)}</p>
      </div>
    </article>
  )
}

export default CarCard