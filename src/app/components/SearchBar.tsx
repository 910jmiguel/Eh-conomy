"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/ShadComponents/ui/button";
import { Input } from "@/ShadComponents/ui/input";

const SearchBar = () => {
    const [postalCode, setPostalCode] = useState("");
    const [product, setProduct] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
      };
    
  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-md gap-2">
            <Input
              type="text"
              placeholder="Enter your postal code"
              value={postalCode}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPostalCode(e.target.value)}
              className="bg-white/90"
            />

            <Input type="text" placeholder="Enter a product name" value="" />

            <Button type="submit" className="bg-red-600 hover:bg-red-700">
              <Search className="h-5 w-5" />
            </Button>
    </form>
  )
}

export default SearchBar