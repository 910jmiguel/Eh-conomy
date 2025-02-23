import React from "react";

const farmsData = [
  {
    id: 1,
    name: "Green Acres Farm",
    location: "Saskatchewan, Canada",
    image: "https://www.theglobeandmail.com/resizer/v2/BK46UALLBNH6JKO6YAWSXM6NSA?auth=0fd4c5a25b4f4e55173ea68ce2658015feb181c45a69f141884fe284392e20f5&width=1200&quality=80",
    products: "Wheat, Barley, Canola",
    stats: "Total farm area: 1,500 acres",
  },
  {
    id: 2,
    name: "Maple Leaf Dairy",
    location: "Ontario, Canada",
    image: "https://new.milk.org/wp-content/uploads/2023/09/DairyInOntario-ourFarmers-16x9@3x_1.jpg",
    products: "Milk, Cheese, Yogurt",
    stats: "Total farm area: 800 acres",
  },
  {
    id: 3,
    name: "Sunrise Orchards",
    location: "British Columbia, Canada",
    image: "https://www.onapples.com/uploads/bio_thumbs/LFeS85uKNy80.jpg",
    products: "Apples, Cherries, Peaches",
    stats: "Total farm area: 200 acres",
  },
  {
    id: 4,
    name: "Apple Picking Farm",
    location: "British Columbia, Canada",
    image: "https://bdc2020.o0bc.com/wp-content/uploads/2023/09/Apple-Picking-6512e580ccd91-scaled.jpeg",
    products: "Apples",
    stats: "Total farm area: 200 acres",
  },
  {
    id: 5,
    name: "Steak House Farm",
    location: "British Columbia, Canada",
    image: "https://images.squarespace-cdn.com/content/v1/50f75b5ee4b00d3480c94be2/1466628520125-7PWSX9275LB72YU2J03T/grass-fed-beef.jpg?format=2500w",
    products: "Beef",
    stats: "Total farm area: 200 acres",
  },
];

const FarmsPage = () => {
  return (
    <div className="container mx-auto px-4 py-20"> {/* Increased top padding */}
      <h1 className="text-4xl font-bold text-center mb-10">Canadian Farms List 🇨🇦</h1>
      <div className="space-y-8">
        {farmsData.map((farm) => (
          <div
            key={farm.id}
            className="flex bg-white shadow-lg rounded-xl overflow-hidden h-72" // Increased height
          >
            {/* Farm Image */}
            <div className="w-1/3">
              <img
                src={farm.image}
                alt={farm.name}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Farm Details */}
            <div className="w-2/3 p-6 flex flex-col justify-center space-y-3">
              <h2 className="text-2xl font-semibold">{farm.name}</h2>
              <p className="text-gray-600"><strong>📍 Location:</strong> {farm.location}</p>
              <p className="text-gray-600"><strong>🌾 Products:</strong> {farm.products}</p>
              <p className="text-gray-600"><strong>📊 Stats:</strong> {farm.stats}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmsPage;