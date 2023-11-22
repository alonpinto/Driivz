import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context/LocationContext";
import { ILocationResult } from "../interfaces/location-result.interface";
import { LocationService } from "../services/location.service";

const useFetchLocation = () => {
  const [currLocation, setCurrLocation] = useState<ILocationResult>();
  const store = useContext(LocationContext);

  useEffect(() => {
    const intervalId = window.setInterval(async () => {
      try {
        if (!store.selectedLocation) {
          const result = await LocationService.fetchCurrLocation();
          setCurrLocation(result);
        }
      } catch (e) {
        console.error(`useFetchLocation=>${e}`);
      }
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [store.selectedLocation]);

  return { currLocation };
};

export default useFetchLocation;
