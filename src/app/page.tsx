"use client";

import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/ShadComponents/ui/carousel";
import SearchBar from "./components/SearchBar";

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 43.6532,
  lng: -79.3832,
};

export default function Home() {

  // Define carousel images
  const images = [
    "/carouselpic1.png",
    "/carouselpic2.png",
    "/carouselpic3.png"
  ];

  // State for tracking the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [images.length]);

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
          <SearchBar />
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

           {/* Auto-Switching Carousel Section */}
          <div className="rounded-lg overflow-hidden shadow-xl">
            <Carousel className="w-full max-w-lg mx-auto">
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className={`transition-opacity duration-700 ${index === currentIndex ? 'opacity-100' : 'hidden'}`}
                  >
                    <img
                      src={image}
                      alt={`Slide ${index + 1}`}
                      className="w-full h-auto rounded-lg"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
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
              Built with ❤️ to support Canadian agriculture and economy by {'Ayla, Miguel, Raghav and James! '}
            </p>
            <p className="text-gray-600">Map data from Google Maps</p>
          </div>
        </div>
      </section>
    </main>
  );
}
