import Sidebar from "../components/Sidebar";
import Map from "../components/Map";

import styles from "./AppLayout.module.css";

export default function AppLayout() {
  return (
    <nav className={styles.app}>
      <Sidebar />
      <Map />
    </nav>
  );
}
