import Grid from "@mui/material/Grid"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Logo from "../logo/Logo"

function Header(){
    return (
        <div className="Header">
            <Grid container>
                <Grid item>
                    <Logo></Logo>
                </Grid>
                <Grid item>
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </Grid>
                <Grid item>
                    <Button variant={"text"}>Home</Button>
                    <Button variant={"text"}>Activity</Button>
                    <Button variant={"contained"}>EXPLORE</Button>
                </Grid>
            </Grid>
        </div>
    )
}

export default Header;