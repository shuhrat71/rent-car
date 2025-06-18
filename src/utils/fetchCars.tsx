import { Car } from "@/types/car";
import { db } from "../utils/api";
import { collection, getDocs } from "firebase/firestore";

export const fetchCars = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "carData"));
    const cars: Car[] = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Car, "id">),
    }));
    return cars;
  } catch (error) {
    console.error("Xatolik: ", error);
    return [];
  }
};
