import styles from "./ProductInfoLikes.module.scss"
import { Chip } from "@mui/material"
import millify from "millify"

export default function ProductInfoLikes({amount=0}){
    return (
        <div className={styles["product-info-likes"]}>
            <Chip className={styles.likes} variant="outlined" label={millify(amount)} />
        </div>
    )
}