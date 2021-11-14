import styles from "./Description.module.scss";
import Typography from "@mui/material/Typography";

export default function Description({ text, image }) {
  return (
    <div className={styles.description}>
      <Typography variant={"body1"} className={styles.text}>
        {text}
      </Typography>
      <img src={image} className={styles.image} />
    </div>
  );
}
