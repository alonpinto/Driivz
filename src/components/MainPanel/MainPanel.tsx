import { useContext } from "react";
import { LocationContext } from "../../context/LocationContext";
import useFetchLocation from "../../hooks/useFetchLocation";
import CurrentLocationItem from "../CurrentLocationItem/CurrentLocationItem";
import StaticLocationItem from "../StaticLocationItem/StaticLocationItem";
import styles from "./MainPanel.module.scss";

const MainPanel = () => {
  const store = useContext(LocationContext);

  const { currLocation } = useFetchLocation();

  const isDisabled =
    store.savedLocations[store.savedLocations.length - 1]?.timestamp ===
    currLocation?.timestamp;

  const handleSaveCurrentLocation = () => {
    if (!isDisabled && currLocation) {
      store.setSavedLocations([...store.savedLocations, currLocation]);
    }
  };

  return (
    <div className={styles.mainPanel}>
      {!store.selectedLocation ? (
        <>
          <CurrentLocationItem
            handleSaveCurrentLocation={handleSaveCurrentLocation}
            currLocation={currLocation}
            isDisabled={isDisabled}
          />
        </>
      ) : (
        <StaticLocationItem currLocation={store.selectedLocation} />
      )}
    </div>
  );
};

export default MainPanel;
