import {Button, InputBase, Paper, Grid, Container} from "@mui/material"
import SearchIcon from "@mui/icons-material/Search"
import Logo from "../logo/Logo"
import styles from "./Header.module.scss"

function Header(){
    return (
        <div className={styles.Header}>
            <Container>
                <Grid className={styles.container} container>
                    <Grid item  md={2} sx={{marginBottom: "-0.5rem"}}>
                        <Logo/>
                    </Grid>
                    <Grid item md={5} sx={{display: "flex"}}>
                        <Paper className={styles.searchPaper} sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:400}} >
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

export default Header;