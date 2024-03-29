import User from "../user/User"
import styles from "./Collector.module.scss"
import { Grid } from "@mui/material"

export default function Collector({name, nftsCount, avatar, verified, id, type}){
    const checkType = type => type === "light" ? styles.light : undefined;
    return (
        <div className={styles.Collector}>
            <div className={styles.container}>
                <Grid container className={checkType(type)}>
                    <Grid item className={styles.number} xs={3}>
                        <p>{id}</p>
                    </Grid>
                    <Grid item className={styles.main} xs={9}>
                        <User name={name} info={nftsCount + " items"} size={53} avatar={avatar} verified={verified} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}