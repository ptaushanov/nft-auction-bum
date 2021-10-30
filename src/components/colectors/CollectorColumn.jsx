import styles from "./CollectorColumn.module.scss"
import Collector from "./Collector"

export default function CollectorColumn({items=[]}){
    const findType = index => index % 2 !== 0 ? "light" : undefined;
    
    return (
        <div className={styles.CollectorColumn}>
            <div className={styles.column}>
                {items.slice(0, 3).map((item, index)=> (
                    <Collector {...item} type={findType(index)} key={index}/>
                ))}
            </div>
        </div>
    )
}
