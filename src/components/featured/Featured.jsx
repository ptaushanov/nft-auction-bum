import { Container, ImageList, ImageListItem } from "@mui/material";
import styles from "./Featured.module.scss"

function Featured({items = []}){
    return (
        <div className={styles.Featured}>
            <Container>
                <ImageList
                    cols={6}
                    variant="quilted"
                    gap={15}
                >
                {items.map(item => (
                        <ImageListItem key={item.image} cols={item.cols || 1} rows={item.rows || 1}>
                            <img className={styles.image} src={item.image}/>
                        </ImageListItem>
                ))}
                </ImageList>
            </Container>
        </div>
    )
}

export default Featured;