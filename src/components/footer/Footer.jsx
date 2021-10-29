import styles from "./Footer.module.scss"
import { Grid, Button, Container } from "@mui/material"
import Logo from "../logo/Logo"

function Footer(){
    return (
        <div className={styles.Footer}>
            <Container>
                <Grid container spacing={8}>
                    <Grid item md={4} style={{marginBottom: "-0.5rem"}}>
                        <Logo type={"muted"}/>
                    </Grid>
                    <Grid item md={4} sx={{display:"flex"}}>
                        <p className={styles.rights}>Bum All Rights Reserved 2021</p>
                    </Grid>
                    <Grid item md={4} sx={{display:"flex"}}>
                        <Button className={styles.menuItem} variant={"text"}>Privacy Policy</Button>
                        <Button className={styles.menuItem} variant={"text"}>Cookie Policy</Button>
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    )
}

export default Footer;