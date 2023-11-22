import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";
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
        <Button
          variant="contained"
          startIcon={<AddCircleOutlineIcon />}
          color="success"
          size="large"
          onClick={() => {
            handleSaveCurrentLocation(currLocation);
          }}
          disabled={isDisabled}
        >
          Add
        </Button>
      </div>
    </div>
  ) : (
    <div>loading....</div>
  );
};

export default CurrentLocationItem;
