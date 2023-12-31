import { useContext, useDeferredValue, useState } from "react";
import { LocationContext } from "../../contexts/LocationContext";
import { ILocationResult } from "../../interfaces/location-result.interface";
import SaveLocationItem from "../SaveLocationItem/SaveLocationItem";
import styles from "./SaveList.module.scss";

const SaveList = () => {
  const store = useContext(LocationContext);
  const [filterValue, setFilterValue] = useState<string>("");

  const deferredFilterValue = useDeferredValue(filterValue);

  const handleSelectLocation = (location: ILocationResult) => {
    const isSelectedLocationClicked = store.selectedLocation?.id == location.id;
    store.setSelectedLocation(isSelectedLocationClicked ? undefined : location);
  };

  const handleRemoveSelectedLocation = (
    e: React.MouseEvent<HTMLDivElement>,
    location: ILocationResult
  ) => {
    e.stopPropagation();

    store.setSavedLocations(
      store.savedLocations.filter(
        (saveLocation) => saveLocation.id !== location.id
      )
    );
    store.setSelectedLocation(undefined);
  };

  return (
    <div className={styles.saveList}>
      <input
        type="text"
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
      />
      <h2>Saved locations</h2>
      <div style={{ display: "flex", gap: 10, flexDirection: "column" }}>
        {!store.savedLocations.length ? (
          <div>Save you first location</div>
        ) : (
          store.savedLocations
            .filter((loc) => {
              return !deferredFilterValue
                ? loc
                : JSON.stringify(loc).includes(deferredFilterValue);
            })
            .map((_location: ILocationResult) => (
              <SaveLocationItem
                key={_location.id}
                location={_location}
                handleSelectLocation={handleSelectLocation}
                isSelected={
                  store.selectedLocation?.longitude == _location.longitude
                }
                handleRemoveSelectedLocation={handleRemoveSelectedLocation}
              />
            ))
        )}
      </div>
    </div>
  );
};

export default SaveList;
