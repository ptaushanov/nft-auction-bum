import styles from "./Logo.module.scss"

function Logo({type}) {

    return (
        <div className={styles.Logo}>
            { type === "muted" ?
                <img className={styles.image} src="./images/logo-muted.svg"/> :
                <img className={styles.image} src="./images/logo.svg"/> 
            }
        </div>
    )
}

export default Logo;