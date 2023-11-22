import LeftPanel from "../LeftPanel/LeftPanel";
import MainPanel from "../MainPanel/MainPanel";
import styles from "./Layout.module.scss";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <LeftPanel />
      <MainPanel />
    </div>
  );
};

export default Layout;
