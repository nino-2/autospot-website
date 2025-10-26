import { useNavigate } from "react-router-dom";



const cars = [
{
    id: 1,
    name: "Lamborghini Urus",
    brand: "Lamborghini",
    price: "$262,691",
    image:
      "/lambo-urus2025.jpg",
  },
  {
    id: 2,
    name: "BMW X5",
    brand: "BMW",
    price: "$86,395",
    image:
      "/BMW-X5.jpg",
  },
  {
    id: 3,
    name: "Audi A6",
    brand: "Audi",
    price: "$56,870",
    image:
      "/Audi-A6.jpg",
  },
  {
    id: 4,
    name: "Tesla Cybertruck",
    brand: "Tesla",
    price: "$79,990",
    image:
      "/tesla-cybertruck.jpg",
  },
  {
    id: 5,
    name: "Mercedes C-Class",
    brand: "Mercedes",
    price: "$59,250",
    image:
      "/Mercedes-class.jpg",
  },
  {
    id: 6,
    name: "Toyota Camry",
    brand: "Toyota",
    price: "$25,045",
    image:
      "/toyota-camry.jpg",
  },
];

const Features = () => {
  const navigate = useNavigate();
  return (
    <div>
        <section id="featured" className="container mx-auto px-7 py-12 sm:py-16">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Featured Cars</h2>
          <button onClick={() => navigate("/catalogue")}  className="text-sm font-medium text-blue-600 hover:text-blue-700 cursor-pointer">See all</button>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.slice(0, 6).map((car) => (
            <article key={car.id} className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md">
              <div className="aspect-[16/10] overflow-hidden">
                <img src={car.image} alt={`${car.brand} ${car.name}`} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{car.name}</h3>
                  <span className="text-sm text-gray-600">{car.brand}</span>
                </div>
                <p className="mt-1 text-blue-600 font-semibold">{car.price}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

    </div>
  )
}

export default Features