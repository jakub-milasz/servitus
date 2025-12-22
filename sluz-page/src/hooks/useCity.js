import { useParams } from "react-router-dom";
import { cities } from "../data/cities";

export function useCity() {
  const { city } = useParams();
  return cities[city] || null;
}
