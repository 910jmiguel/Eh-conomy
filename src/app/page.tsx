"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};

export default function Home() {
  const [postalCode, setPostalCode] = useState("");
  const [product, setProduct] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement postal code search and map centering
    document.getElementById("map")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section id="home" className="relative h-screen">
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/backgroundVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8">
            Support Local Canadian Farms
          </h1>
          <p className="text-xl text-white text-center mb-8 max-w-2xl">
            Down with Stars & Stripes, Buy from the Maple Leaf 🍁 <br></br>
            Find nearby farms and farmers markets in Ontario.
          </p>
          <form onSubmit={handleSearch} className="flex w-full max-w-md gap-2">
            <Input
              type="text"
              placeholder="Enter your postal code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
              className="bg-white/90"
            />

            <Input type="text" placeholder="Enter a product name" value="" />

            <Button type="submit" className="bg-red-600 hover:bg-red-700">
              <Search className="h-5 w-5" />
            </Button>
          </form>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-700 mb-6">
                We believe in strengthening the Canadian economy by supporting
                local farmers and producers. With rising food prices and
                increasing dependence on imports, it's more important than ever
                to connect Canadians with local food sources.
              </p>
              <p className="text-lg text-gray-700">
                Our platform helps you discover nearby farms and farmers
                markets, making it easier to buy fresh, organic produce directly
                from local producers. Together, we can build a more sustainable
                and resilient food system.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1595855759920-86582396756c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Local farming"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section id="map" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Find Local Farms
          </h2>
          {process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ? (
            <LoadScript
              googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            >
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </LoadScript>
          ) : (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    Please add your Google Maps API key to the .env file to
                    enable the map.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Credits Section */}
      <section id="credits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Credits</h2>
          <div className="text-center">
            <p className="text-lg text-gray-700 mb-4">
              Built with ❤️ to support Canadian agriculture and economy
            </p>
            <p className="text-gray-600">Map data from Google Maps</p>
          </div>
        </div>
      </section>
    </main>
  );
}
