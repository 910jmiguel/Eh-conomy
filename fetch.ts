import admin from "firebase-admin";
import { CollectionReference, Query, DocumentData } from "firebase-admin/firestore";

// Initialize Firebase
// @ts-ignore - service account import
import serviceAccount from "./eh-conomy-firebase-adminsdk-fbsvc-0577477a8a.json";

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
  });
}

const db = admin.firestore();

// Define Firestore document structure
interface Farm {
  id: string;
  name: string;  // Required fields should not be optional
  address: string;
  latitude: string | null;  // Optional fields should use null instead of undefined
  longitude: string | null;
  telephone: string | null;
  email: string | null;
  website: string | null;
}

async function fetchData(city?: string, product?: string, collection = "collection1"): Promise<Farm[]> {
  if (!admin.apps.length) {
    throw new Error("Firebase has not been initialized");
  }

  try {
    const collectionRef: CollectionReference = db.collection(collection);
    
    // Build query for city filter
    let query: Query<DocumentData> = collectionRef;
    if (city) {
      const cityLower = city.toLowerCase();
      // Firebase doesn't support regex, use range queries for prefix matching
      query = collectionRef.where('address', '>=', cityLower)
                          .where('address', '<', cityLower + '\uf8ff');
    }

    const querySnapshot = await query.get();
    const farms: Farm[] = [];

    for (const doc of querySnapshot.docs) {
      const data = doc.data();
      
      // Additional city filter for exact matching if needed
      if (city && !data.address?.toLowerCase().includes(city.toLowerCase())) {
        continue;
      }

      // Ensure type safety by properly mapping Firestore data to Farm interface
      farms.push({
        id: doc.id,
        name: data.name || '',  // Provide defaults for required fields
        address: data.address || '',
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
