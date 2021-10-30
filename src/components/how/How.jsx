import styles from "./How.module.scss"
import { Grid, Container, Button } from "@mui/material"
import Step from "../step/Step"

function How({description, title, items=[], link}){
    return (
        <div className={styles.How}>
            <Container>
                <Grid container>
                    <Grid item md={7} className={styles.info}>
                        <div className="wrapper">
                            <h1 className={styles.title}>{title}</h1>
                            <p className={styles.description}>{description}</p>
                            <Button
                                variant={"contained"}
                                className={styles.button}
                                href={link}
                            >Learn More</Button>
                        </div>
                    </Grid>
                    <Grid item md={5} className={styles.steps}>
                        {items.map((item, index) => (
                            <Step
                                key={index}
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