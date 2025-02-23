"use client";

import { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/ShadComponents/ui/carousel";
import SearchBar from "./components/SearchBar";
import { Card, CardContent } from "@/ShadComponents/ui/card";
import { team } from "@/constants/team";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

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
    "/carouselpic3.png",
  ];

  // State for tracking the current image index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images every 1.5 seconds
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
            Down with Stars & Stripes, buy from the Maple Leaf 🍁 <br />
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

            {/* Fixed-Size Carousel Section */}
            <div className="rounded-lg overflow-hidden shadow-none w-full max-w-lg mx-auto">
              <Carousel className="w-full">
                <CarouselContent className="flex justify-center items-center">
                  {images.map((image, index) => (
                    <CarouselItem
                      key={index}
                      className={`transition-opacity duration-700 ${
                        index === currentIndex ? "opacity-100" : "hidden"
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Slide ${index + 1}`}
                        width={500}
                        height={300}
                        className="w-full h-[300px] object-cover rounded-lg"
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

          {/* Google Maps Embed */}
          <div className="flex justify-center">
            <iframe
              className="w-full max-w-4xl h-96 rounded-lg shadow-lg"
              width="600"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src={`https://www.google.com/maps/embed/v1/search?q=Ontario%20Farms&key=AIzaSyBeEfM6HLUgbUwEETtMk8c_iqqMC4ggv68`}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Credits Section */}
      <section id="credits" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Credits</h2>
          <div className="text-center mb-12">
            <p className="text-lg text-gray-700">
              Built with ❤️ to support Canadian agriculture and economy!
              <br></br>
              This project was created as part of HackCanada 2025, hosted at Wilfrid Laurier University, Waterloo, ON.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg relative">
                    <Image 
                      src={member.image} 
                      alt={member.name}
                      fill
                      style={{ objectFit: 'cover' }}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      priority={index < 4}
                    />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{member.name}</h3>
                  <p className="text-gray-600 mb-4">{member.school}</p>
                  <div className="flex justify-center gap-4">
                    <a 
                      href={member.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <FaGithub size={24} />
                    </a>
                    <a 
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600"
                    >
                      <FaLinkedin size={24} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-600">Map data from Google Maps</p>
          </div>
        </div>
      </section>
    </main>
  );
}
