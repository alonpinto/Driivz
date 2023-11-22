import { createContext } from "react";
import { ILocationResult } from "../interfaces/location-result.interface";

interface LocationContextStore {
  savedLocations: ILocationResult[];
  setSavedLocations: React.Dispatch<React.SetStateAction<ILocationResult[]>>;
  selectedLocation: ILocationResult | undefined;
  setSelectedLocation: React.Dispatch<
    React.SetStateAction<ILocationResult | undefined>
  >;
}

export const LocationContext = createContext<LocationContextStore>({
  savedLocations: [],
  setSavedLocations: () => {},
  selectedLocation: undefined,
  setSelectedLocation: () => {},
});
