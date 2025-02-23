'use client'

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import fetchData from "@/lib/fetch";

interface Farm {
  id: string;
  name: string;
  address: string;
  products: string;
  stats: string;
  image: string;
}

const FarmsPage = () => {
  const searchParams = useSearchParams();
  const [farms, setFarms] = useState<Farm[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFarms = async () => {
      try {
        setLoading(true);
        const city = searchParams.get('city');
        const product = searchParams.get('product');
        const data = await fetchData(city || undefined, product || undefined);
        setFarms(data);
      } catch (error) {
        console.error('Error fetching farms:', error);
      } finally {
        setLoading(false);
      }
    };

    getFarms();
  }, [searchParams]);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-10">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-10">Canadian Farms List 🇨🇦</h1>
      {farms.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">No farms found matching your search criteria.</p>
        ) : (
          <div className="space-y-8">
            {farms.map((farm) => (
              <div
                key={farm.id}
                className="flex bg-white shadow-lg rounded-xl overflow-hidden h-72"
              >
                {/* Farm Image */}
                <div className="w-1/3">
                  <img
                    src={farm.image}
                    alt={farm.name}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://via.placeholder.com/400x400?text=Farm+Image";
                    }}
                  />
                </div>

                {/* Farm Details */}
                <div className="w-2/3 p-6 flex flex-col justify-center space-y-3">
                  <h2 className="text-2xl font-semibold">{farm.name}</h2>
                  <p className="text-gray-600"><strong>📍 Location:</strong> {farm.address}</p>
                  <p className="text-gray-600"><strong>🌾 Products:</strong> {farm.products}</p>
                  <p className="text-gray-600"><strong>📊 Stats:</strong> {farm.stats}</p>
                </div>
              </div>
            ))}
          </div>
        )}
    </div>
  );
};

export default FarmsPage;
