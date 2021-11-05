import styles from "./ProductImage.module.scss"

export default function ProductImage({url}){
    return (
        <div className="product-image">
            <img className="image" src={url}/>
        </div>
    )
}