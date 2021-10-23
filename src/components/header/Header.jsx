import Grid from "@mui/material/Grid"
import Button from '@mui/material/Button';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import SearchIcon from "@mui/icons-material/Search"
import Logo from "../logo/Logo"
import styles from "./Header.module.scss"

function Header(){
    return (
        <div className={styles.Header} style={{display: "flex", justifyContent: "center"}}>
            <Grid className={styles.container} container spacing={6}>
                <Grid item style={{marginBottom: "-0.5rem"}}>
                    <Logo/>
                </Grid>
                <Grid item>
                    <Paper className={styles.searchPaper} sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width:400}} >
                        <SearchIcon className = {styles.searchIcon}/>
                        <InputBase className={styles.searchInput}  placeholder="Find items, users and activities"/>
                    </Paper>
                </Grid>
                <Grid item>
                    <Button className={styles.menuItem} variant={"text"}>Home</Button>
                    <Button className={styles.menuItem} variant={"text"}>Activity</Button>
                    <Button className={styles.menuItem} variant={"contained"}>EXPLORE</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;