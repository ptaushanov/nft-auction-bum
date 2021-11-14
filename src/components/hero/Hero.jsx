import styles from "./Hero.module.scss";
import Typography from "@mui/material/Typography";

export default function Hero({ text }) {
  return (
    <div className={styles.hero}>
      <Typography variant={"h1"} className={styles.text}>
        {text}
      </Typography>
    </div>
  );
}
