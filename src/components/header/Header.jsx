import {Button, InputBase, Paper, Grid, Container} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import Logo from "../logo/Logo"
import styles from "./Header.module.scss"

export default function Header(){
    return (
        <div className={styles.Header}>
            <Container>
                <Grid container>
                    <Grid item  md={2}>
                        <Logo/>
                    </Grid>
                    <Grid item md={5} sx={{display: "flex"}}>
                        <Paper className={styles.searchPaper} sx={{ p: '0.625rem', display: 'flex', alignItems: 'center', width:"36.25rem"}} >
                            <SearchIcon className = {styles.searchIcon}/>
                            <InputBase className={styles.searchInput}  placeholder="Find items, users and activities"/>
                        </Paper>
                    </Grid>
                    <Grid item md={5} sx={{display: "flex", justifyContent:"flex-end"}}>
                        <Button className={styles.menuItem} variant={"text"}>Home</Button>
                        <Button className={styles.menuItem} variant={"text"}>Activity</Button>
                        <Button className={styles.menuItem} variant={"contained"}>EXPLORE</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}