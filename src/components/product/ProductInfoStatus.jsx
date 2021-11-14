import styles from "./ProductInfoStatus.module.scss";
import Chip from "@mui/material/Chip";
import LiveIcon from "@mui/icons-material/FiberManualRecord";

export default function ProductInfoStatus() {
  return (
    <div className={styles["product-info-status"]}>
      <Chip
        icon={<LiveIcon className={styles.icon} />}
        className={styles.status}
        variant="filled"
        label={"Live".toUpperCase()}
      />
    </div>
  );
}
