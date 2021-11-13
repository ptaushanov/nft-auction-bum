import styles from "./ProductContainer.module.scss"
import ProductImage from "./ProductImage"
import ProductInfo from "./ProductInfo"
import ProductTabs from "./ProductTabs"
import ProductActions from "./ProductActions"
import { Grid, Container } from '@mui/material'

export default function ProductContainer({name, owner, price, currency, likes, auction_end, details, bids, source}){
    return (
        <div className={styles["product-container"]}>
            <Container>
                <Grid container>
                    <Grid item xs={6}>
                        <ProductImage url={source.url}/>
                    </Grid>
                    <Grid item xs={5}>
                        <ProductInfo 
                            title={name}
                            creator={{
                                name: owner.username,
                                avatar: owner.avatar.url,
                                verified:owner.verified,
                            }}
                            price={price}
                            currency={currency}
                            likes={likes}
                            timeEnd={auction_end}
                        />
                        <ProductTabs 
                            text={details}
                            bids={bids}
                        />
                        <ProductActions />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}