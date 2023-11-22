import { ILocationResult } from "../../interfaces/location-result.interface";
import styles from "./SaveLocationItem.module.scss";

interface ISaveLocationItemProps {
  location: ILocationResult;
  handleSelectLocation: (location: ILocationResult) => void;
  handleRemoveSelectedLocation: (
    event: React.MouseEvent<HTMLDivElement>,
    location: ILocationResult
  ) => void;
  isSelected: boolean;
}

const SaveLocationItem = ({
  location,
  handleSelectLocation,
  handleRemoveSelectedLocation,
  isSelected,
}: ISaveLocationItemProps) => {
  return (
    <div
      className={`${styles.saveItemContainer} ${
        isSelected ? styles.selected : ""
      }`}
      onClick={() => handleSelectLocation(location)}
    >
      <div
        style={{
          position: "absolute",
          right: 4,
          top: 0,
          margin: 4,
          fontSize: 20,
        }}
        onClick={(event: React.MouseEvent<HTMLDivElement>) =>
          handleRemoveSelectedLocation(event, location)
        }
      >
        x
      </div>

      <div>
        <span className={styles.label}>Lat:</span>
        {location.latitude},<span className={styles.label}>Lon:</span>{" "}
        {location.longitude}
      </div>

      <div>
        <span className={styles.label}>Date:</span>
        {location.displayTime}
      </div>
    </div>
  );
};

export default SaveLocationItem;
