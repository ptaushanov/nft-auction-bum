import styles from "./Avatar.module.scss"

function Avatar({ size=90, url, verified=false }){
    return (
        <div className="Avatar">
            <div className={styles.avatar} style={{width: size, height: size}}>
                <img className={styles.image} src={url} alt="profile picture" />
                { verified &&
                    <img className={styles.badge} src="/images/verified.svg" alt="badge" />
                }
            </div>
        </div>
    )
}

export default Avatar;