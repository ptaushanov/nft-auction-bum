import styles from "./ProductInfo.module.scss"
import ProductInfoTitle from "./ProductInfoTitle"
import ProductInfoPrice from "./ProductInfoPrice"
import ProductInfoStatus from "./ProductInfoStatus"
import ProductInfoLikes from "./ProductInfoLikes"
import ProductInfoCreator from "./ProductInfoCreator"
import ProductInfoTimer from "./ProductInfoTimer"
import { Stack, Grid } from "@mui/material"

export default function ProductInfo(props){
    const {title, creator, price, currency, likes, onTimeEnd, timeEnd, isLive} = props;

    return (
        <div className={styles["product-info"]}>
            <ProductInfoTitle text={title}/>
            <Stack className={styles.status} direction={"row"}>
                <ProductInfoPrice amount={price} currency={currency}/>
                {isLive && (<ProductInfoStatus/>)}
                <ProductInfoLikes amount={likes}/>
            </Stack>
            <Grid container>
                <Grid item md={7}>
                    <ProductInfoCreator {...creator} />
                </Grid>
                <Grid item md={5}>
                    <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd}/>
                </Grid>
            </Grid>
        </div>
    )
}