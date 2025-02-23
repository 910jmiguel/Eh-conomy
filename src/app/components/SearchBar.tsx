import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/ShadComponents/ui/button";
import { Input } from "@/ShadComponents/ui/input";
import { ontarioCities } from "@/constants/ontarioCities"; 
import { useRouter } from "next/navigation";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const [product, setProduct] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleCityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cityValue = e.target.value;
    setCity(cityValue);
    if (cityValue === "") {
      setShowSuggestions(false);
      setSuggestions([]);
      return;
    }
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

  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (city || product) {
      const searchParams = new URLSearchParams();
      if (city) searchParams.set('city', city);
      if (product) searchParams.set('product', product);
      router.push(`/list?${searchParams.toString()}`);
    }
  };

  return (
    <form onSubmit={handleSearch} className="flex w-full max-w-lg gap-3 relative p-4 bg-white shadow-lg rounded-2xl">
      {/* City Input with Dropdown */}
      <div className="relative w-full">
        <Input
          type="text"
          placeholder="📍 Enter city"
          value={city}
          onChange={handleCityChange}
          className="w-full px-4 py-3 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {showSuggestions && (
          <ul 
            className="absolute left-0 top-full mt-2 bg-white border border-gray-200 shadow-md w-full max-h-40 overflow-y-auto rounded-xl z-50"
          >
            {suggestions.map((suggestion) => (
              <li
                key={suggestion}
                className="py-3 px-4 text-lg hover:bg-gray-100 cursor-pointer rounded-lg"
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
        placeholder="🌾 Enter product"
        value={product}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProduct(e.target.value)}
        className="w-full px-4 py-3 text-lg border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-red-500"
      />

      {/* Search Button */}
      <Button type="submit" className="bg-red-500 hover:bg-red-400 text-white p-4 rounded-full shadow-md">
        <Search className="h-6 w-6" />
      </Button>
    </form>
  );
};

export default SearchBar;
