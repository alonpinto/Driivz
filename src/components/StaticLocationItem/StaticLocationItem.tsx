import { ILocationResult } from "../../interfaces/location-result.interface";
import styles from "./StaticLocationItem.module.scss";

interface ICurrentLocationItem {
  currLocation: ILocationResult;
}

const StaticLocationItem = ({ currLocation }: ICurrentLocationItem) => {
  // TODO use callback to prevent render

  return currLocation ? (
    <div className={styles.currentLocationContainer}>
      <h1>Saved location:</h1>

      <div>
        <span> Lat: {currLocation?.latitude}</span>
        <span>Lon: {currLocation?.longitude}</span>
      </div>

      <div>Time: {currLocation?.timestamp}</div>
    </div>
  ) : (
    <div>loading....</div>
  );
};

export default StaticLocationItem;
