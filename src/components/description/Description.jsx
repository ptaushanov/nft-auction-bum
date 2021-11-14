import styles from "./Description.module.scss";
import { Typography, Container } from "@mui/material";

export default function Description({ text, image }) {
  return (
    <div className={styles.description}>
      <Container className={styles.container}>
        <Typography variant={"body1"} className={styles.text}>
          {text}
        </Typography>
        <img src={image} className={styles.image} />
      </Container>
    </div>
  );
}
