import styles from "./Step.module.scss"
import { Grid } from "@mui/material"

function Step({number, title, description}){
    return (
        <div className={styles.How}>
            <Grid container>
                <Grid 
                    className={styles.number}
                    item xs={4}
                    sx={{display:"flex", justifyContent:"center"}}
                >
                    <p style={{alignSelf:"center"}}>{number}</p>
                </Grid>
                <Grid className={styles.main} item xs={8}>
                    <h2>{title}</h2>
                    <p>{description}</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default Step;