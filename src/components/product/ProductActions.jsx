import styles from "./ProductActions.module.scss";
import { Grid, Button } from "@mui/material";

export default function ProductActions({
  isLive,
  currency,
  buyAmount,
  bidAmount,
  onBuy,
  onBid,
}) {
  return (
    <div className={styles["product-actions"]}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Button
            disabled={!isLive}
            variant={"contained"}
            onClick={onBuy}
            className={styles.button}
            fullWidth
          >
            {`Buy for ${buyAmount} ${currency}`}
          </Button>
        </Grid>
        <Grid item xs={5}>
          <Button
            disabled={!isLive}
            variant={"outlined"}
            onClick={onBid}
            className={`${styles.button} ${styles.bid}`}
            color={"success"}
            fullWidth
          >
            {`Place bid for ${bidAmount} ${currency}`}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
