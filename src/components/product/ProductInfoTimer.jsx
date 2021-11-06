import styles from "./ProductInfoTimer.module.scss"
import Countdown from 'react-countdown';
import { Fragment } from "react";

export default function ProductInfoTimer({timeEnd, onTimeEnd}){
    return (
        <div 
            className={`${styles["product-info-timer"]} ${timeEnd && styles.active}`}>
            { timeEnd && (
                <Fragment>
                    <div className={styles.header}>
                        <p className={styles.title}>Ends in</p>
                    </div>
                    <div className={styles.timer}>
                        <Countdown 
                            onComplete={onTimeEnd}
                            date={Date.now() + timeEnd}
                            renderer = {({ hours, minutes, seconds }) => (
                                <span>{hours}:{minutes}:{seconds}</span>
                            )}
                          />
                    </div>
                </Fragment>
            )}
        </div>
    )
}