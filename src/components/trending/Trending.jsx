import styles from "./Trending.module.scss"
import { FormControl, Grid, Select, MenuItem, Container, Stack, InputLabel } from "@mui/material"
import Card from "../card/Card"

function Trending({cards=[]}){
    return (
        <div className="Trending">
            <Container>
                <Stack spacing={2} direction="row">
                    <h1>Trending</h1>
                    <FormControl fullWidth className={styles.select}>
                        <InputLabel id="select-label">Sort By</InputLabel>
                        <Select labelId="select-label">
                            <MenuItem>This week</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <Grid container spacing={2}>
                    {cards.slice(0, 5).map((card, index)=>{
                        return (
                            <Grid item xs={3} key={index}>
                                <Card {...card} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Container>
        </div>
    )
}

export default Trending;