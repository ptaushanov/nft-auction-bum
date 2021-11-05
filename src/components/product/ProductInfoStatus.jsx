import styles from "./ProductInfoStatus.module.scss"
import Chip from "@mui/material/Chip"

export default function ProductInfoStatus(){
    return (
        <div className={styles["product-info-status"]}>
            <Chip className={styles.status} variant="filled" label={"Live".toUpperCase()}/>
        </div>
    )
}