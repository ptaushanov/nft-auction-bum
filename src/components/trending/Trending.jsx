import styles from "./Trending.module.scss"
import { FormControl, Grid, Select, MenuItem, Container, InputLabel } from "@mui/material"
import Card from "../card/Card"

export default function Trending({cards=[]}){
    return (
        <div className="Trending">
            <Container>
                <Grid container>
                    <Grid item xs={10}>
                        <h1 className={styles.title}>Trending</h1>
                    </Grid>
                    <Grid item xs={2} sx={{display: "flex"}}>
                        <FormControl fullWidth className={styles.select} size={"small"}>
                            <InputLabel id="select-label">Sort By</InputLabel>
                            <Select labelId="select-label">
                                <MenuItem>This week</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    { cards.slice(0, 4).map((card, index) => (
                            <Grid item md={3} key={index}>
                                <Card {...card} />
                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </div>
    )
}