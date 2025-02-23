import { db } from "./firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

// Calculate distance between two points using Haversine formula
function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

interface Location {
  lat: number;
  lng: number;
}

// Define Firestore document structure
interface Farm {
  id: string;
  name: string;
  address: string; 
  products: string;
  stats: string;
  image: string;
  latitude: string | null;
  longitude: string | null;
  telephone: string | null;
  email: string | null;
  website: string | null;
}

async function fetchData(region?: string, product?: string, location?: Location, collectionName = "collection1"): Promise<Farm[]> {
  try {
    const collectionRef = collection(db, collectionName);
    
    // Build query
    let q = query(collectionRef);
    
    // Add filters if provided
    if (region) {
      const regionLower = region.toLowerCase();
      q = query(collectionRef, 
        where('address', '>=', regionLower),
        where('address', '<', regionLower + '\uf8ff')
      );
    }

    const querySnapshot = await getDocs(q);
    const farms: Farm[] = [];

    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      
      // Apply filters
      if (region && !data.address?.toLowerCase().includes(region.toLowerCase())) {
        continue;
      }

      if (product && !data.products?.toLowerCase().includes(product.toLowerCase())) {
        continue;
      }

      // If location is provided, calculate distance and filter within 50km radius
      if (location && data.latitude && data.longitude) {
        const distance = calculateDistance(
          location.lat,
          location.lng,
          parseFloat(data.latitude),
          parseFloat(data.longitude)
        );
        if (distance > 50) continue; // Skip if further than 50km
      }

      // Map Firestore data to Farm interface with all required fields
      farms.push({
        id: doc.id,
        name: data.name || '',
        address: data.address || '',
        products: data.products || '',
        stats: data.stats || '',
        image: data.image || '',
        latitude: data.latitude || null,
        longitude: data.longitude || null,
        telephone: data.telephone || null,
        email: data.email || null,
        website: data.website || null
      });
    }

    return farms;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}

export default fetchData;
