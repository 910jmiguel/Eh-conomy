
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/ShadComponents/ui/button";
import { Input } from "@/ShadComponents/ui/input";
import { ontarioCities } from "@/constants/ontarioCities"; 

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [product, setProduct] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cityValue = e.target.value;
    setCity(cityValue);
    const filteredCities = ontarioCities.filter((city) =>
      city.toLowerCase().includes(cityValue.toLowerCase())
    );
    setSuggestions(filteredCities);
    setShowSuggestions(true);
  };

  const handleCitySelect = (selectedCity: string) => {
    setCity(selectedCity);
    setShowSuggestions(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    document.getElementById('map')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-md gap-2 relative">
      
      {/* City Input with Dropdown */}
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="🌆 Enter city"
          value={city}
          onChange={handleCityChange}
          className="bg-white/90 w-full"
        />

        {showSuggestions && (
          <ul 
            className="absolute left-0 top-full mt-3 bg-white border shadow-md p-2 w-full max-h-40 overflow-y-auto rounded-lg z-50"
            style={{
              maxHeight: "150px",
              scrollbarWidth: "thin",
              scrollbarColor: "gray",
            }}
          >
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="py-2 px-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleCitySelect(suggestion)}
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Product Input */}
      <Input
        type="text"
        placeholder="  📦 Enter product"
        value={product}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProduct(e.target.value)}
        className="bg-white/90"
      />

      {/* Search Button */}
      <Button type="submit" className="bg-red-600 hover:bg-red-700">
        <Search className="h-5 w-5" />
      </Button>
      
    </form>
  );
};

export default SearchBar;
