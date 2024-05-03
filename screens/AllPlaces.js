import { useEffect, useState } from "react";
import PlacesList from "../components/Places/PlacesList";
import { useIsFocused } from "@react-navigation/native";

export default function AllPlaces({ route }) {
  const [loadedPlaces, setLoadaedPlaces] = useState();

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused && route.params) {
      setLoadaedPlaces((curPlaces) => [...curPlaces, route.params.place]);
    }
  }, []);

  return <PlacesList places={loadedPlaces} />;
}
