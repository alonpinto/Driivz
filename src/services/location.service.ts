import { v4 as uuidv4 } from "uuid";
import { ILocationResult } from "../interfaces/location-result.interface";

const LocationService = () => {
  const FETCH_URL = "http://api.open-notify.org/iss-now.json";

  const fetchCurrLocation = async (): Promise<ILocationResult> => {
    const result = await fetch(FETCH_URL);
    const data = await result.json();

    // TODO add mapper util
    return {
      id: uuidv4(),
      message: data.message,
      timestamp: data.timestamp,
      longitude: data.iss_position.longitude,
      latitude: data.iss_position.latitude,
      displayTime: new Date(data.timestamp).toISOString(),
    };
  };

  return {
    fetchCurrLocation,
  };
};

const instance = LocationService();
export { instance as LocationService };
