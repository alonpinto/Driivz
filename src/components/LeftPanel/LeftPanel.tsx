import SaveList from "../SaveList/SaveList";
import styles from "./LeftPanel.module.scss";
const LeftPanel = () => {
  return (
    <div className={styles.leftPanel}>
      <SaveList />
    </div>
  );
};

export default LeftPanel;
