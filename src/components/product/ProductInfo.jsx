import styles from "./ProductInfo.module.scss";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";
import { Stack, Grid } from "@mui/material";

export default function ProductInfo({
  title,
  creator,
  price,
  currency,
  likes,
  onTimeEnd,
  timeEnd,
  isLive,
}) {
  return (
    <div className={styles["product-info"]}>
      <ProductInfoTitle text={title} />
      <hr className={styles.line} />
      <Stack className={styles.stats} direction={"row"} spacing={1}>
        <ProductInfoPrice amount={price} currency={currency} />
        {isLive && <ProductInfoStatus />}
        <ProductInfoLikes amount={likes} />
      </Stack>
      <Grid container spacing={1.7}>
        <Grid item xs={7}>
          <ProductInfoCreator {...creator} />
        </Grid>
        <Grid item xs={5}>
          <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd} />
        </Grid>
      </Grid>
    </div>
  );
}
