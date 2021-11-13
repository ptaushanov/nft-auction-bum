import styles from "./ProductContainer.module.scss"
import ProductImage from "./ProductImage"
import ProductInfo from "./ProductInfo"
import { Grid, Container } from '@mui/material'

export default function ProductContainer({}){
    return (
        <div className={styles["product-container"]}>
            <Container>
                <Grid container>
                    <Grid item xs={6}>
                        <ProductImage />
                    </Grid>
                    <Grid item xs={5}>
                        <ProductInfo />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}