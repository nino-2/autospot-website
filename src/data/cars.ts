import type { Car } from "../types";

export type CarSpec = Car & {
    transmission: string;
    engine: string;
    mileage: string;
    fuel: string;
    images: string[];
}
export const CARS: CarSpec[] = [
    { id: 1, brand: "Lamborghini", model: "Urus", year: 2025, price: 262691, image: "/lambo-urus2025.jpg", transmission: "Automatic", engine: "Electric Dual Motor", mileage: "0 km", fuel: "Electric", images: ['/lambo-sideview.jpg', '/lambo-rearview.jpg', '/lambo-rearview.jpg'] },
    {
    id: 2,
    brand: "BMW",
    model: "X5",
    year: 2023,
    price: 86395,
    image: "/BMW-X5.jpg",
    mileage: "23 MPG (combined)",
    transmission: "8-speed automatic",
    fuel: "Petrol",
    engine: "3.0L Turbocharged I6",
    images:[]
  },
  {
    id: 3,
    brand: "Audi",
    model: "A6",
    year: 2022,
    price: 56870,
    image: "/Audi-A6.jpg",
    mileage: "26 MPG (combined)",
    transmission: "7-speed dual-clutch automatic",
    fuel: "Petrol",
    engine: "2.0L Turbocharged I4",
    images:[]
  },
  {
    id: 4,
    brand: "Tesla",
    model: "Cybertruck",
    year: 2024,
    price: 79990,
    image: "/tesla-cybertruck.jpg",
    mileage: "340 miles range (EPA est.)",
    transmission: "Single-speed automatic",
    fuel: "Electric",
    engine: "Dual Motor All-Wheel Drive",
    images:[]
  },
  {
    id: 5,
    brand: "Mercedes",
    model: "C-Class",
    year: 2023,
    price: 59250,
    image: "/Mercedes-class.jpg",
    mileage: "28 MPG (combined)",
    transmission: "9-speed automatic",
    fuel: "Petrol",
    engine: "2.0L Turbocharged I4",
    images:[]
  },
  {
    id: 6,
    brand: "Toyota",
    model: "Camry",
    year: 2021,
    price: 25045,
    image: "/toyota-camry.jpg",
    mileage: "32 MPG (combined)",
    transmission: "8-speed automatic",
    fuel: "Petrol",
    engine: "2.5L Inline-4",
    images:[]
  },
  {
    id: 7,
    brand: "Honda",
    model: "Civic",
    year: 2020,
    price: 18500,
    image: "/honda-civic.jpg",
    mileage: "33 MPG (combined)",
    transmission: "CVT automatic",
    fuel: "Petrol",
    engine: "1.5L Turbocharged I4",
    images:[]
  },
  {
    id: 8,
    brand: "Ford",
    model: "Mustang",
    year: 2022,
    price: 27470,
    image: "/ford-mustang.jpg",
    mileage: "22 MPG (combined)",
    transmission: "6-speed manual / 10-speed automatic",
    fuel: "Petrol",
    engine: "5.0L V8",
    images:[]
  },
  {
    id: 9,
    brand: "Chevrolet",
    model: "Camaro",
    year: 2022,
    price: 63000,
    image: "/chevrolet.jpg",
    mileage: "20 MPG (combined)",
    transmission: "6-speed manual / 10-speed automatic",
    fuel: "Petrol",
    engine: "6.2L V8",
    images:[]
  },
  {
    id: 10,
    brand: "Lexus",
    model: "ES 350",
    year: 2023,
    price: 41940,
    image: "/lexus-es.jpg",
    mileage: "26 MPG (combined)",
    transmission: "8-speed automatic",
    fuel: "Petrol",
    engine: "3.5L V6",
    images:[]
  },
  {
    id: 11,
    brand: "Mercedes",
    model: "Maybach S550 4MATIC",
    year: 2026,
    price: 207150,
    image: "/maybach.jpg",
    mileage: "18 MPG (combined)",
    transmission: "9-speed automatic",
    fuel: "Petrol",
    engine: "4.0L Twin-Turbo V8",
    images:[]
  },
  {
    id: 12,
    brand: "Changan",
    model: "Uni-K",
    year: 2023,
    price: 49200,
    image: "/changan.jpg",
    mileage: "24 MPG (combined)",
    transmission: "8-speed automatic",
    fuel: "Petrol",
    engine: "2.0L Turbocharged I4",
    images:[]
  },
  {
    id: 13,
    brand: "Porsche",
    model: "911",
    year: 2022,
    price: 114400,
    image: "/porsche911.jpg",
    mileage: "21 MPG (combined)",
    transmission: "8-speed PDK dual-clutch",
    fuel: "Petrol",
    engine: "3.0L Twin-Turbo Flat-6",
    images:[]
  },
  {
    id: 14,
    brand: "Volkswagen",
    model: "Golf",
    year: 2020,
    price: 30950,
    image: "/volkswagen.jpg",
    mileage: "31 MPG (combined)",
    transmission: "8-speed automatic",
    fuel: "Petrol",
    engine: "1.4L Turbocharged I4",
    images:[]
  },
  {
    id: 15,
    brand: "Toyota",
    model: "Land Cruiser",
    year: 2025,
    price: 58185,
    image: "/landcruiser.jpg",
    mileage: "17 MPG (combined)",
    transmission: "10-speed automatic",
    fuel: "Petrol",
    engine: "3.4L Twin-Turbo V6",
    images:[]
  },
  {
    id: 16,
    brand: "Lexus",
    model: "RX350",
    year: 2024,
    price: 49950,
    image: "/rx350.jpg",
    mileage: "25 MPG (combined)",
    transmission: "8-speed automatic",
    fuel: "Petrol",
    engine: "2.4L Turbocharged I4",
    images:[]
  }
]

export const BASE_CARS: Car[] = CARS.map(({ id, brand, model, year, price, image }) => ({ id, brand, model, year, price, image }));

export function getCarById(id: number): CarSpec | undefined {
  return CARS.find((c) => c.id === id);
}