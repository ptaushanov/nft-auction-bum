import User from "../user/User"
import styles from "./Collector.module.scss"
import { Grid } from "@mui/material"

export default function Collector({name, nftsCount, avatar, verified, id, type}){
    return (
        <div className={styles.Collector}>
            <div className={styles.container}>
                <Grid container>
                    <Grid item className={styles.number} xs={3}>
                        <p>{id}</p>
                    </Grid>
                    <Grid item className={styles.main} xs={9}>
                        <User name={name} info={nftsCount + " items"} size={45} avatar={avatar} verified={verified} />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}