import styles from "./Avatar.module.scss"

export default function Avatar({ size=90, url, verified=false }){
    return (
        <div className="Avatar">
            <div className={styles.avatar} style={{width: size, height: size}}>
                <img className={styles.image} src={url} />
                { verified &&
                    <img className={styles.badge} src="/images/verified.svg" />
                }
            </div>
        </div>
    )
}