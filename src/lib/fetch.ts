import { db } from "./firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

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

async function fetchData(city?: string, product?: string, collectionName = "collection1"): Promise<Farm[]> {
  try {
    const collectionRef = collection(db, collectionName);
    
    // Build query
    let q = query(collectionRef);
    
    // Add filters if provided
    if (city) {
      const cityLower = city.toLowerCase();
      q = query(collectionRef, 
        where('address', '>=', cityLower),
        where('address', '<', cityLower + '\uf8ff')
      );
    }

    const querySnapshot = await getDocs(q);
    const farms: Farm[] = [];

    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      
      // Filter by city if provided
      if (city && !data.address?.toLowerCase().includes(city.toLowerCase())) {
        continue;
      }

      // Filter by product if provided
      if (product && !data.products?.toLowerCase().includes(product.toLowerCase())) {
        continue;
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
