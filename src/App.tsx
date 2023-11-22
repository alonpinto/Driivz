import { useEffect, useState } from "react";
import "./App.css";
import Layout from "./components/Layout/Layout";
import { LocationContext } from "./contexts/LocationContext";
import { ILocationResult } from "./interfaces/location-result.interface";
import { LocalStorageService } from "./services/local-storage.service";

const SAVED_LOCATION_LOCAL_STORAGE_KEY = "saved_location";

function App() {
  const [savedLocations, setSavedLocations] = useState<ILocationResult[]>(
    (): ILocationResult[] => {
      const res = LocalStorageService.get(SAVED_LOCATION_LOCAL_STORAGE_KEY);
      return res === null ? [] : res;
    }
  );
  const [selectedLocation, setSelectedLocation] = useState<
    ILocationResult | undefined
  >(undefined);

  useEffect(() => {
    LocalStorageService.save(SAVED_LOCATION_LOCAL_STORAGE_KEY, savedLocations);
  }, [savedLocations]);

  return (
    !!savedLocations && (
      <LocationContext.Provider
        value={{
          savedLocations,
          setSavedLocations,
          selectedLocation,
          setSelectedLocation,
        }}
      >
        <Layout />
      </LocationContext.Provider>
    )
  );
}

export default App;
