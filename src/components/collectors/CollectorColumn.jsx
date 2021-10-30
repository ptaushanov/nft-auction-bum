import styles from "./CollectorColumn.module.scss"
import Collector from "./Collector"

export default function CollectorColumn({items=[]}){
    return (
        <div className={styles.CollectorColumn}>
            <div className={styles.column}>
                {items.slice(0, 3).map((item, index)=> {
                    return index % 2 !== 0 ?
                    <Collector {...item} type={"light"} key={index}/> :
                    <Collector {...item} key={index}/> 
                })}
            </div>
        </div>
    )
}
