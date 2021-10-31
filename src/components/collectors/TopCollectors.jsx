import styles from "./TopCollectors.module.scss"
import CollectorColumn from "./CollectorColumn"
import { Container, Grid, FormControl, InputLabel, Select, MenuItem  } from "@mui/material"
import _ from "lodash"

export default function TopCollectors({collectors=[]}){
    const indexCollectors = (colrs) => colrs.map((cr, index) => Object.assign({}, cr, {id: index+1}));
    const chunkedCollectors = _.chunk(indexCollectors(collectors), 3);

    return (
        <div className={styles.TopCollectors}>
            <Container>
                <Grid container>
                    <Grid item xs={10}>
                        <h1>Top Collectors</h1>
                    </Grid>
                    <Grid item xs={2} sx={{display: "flex"}}>
                        <FormControl fullWidth className={styles.select} size="small">
                            <InputLabel id="select-label">Sort By</InputLabel>
                            <Select labelId="select-label">
                                <MenuItem>This week</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    {chunkedCollectors.map((cc, i) => (
                        <Grid item md={3} key={i}>
                            <CollectorColumn items={cc}/>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </div>
    )
}