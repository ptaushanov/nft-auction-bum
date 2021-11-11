import styles from "./ProductInfo.module.scss"
import ProductInfoTitle from "./ProductInfoTitle"
import ProductInfoPrice from "./ProductInfoPrice"
import ProductInfoStatus from "./ProductInfoStatus"
import ProductInfoLikes from "./ProductInfoLikes"
import ProductInfoCreator from "./ProductInfoCreator"
import ProductInfoTimer from "./ProductInfoTimer"
import { Stack, Grid } from "@mui/material"

export default function ProductInfo({title, creator, price, currency, likes, onTimeEnd, timeEnd, isLive}){
    return (
        <div className={styles["product-info"]}>
            <ProductInfoTitle text={title}/>
            <Stack className={styles.stats} direction={"row"}>
                <ProductInfoPrice amount={price} currency={currency}/>
                {isLive && (<ProductInfoStatus/>)}
                <ProductInfoLikes amount={likes}/>
            </Stack>
            <Grid container>
                <Grid item xs={7}>
                    <ProductInfoCreator {...creator} />
                </Grid>
                <Grid item xs={5}>
                    <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd}/>
                </Grid>
            </Grid>
        </div>
    )
}