import styles from "./Footer.module.scss"
import { Grid, Button } from "@mui/material"
import Logo from "../logo/Logo"

function Footer(){
    return (
        <div className={styles.Footer}>
            <Grid className={styles.container} container spacing={8}>
                <Grid item style={{marginBottom: "-0.5rem"}}>
                    <Logo type={"muted"}/>
                </Grid>
                <Grid item>
                    <p className={styles.rights}>Bum All Rights Reserved 2021</p>
                </Grid>
                <Grid item>
                    <Button className={styles.menuItem} variant={"text"}>Privacy Policy</Button>
                    <Button className={styles.menuItem} variant={"text"}>Cookie Policy</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;