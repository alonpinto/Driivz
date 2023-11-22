import { ILocationResult } from "../../interfaces/location-result.interface";
import styles from "./CurrentLocationItem.module.scss";

interface ICurrentLocationItem {
  handleSaveCurrentLocation: (locationResult: ILocationResult) => void;
  currLocation: ILocationResult | undefined;
  isDisabled: boolean;
}

const CurrentLocationItem = ({
  handleSaveCurrentLocation,
  currLocation,
  isDisabled = false,
}: ICurrentLocationItem) => {
  // TODO use callback to prevent render

  return currLocation ? (
    <div className={styles.currentLocationContainer}>
      <h3>Current location:</h3>

      <div>
        <span> Lat: {currLocation?.latitude}, </span>
        <span>Lon: {currLocation?.longitude}</span>
      </div>

      <div>Time: {currLocation.displayTime}</div>

      <div style={{ position: "fixed", right: 0, bottom: 0, padding: 20 }}>
        <input
          type="image"
          width={50}
          height={50}
          style={{ cursor: "pointer" }}
          src="https://static-00.iconduck.com/assets.00/plus-icon-2048x2048-z6v59bd6.png"
          value={"ADD"}
          disabled={isDisabled}
          onClick={() => {
            handleSaveCurrentLocation(currLocation);
          }}
        />
      </div>
    </div>
  ) : (
    <div>loading....</div>
  );
};

export default CurrentLocationItem;
