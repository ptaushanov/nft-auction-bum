import styles from "./ProductImage.module.scss"

export default function ProductImage({url}){
    return (
        <div className={styles["product-image"]}>
            <img className={styles["image"]} src={url}/>
        </div>
    )
}