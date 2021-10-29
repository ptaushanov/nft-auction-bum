import styles from "./How.module.scss"
import { Grid, Container } from "@mui/material"
import Step from "../step/Step"

function How({description, title, items=[], link}){
    return (
        <div className={styles.How}>
            <Container>
                <Grid container>
                    <Grid item md={7}>
                        ... WIP ...
                    </Grid>
                    <Grid item md={5} className={styles.steps}>
                        {items.map((item, index) => (
                            <Step
                                number={index+1}
                                title={item.title}
                                description={item.description}
                            />
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default How;